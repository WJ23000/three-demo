import { get, post } from '../utils/request';
import baseUrl from "../config/config";

const url = baseUrl + '/mapService';
const newUrl = baseUrl + '/userService';

export function getLineMap(params) {
    const requestUrl = url + "/getLineMap?type=" + params;
    return get(requestUrl, params);
}

export function editUserInfo(params) {
    const requestUrl = newUrl + "/editUserInfo";
    return post(requestUrl, params);
}

export function getCarModel(params) {
    const requestUrl = "/threejs/examples/models/gltf/ferrari.glb"; // 请求public文件夹下的模型文件
    return get(requestUrl, params);
}