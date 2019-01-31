import {observable, action, computed} from 'mobx'
import Axios from 'axios';


class userFromDb {
    @observable users = []
    @observable index = 0
    @observable currentUser = ""

    @action getUsers = async () => {
        let data = await Axios.get('http://localhost:8000/users')
            this.users = data.data
            return this.users
    }
    @action increaseIndex = async () => {
        if (this.index < this.users.length) {
           this.index++
        }
       
      
    }
    

}

const userData = new userFromDb()
export default userData