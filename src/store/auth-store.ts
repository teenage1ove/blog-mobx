import { makeAutoObservable } from 'mobx'
import { User } from '../interfaces/auth-interface'

class AuthStore {
	user: User | null = null
    isAuth = localStorage.getItem('user') !== null
	constructor() {
		makeAutoObservable(this)
	}

	setUser = async(user: User) => {
		localStorage.setItem('user', JSON.stringify(user))
		this.user = user
        this.isAuth = true
	}

	setLogout = async() => {
		localStorage.removeItem('user')
		this.user = null
        this.isAuth = false
	}
    
}

export default new AuthStore()
