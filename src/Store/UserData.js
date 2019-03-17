import { observable, action, computed } from 'mobx'
import Axios from 'axios';


class userFromDb {
    @observable users = []
    @observable index = 0
    @observable currentUser = ""
    @observable currentScreen = ""
    @observable matchedUserId = ""
    @observable raw = true

    @action getUsers = async () => {
        let data = await Axios.get('http://localhost:8000/users')
        this.users = data.data
        // return this.users
    }
    @action increaseIndex = async () => {
        if (this.index < this.users.length) {
            this.index++
        }
    }
    @action getCurrentPage = (currentScreen) => {
        this.currentScreen = currentScreen
    }
    @action getMatchedUserId = (matchedUserId) =>{
        this.matchedUserId = matchedUserId
    }
    @action updateUsers = (newUsers) => {
        console.log(newUsers)
        this.users = newUsers
        this.raw = false
    }
    @action setCurrentUser = () => {
        this.currentUser = this.users.find(user => user.username === localStorage.username)
        console.log(this.currentUser)
    }





}

const userData = new userFromDb()
export default userData