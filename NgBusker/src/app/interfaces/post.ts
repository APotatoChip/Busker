import { IUser } from ".";

export interface IPost {
    _id:string;
    postedAt:string;
    author:IUser;
    textContent:string;
    likes:number;
    comments:string[];
    _v:number;
}