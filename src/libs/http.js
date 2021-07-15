const BASE_URL = 'https://api-badges-sgc.herokuapp.com';

class Http {
    static instance = new Http();

    // Retrieves all badges
    get_all = async () => {
        try{
            let request = await fetch(`${BASE_URL}/all/`)
            let response = await request.json()
            return response
        }catch(err){
            console.log('http get method err', err)
            throw Error(err)
        }
    }
    // Retrieves information of a badge
    get = async badgeId => {
        try{
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`)
            let response = await request.json()
            return response
        }catch(err){
            console.log('http get method err', err)
            throw Error(err)
        }
    }
    // Puts a new badge in case there's any new
    post = async badge => {
        try{
            let request = await fetch(`${BASE_URL}/new/`, {
                method: 'POST',
                body: JSON.stringify(badge),
            })
            let response = await request.json()
            return response
        }catch(err){
            console.log('http get method err', err)
            throw Error(err)
        }
    }
    // Edits the information of a badge
    put = async (badgeId, body) => {
        console.log(badgeId)
        console.log(body)
        try{
            let request = await fetch(`${BASE_URL}/_id:${badgeId}`, {
                method: 'PUT',
                headers: {

                    'Content-Type': 'application/json',
          
                    Accept: 'application/json',
          
                  },
                body: JSON.stringify(body),
            });
            console.log(request)
            let response = await request.json()
            return response
        }catch(err){
            console.log('http put method err', err)
            throw Error(err)
        }
    }

    // Erases a selected badge
    remove = async badgeId => {
        try{
            let request = await fetch(`${BASE_URL}/_id:${badgeId}`,{
                method: 'DELETE',
            });
            let response = await request.json()
            console.log(response)
            return response;
        }catch(err){
            console.log('http delete method err', err)
            throw Error(err)
        }
    }

}

export default Http