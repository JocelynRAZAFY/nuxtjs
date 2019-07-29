
export default {

    hasToken(){
        if(localStorage.getItem('token')){
            return true
        }else {
            return false
        }
    },
    getToken(){
        return localStorage.getItem('token')
    },
    getHeader(){
        var config;
        var token = this.getToken()
        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/ld+json',
                    'Authorization': 'Bearer ' + token
                }
            }
        }else {
            config = {
                headers: {
                    'Content-Type': 'application/ld+json'
                }
            }
        }

        return config
    }
}