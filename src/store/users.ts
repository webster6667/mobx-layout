import { makeAutoObservable } from "mobx"
import axios from 'axios'

class Users {
    userList = [
        {id: 1, name: 'Jon'},
        {id: 2, name: 'Ben'},
        {id: 3, name: 'Alex'}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    async add() {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')

        this.userList.push(data[this.userList.length])
    }

}

export const users = new Users()