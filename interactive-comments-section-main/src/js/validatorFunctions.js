import { User } from "./User.js"

export function register(RegisteredUsers, name, userName, email, password, confirmPassword){
    console.log("chegou aqui")
    const newUser = new User()

    let c = localStorage.getItem("if") ?? true
    
    if(completedFields(name, userName, email, password, confirmPassword)){ 
        if(c != "false"){
            console.log("if")
            console.log(c)
            if(checkPasswords(password.value, confirmPassword.value)){
                newUser.setName(name.value)
                newUser.setUserName(userName.value)
                newUser.setEmail(email.value)
                newUser.setPassword(password.value)

                let length = 1

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
            console.log(c)
            for(let i = 1; i <= length; i++){
                console.log("chegou no for")
                if(checkUsername(localStorage.getItem("userName" + i) , userName.value)){
                    console.log(`O primeiro if é: ${localStorage.getItem("userName" + i)} e name é: ${userName.value}`)
                    if(checkEmail(localStorage.getItem("email" + i), email.value)){
                        console.log(`O segundo if é: ${localStorage.getItem("email" + i)} e email é: ${email.value}`)
                        if(checkPasswords(localStorage.getItem("password" + i), confirmPassword.value)){
                            console.log(`O terceiro if é: ${localStorage.getItem("password" + i)} e password é: ${confirmPassword.value}`)
                            newUser.setName(name.value)
                            newUser.setUserName(userName.value)
                            newUser.setEmail(email.value)
                            newUser.setPassword(password.value)

                            length +=1

                            localStorage.setItem("length", length)

                            saveToLocalStorage(length, name.value, userName.value, email.value, password.value)

                            clearInputs(name, userName, email, password, confirmPassword)
                            window.location.href = "../../index.html"
                        }else{
                            alert("As senhas devem ser iguais!")
                            password.value = ""
                            confirmPassword.value = ""
                        }
                    }else{
                        alert("Email já existe!")
                        email.value = ""
                    }
                }else{
                    alert("Usuário já existe!")
                    userName.value = ""
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
    if(userName !== user){
        return true
    }
    return false
}

function checkEmail(email, user){
    if(email !== user){
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