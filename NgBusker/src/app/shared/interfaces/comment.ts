import { IUser,IPost, IBase } from ".";

export interface IComment extends IBase{
    author:IUser;
    postedAd:string;
    postId:IPost;
    textContent:string;
    likes:number;
    replyComments:IComment[];
}