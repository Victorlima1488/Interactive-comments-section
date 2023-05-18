export class User{
    constructor(name, userName, email, password){
        this.name = name
        this.userName = userName
        this.email = email
        this.password = password
    }

    setName(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setUserName(userName){
        this.userName = userName
    }

    getUserName(){
        return this.userName
    }

    setEmail(email){
        this.email = email
    }

    getEmail(){
        return this.email
    }

    setPassword(password){
        this.password = password
    }

    getPassword(){
        return this.password
    }
}