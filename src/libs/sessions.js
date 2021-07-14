const BASE_URL = 'https://api-badges-sgc.herokuapp.com';
const USERS_URL = 'https://django-api-asgc.herokuapp.com'
import Storage from "./storage"

class UserSession {
    static instance = new UserSession()

    login = async body => {
        try {
            let request = await fetch(`${USERS_URL}/users/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(body),
            })
            let response = request.json()
            console.log(request)
            // let key = `token-${response.user.username}`
            // await Storage.instance.store(key, response.token)
            // return response.user.username
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

    signup = async body => {
        try {
            await fetch(`${USERS_URL}/users/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            })
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