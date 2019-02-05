import { observable, action, inject } from 'mobx'
import axios from 'axios'

class Singup {
    @observable username = ""
    @observable password = ""
    @observable name = ""
    @observable lastname = ""
    @observable location = ""
    @observable skills = []
    @observable age = ""
    @observable imgURL = ""

    @action addNewUser = async () => {
        if (this.username !== "" && this.password !== ""
            && this.name !== "" && this.lastname !== ""
            && this.location !== "" && this.skills !== ""
            && this.age !== "" && this.imgURL !== "") {
            await axios
                .post(`http://localhost:8000/newuser`, {
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    lastname: this.lastname,
                    location: this.location,
                    skills: this.skills,
                    age: this.age,
                    imgURL: this.imgURL
                })
            alert('added new user')
        } else {
            alert('all values must be completed')
        }
    }




    @action changeState = (name, value) => {
        this[name] = value
    }
}

const userSignup = new Singup()
export default userSignup