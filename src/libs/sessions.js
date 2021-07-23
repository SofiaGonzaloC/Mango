const BASE_URL = 'https://api-badges-sgc.herokuapp.com'; // Badge management
const USERS_URL = 'https://django-api-asgc.herokuapp.com'; // User management
import Storage from "./storage"

class UserSession {
    static instance = new UserSession()

    // Makes  POST method to login a user using their username and password
    login = async body => {
        try {
            let request = await fetch(`${USERS_URL}/users/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            let response = await request.json()

            if(typeof response.username === 'string') {
                return response.user.username
            } else {
                return response
            }

        } catch (err) {
            console.log('Login error', err)
            throw Error(err)
        }
    }

    logout = async key => {
        // Deletes token
        try {
            await Storage.instance.remove(key)
            return true
        } catch (err) {
            console.log('Logout err', err)
            return false
        }
    }

    // Makes a POST method connecting to the selected URL to make a new user
    signup = async body => {
        try {
            let request = await fetch(`${USERS_URL}/users/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            })
            let response = await request.json()
            try{
                console.log(typeof response.username)
                return response.username
            }catch(err){
                return response
            }
        } catch (err) {
            console.log('Signup Err', err)
            throw Error(err) // error obj to send errors
        }
    }

    getToken = async key => {
        try {
            return await Storage.instance.get(key)
        } catch (err) {
            console.log('Get token error', err)
        }
    }

}

export default UserSession