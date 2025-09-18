import instance from "./request"

export const login = (data) => {
    return instance({
        url: 'auth/login',
        method: 'post',
        data
    })
}