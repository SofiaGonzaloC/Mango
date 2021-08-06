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

            try {
                let key = `token-${response.user.username}`
                await Storage.instance.store(key, response.token);
                key = `id-${response.user.username}`
                await Storage.instance.store(key, JSON.stringify(response.user));
                return true
            } catch (err) {
                console.log('login error', err);
                throw Error(err);
            }

        } catch (err) {
            console.log('Login error', err)
            throw Error(err)
        }
    }

    logout = async key => {
        // Deletes token
        try {
            const allkeys = await Storage.instance.getAllKeys()
            const tokens = allkeys.filter(key => key.includes('token-'))
            await Storage.instance.multiRemove(tokens)
            const ids = allkeys.filter(key => key.includes('id-'))
            await Storage.instance.multiRemove(ids)
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
            if (typeof response.username === 'string') {
                return response.username
            } else {
                return response
            }
        } catch (err) {
            console.log('Signup Err', err)
            throw Error(err) // error obj to send errors
        }
    }

    getUser = async () => {
        try {
            const allKeys = await Storage.instance.getAllKeys()
            const data = allKeys.filter(key => key.includes('id-'))
            const user = await Storage.instance.get(data.toString())
            return JSON.parse(user)
        } catch (err) {
            console.log('Get user id err', err)
        }
    }

    getToken = async username => {
        try {
            const key = `token-${username}`
            return await Storage.instance.get(key)
        } catch (err) {
            console.log('Get token error', err)
        }
    }

    editProfile = async (id, token, body) => {  
        console.log(id);
        console.log(token);
        console.log(body);
        let uploadData = new FormData()
        uploadData.append( 'profile.profile_picture', {
            type: 'image/jpeg',
            uri: body,
            name: 'profile.jpeg'
        })

        try {
            let request = await fetch(`${USERS_URL}/profile/${id}/`, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Token ${token}`,
                },
                body: uploadData,
            })
            let response = await request.json()
            return response
        } catch (err) {
            console.log("Edit profile error", err)
        }
    }

}

export default UserSession