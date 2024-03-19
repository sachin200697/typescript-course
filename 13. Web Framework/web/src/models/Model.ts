import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  get<K extends keyof T>(userProps: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // because we are returning a method get, it means we can use like user.on(p1,p2)
  // and it will directly call attributes.get method
  // but still there is a problem about it because we are calling it like user.on(p1,p2)
  // but user does not has data property so it will faild as this is refering to user not Attributes.
  // so to solve it just make method attribute.get as arrow function
  get get() {
    return this.attributes.get;
  }

  //   get on() {
  //     return this.events.on;
  //   }
  // instead of using get keywork, we can also use someting like below
  on = this.events.on;

  get trigger() {
    return this.events.trigger;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    } else {
      this.sync.fetch(id).then((response: AxiosResponse): void => {
        this.set(response.data);
      });
    }
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((response: AxiosResponse): void => {
        this.events.trigger("save");
      })
      .catch((): void => {
        this.events.trigger("error");
      });
  }
}
