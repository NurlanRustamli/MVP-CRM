import axios from "axios"

let adminsUrl = "https://66ed68d9380821644cdcb91c.mockapi.io/admins/admin"

export const usersApi ={
    loginUser: async function (email,password){
        try {
            let res = await axios.get(`${adminsUrl}`)
            return res.data
        } catch (error) {
            return error.response
        }
    },
    registerUser:async function (newAdminInfo){
        try {
         
            let res = await axios.post(`${adminsUrl}`,newAdminInfo)
            return res
        } catch (error) {
            return error.response
        }
    }
}