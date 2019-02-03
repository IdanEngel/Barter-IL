import {observable, action} from 'mobx'

class login {
    @observable username = ""
    @observable password = ""

    @action inputHandler = (name, val) => {
        this[name] = val
    }
    
  
}


const userLogin = new login()
export default userLogin