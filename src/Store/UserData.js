import { observable, action, computed } from 'mobx'
import Axios from 'axios';
import { async } from 'q';


class userFromDb {
    @observable users = []
    @observable index = 0
    @observable currentUser = ""
    @observable currentScreen = ""

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
    @action getCurrentPage = (currentScreen) => {
        this.currentScreen = currentScreen
    }




}

const userData = new userFromDb()
export default userData