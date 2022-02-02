export interface IUser{
  _id:string;
  username:string;
  password:string;
  email:string;  
  avatar:string;
  bio:string;
  typeOptions:string;
  posts:string[];
  followers:string[];
  following:string[];
  _v:number;
}