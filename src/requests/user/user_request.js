import https from "@/requests/https";

export function userLogin(reqData) {
    return https.post("/mov/api/user/login", reqData);
}

export function userRegister(reqData) {
    return https.post("/mov/api/user/register", reqData);
}
