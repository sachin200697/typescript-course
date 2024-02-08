import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasId {
    id?: Number
}

export class Sync<T extends HasId> {
    constructor(private rootUrl: string){}
    fetch(id: number): AxiosPromise {
        return axios
          .get(`${this.rootUrl}/${id}`);
      }
    
      save(data: T): AxiosPromise{
        const {id} = data;
        if(id){
            // update existing with new changes
            return axios.put(`${this.rootUrl}/${id}`, data);
        }else {
            // create a new object 
            return axios.post(`${this.rootUrl}`, data);
        }
      }
}