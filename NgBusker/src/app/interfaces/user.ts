import { IBase } from "."; 

export interface IUser extends IBase{
  username:string;
  password:string;
  email:string;  
  avatar:string;
  bio:string;
  typeOptions:string;
  posts:string[];
  followers:string[];
  following:string[];
}