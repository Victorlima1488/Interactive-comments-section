import { User } from "./User.js"

export function register(RegisteredUsers, name, userName, email, password, confirmPassword){
    console.log("chegou aqui")
    const newUser = new User()

    let c = localStorage.getItem("if") ?? true
    console.log(c)
    
    if(completedFields(name, userName, email, password, confirmPassword)){
        console.log("teste1")
        if(c != "false"){
            console.log("if")
            console.log(c)
            if(checkPasswords(password.value, confirmPassword.value)){
                console.log("Tá vazio")
                newUser.setName(name.value)
                newUser.setUserName(userName.value)
                newUser.setEmail(email.value)
                newUser.setPassword(password.value)
        
                RegisteredUsers.push(newUser)
                console.log(RegisteredUsers)

                let length = RegisteredUsers.length

                saveToLocalStorage(length, name.value, userName.value, email.value, password.value)

                localStorage.setItem("length", length)

                clearInputs(name, userName, email, password, confirmPassword)

                localStorage.setItem("if", "false")

                // window.location.href = "../../index.html"
            }else{
                alert("As senhas devem ser iguais.")
                password.value = ""
                confirmPassword.value = ""
            }
        }else{
            console.log("else")
            console.log(RegisteredUsers)
            for(let i = 1; i <= length+1; i++){
                console.log("testando")
                console.log(localStorage.getItem("userName" + i))
                if(checkUsername(localStorage.getItem("userName" + i, name))){
                    if(checkEmail(localStorage.getItem("email" + i, email))){
                        if(checkPasswords(localStorage.getItem("password" + i, confirmPassword))){
                            console.log("Tá vazio")
                            newUser.setName(name.value)
                            newUser.setUserName(userName.value)
                            newUser.setEmail(email.value)
                            newUser.setPassword(password.value)

                            RegisteredUsers.push(newUser)
                            console.log(RegisteredUsers)   

                            length +=1

                            localStorage.setItem("length", length)

                            saveToLocalStorage(length, name.value, userName.value, email.value, password.value)

                            clearInputs(name, userName, email, password, confirmPassword)
                            window.location.href = "../../index.html"
                        }else{
                            alert("As senhas devem ser iguais!")
                        }
                    }else{
                        alert("Email já existe!")
                    }
                }else{
                    alert("Usuário já existe!")
                }
            }
        }
            
    }
}


function completedFields(name, userName, email, password, confirmPassword){
    if(name.value === "" || userName.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") return false

    return true
}

function checkPasswords(password, confirmPassword){
    if(password === confirmPassword){
        return true
    }
    return false
}

function clearInputs(name, userName, email, password, confirmPassword){
    name.value = ""
    userName.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
}

function checkUsername(userName, user){
    if(userName != user){
        return true
    }
    return false
}

function checkEmail(email, user){
    if(email != user){
        return true
    }
    return false
}

function saveToLocalStorage(currentLocalVariableName, name, userName, email, password){
    localStorage.setItem("name" + currentLocalVariableName, name)
    localStorage.setItem("userName" + currentLocalVariableName, userName)
    localStorage.setItem("email" + currentLocalVariableName, email)
    localStorage.setItem("password" + currentLocalVariableName, password)
} 