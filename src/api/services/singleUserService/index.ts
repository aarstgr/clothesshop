import { instance } from "../../constants";

export interface IUserType {
    avatar:string;
    email:string;
    first_name:string;
    id:number;
    last_name:string;
}
export const singleUserService =async (id:string | number): Promise<IUserType>=>{
    const res =await instance.get(`/api/users/${id}`);
    return res.data.data
}