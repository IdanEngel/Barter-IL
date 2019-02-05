import {observable, action} from 'mobx'
import { async } from 'q';
import Axios from 'axios';

class login {
    @observable username = ""
    @observable password = ""
    @observable currentUserId = ""

    @action inputHandler = (name, val) => {
        // console.log(name)
        this[name] = val
        console.log(this.username)
    }
    @action getCurrentUserId = async () =>{
        let currentUserId = await Axios.get(`http://localhost:8000/currentUserPage/${this.username}`)
        console.log(currentUserId)
        this.currentUserId = currentUserId.data._id
    }
 
}


const userLogin = new login()
export default userLogin