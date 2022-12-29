import httpService from "./httpService";
import {apiElectricUrl } from "../config.json";



const electricApi = apiElectricUrl+"/electric"

export async function getFacturesOfUser(id){
    return await httpService.get(electricApi+"/"+id)
}

export async function getAllUser(){
    return await httpService.get(apiElectricUrl+"/user/all")
}