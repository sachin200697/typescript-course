import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string; //to make this optional we can use ?
  age?: number;
}

const rootUrl = `http://localhost:5007/users`;

export class User extends Model<UserProps> {
  // we are putting all below functionality in Model class

  // public events: Eventing = new Eventing();

  // because UserProps has id as optional,
  // so will have to make it optional as well inside Sync->HasId interface
  // public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  // public attributes: Attributes<UserProps> = new Attributes<UserProps>({});

  // constructor(attr: UserProps) {
  //   this.attributes = new Attributes<UserProps>(attr);
  // }

  // // because we are returning a method get, it means we can use like user.on(p1,p2)
  // // and it will directly call attributes.get method
  // // but still there is a problem about it because we are calling it like user.on(p1,p2)
  // // but user does not has data property so it will faild as this is refering to user not Attributes.
  // // so to solve it just make method attribute.get as arrow function
  // get get() {
  //   return this.attributes.get;
  // }

  // get on() {
  //   return this.events.on;
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // set(update: UserProps): void {
  //   this.attributes.set(update);
  //   this.events.trigger("change");
  // }

  // fetch(): void {
  //   const id = this.get("id");
  //   if (typeof id !== "number") {
  //     throw new Error("Cannot fetch without an id");
  //   } else {
  //     this.sync.fetch(id).then((response: AxiosResponse): void => {
  //       this.set(response.data);
  //     });
  //   }
  // }

  // save(): void {
  //   const data = this.attributes.getAll();
  //   this.sync
  //     .save(data)
  //     .then((response: AxiosResponse): void => {
  //       this.events.trigger("save");
  //     })
  //     .catch((): void => {
  //       this.events.trigger("error");
  //     });
  // }

  static buildUser(attrs: UserProps) {
    // If no constructor is defined the default constructor is used,
    // which calls super with all the passed arguments
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge():void {
    this.set({age:Math.random()*100});
  }
}
