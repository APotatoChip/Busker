import { IUser, IBase } from ".";

export interface ILocation extends IBase{
    busker:IUser;
    location:String;
    markedAt:Date;
  
}