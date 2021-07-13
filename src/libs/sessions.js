const BASE_URL = 'https://api-badges-sgc.herokuapp.com';
const USERS_URL = 'https://django-api-asgc.herokuapp.com'
import Storage from "./storage"

class UserSession {
    static instance = new UserSession()

    login = async body => {}

    logout = async => {}

    signup = async body => {}

    getToken = async key => {}

    
}