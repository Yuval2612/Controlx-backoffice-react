import { LoginUser } from '../models/loginUser';
import API from './api';


export async function UserLogin(info: LoginUser) {
    const res = await API.put(`api/account/login`, info);
    return res.data;
}