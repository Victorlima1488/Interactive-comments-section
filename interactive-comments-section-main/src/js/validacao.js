import { User } from "./User.js"

const RegisteredUsers = []

const name = document.getElementById("name")
const userName = document.getElementById("userName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const buttonLogIn = document.getElementById("buttonLogIn")

buttonLogIn.addEventListener("click", ()=>{

    const newUser = new User()

    newUser.setName(name.value)
    newUser.setUserName(userName.value)
    newUser.setEmail(email.value)
    newUser.setPassword(password.value)

    console.log(newUser.getName() + "\n" + newUser.getUserName() + "\n" + newUser.getEmail() + "\n" + newUser.getPassword())

    RegisteredUsers.push(newUser)

    RegisteredUsers.forEach((user)=>{
        if(RegisteredUsers.length === 1){
            console.log("ok")
        }else if(newUser.getUserName() === user.userName){
            alert("Usuário já existe")
        }
    })
})
