import { makeAutoObservable } from "mobx"

class Profile {
    id = null
    username = ''
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    auth({id, username}) {
        this.id = id
        this.username = username
        this.isAuth = true
    }

    logout() {
        this.id = null
        this.username = ''
        this.isAuth = false
    }

    get profileData() {
        return `${this.id} ${this.username}`
    }
}

export const profile = new Profile()