import { IUser,IPost, IBase } from ".";

export interface IComment extends IBase{
    author:IUser;
    postedAt:string;
    postId:IPost;
    textContent:string;
    likes:number;
    replyComments:IComment[];
}