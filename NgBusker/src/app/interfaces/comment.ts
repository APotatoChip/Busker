import { IUser,IPost } from ".";

export interface IComment{
    _id:string;
    author:IUser;
    postedAd:string;
    postId:IPost;
    textContent:string;
    likes:number;
    replyComments:IComment[];
    _v:number;
}