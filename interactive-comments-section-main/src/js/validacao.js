import { User } from "./User.js"
import { isEmpty } from "./validatorFunctions.js"

const RegisteredUsers = []
const name = document.getElementById("name")
const userName = document.getElementById("userName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const buttonLogIn = document.getElementById("buttonLogIn")
const buttonSingIn = document.getElementById("buttonSingIn")
const changeRegistrationForm = document.getElementById("changeRegistrationForm")
const changeFormForLogin = document.getElementById("changeFormForLogin")
const singIn = document.getElementById("singIn")
const logIn = document.getElementById("logIn")
const nextPage = document.getElementById("next page")

buttonSingIn.addEventListener("click", ()=>{

    console.log("clicou")

    

    const currentName = name.value
    const currentUserName = userName.value
    const currentEmail = email.value
    const currentPassword = password.value
    const currentConfirmPassword = confirmPassword.value
    let c = 0

    isEmpty(RegisteredUsers, name, userName, email, password, confirmPassword)


})

changeRegistrationForm.addEventListener("click", ()=>{
    singIn.style.display = "flex"
    logIn.style.display = "none"
    changeRegistrationForm.innerText = "Ainda não tem conta? Faça seu cadastro!"
})

changeFormForLogin.addEventListener("click", ()=>{
    singIn.style.display = "none"
    logIn.style.display = "flex"
    changeRegistrationForm.innerText = "Ainda não tem conta? Faça seu cadastro!"
})





// if(completedFields() && RegisteredUsers.length === 0){
//     newUser.setName(currentName)
//     newUser.setUserName(currentUserName)
//     newUser.setEmail(currentEmail)
//     newUser.setPassword(currentPassword)
//     RegisteredUsers.push(newUser)
//     console.log(RegisteredUsers)
//     name.value = ""
//     userName.value = ""
//     email.value = ""
//     password.value = ""
//     confirmPassword.value = ""  
// }else if(completedFields()){
//     RegisteredUsers.forEach((user)=>{
//         console.log("testando")
//         c += 1
//         if(currentUserName === user.userName){
//             console.log(`CurrenteUSerName: ${currentUserName} e user.userName: ${user.userName}`)
//             alert("Usuário já existe")
//             name.value = ""
//             userName.value = ""
//             email.value = ""
//             password.value = ""
//             confirmPassword.value = ""
//             c = 0
//         }
//         if(currentEmail === user.email){
//             console.log(`CurrenteUSerName: ${currentUserName} e user.userName: ${user.userName}`)
//             alert("emial já cadastrado")
//             name.value = ""
//             userName.value = ""
//             email.value = ""
//             password.value = ""
//             confirmPassword.value = ""
//             c = 0
//         }
//     })

//     if(c === RegisteredUsers.length){
//         if(currentPassword === currentConfirmPassword){
//             newUser.setName(currentName)
//             newUser.setUserName(currentUserName)
//             newUser.setEmail(currentEmail)
//             newUser.setPassword(currentPassword)
//             RegisteredUsers.push(newUser)
//             console.log(RegisteredUsers)
//             name.value = ""
//             userName.value = ""
//             email.value = ""
//             password.value = ""
//             confirmPassword.value = ""
//             window.location.href = "../../index.html"
//         }else{
//             alert("As senhs devem ser iguais.")
//         }
//     }

// }