import {observable, action} from 'mobx'
import Axios from 'axios';

class CurrentUserData {
    @observable currentUserInformation = {}
    @observable skillsData = []

    @action getUser = async (currentUser) => {
        let userInformation = await Axios.get(`http://localhost:8000/profile/${currentUser}`)
        this.currentUserInformation = userInformation.data
        this.skillsData = userInformation.data.skills
        // await console.log(userInformation)
    }
}

let currentUser = new CurrentUserData()

export default currentUser