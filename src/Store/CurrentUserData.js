import {observable, action} from 'mobx'
import Axios from 'axios';
import { async } from 'q';

class CurrentUserData {
    @observable name = ""
    @observable lastName = ""
    @observable image = ""
    @observable location = ""
    @observable skills = []

    @action getUser = async (currentUser) => {
        let data = await Axios.get(`http://localhost:8000/currentUserPage/:${currentUser}`)
        this.name = data.name
        this.lastName = data.lastName
        this.image = data.imgURL
        this.location = data.location
        this.skills = data.skills
        return(
            this.name, this.lastName, this.image, this.location, this.skills
        )
    }
}

let currentUser = new CurrentUserData()

export default currentUser