export interface User {
  _id: string,
  email:string,
  others?:any
}


export interface Users {
  usersList:Array<User>
}

export enum UserRoles
{
  ADMIN = "Admin",
  USER = "User"
}