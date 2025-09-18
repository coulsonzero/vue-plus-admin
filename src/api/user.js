import instance from "./request"

export const getUsers = () => {
    return instance({
        url: 'v1/user',
        method: 'get',
    })
}