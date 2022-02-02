export interface IPost {
    _id:string;
    postedAt:string;
    author:string;
    textContent:string;
    likes:number;
    comments:string[];
    _v:number;
}