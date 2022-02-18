import { IBase, IUser } from ".";

export interface IPost extends IBase{
    postedAt:string;
    author:IUser;
    textContent:string;
    likes:number;
    comments:string[];
}