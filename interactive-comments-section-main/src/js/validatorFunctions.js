import { User } from "./User.js"

export function isEmpty(RegisteredUsers, name, userName, email, password, confirmPassword){
    console.log("chegou aqui")
    let c = 0
    const newUser = new User()
    if(completedFields() && RegisteredUsers.length === 0 && password.value === confirmPassword.value){
        console.log("Tá vazio")
        newUser.setName(name.value)
        newUser.setUserName(userName.value)
        newUser.setEmail(email.value)
        newUser.setPassword(password.value)

        RegisteredUsers.push(newUser)
        console.log(RegisteredUsers)
        window.location.href = "../../index.html"
    }else{
        alert("As senhas devem ser iguais.")
    }
    if(completedFields()){
        RegisteredUsers.forEach((user)=>{
            console.log("testando")
            c += 1 
            if(userName.value === user.userName){
                console.log(`CurrenteUSerName: ${userName.value} e user.userName: ${user.userName}`)
                alert("Usuário já existe")
                c = 0
            }

            if(email.value === user.email){
                console.log(`CurrenteUSerName: ${email.value} e user.userName: ${user.email}`)
                alert("E-mail já cadastrado")
                c = 0
            }
        })

        if(c === RegisteredUsers.length){
            if(password.value === confirmPassword.value){
                newUser.setName(name.value)
                newUser.setUserName(userName.value)
                newUser.setEmail(email.value)
                newUser.setPassword(password.value)
                console.log(RegisteredUsers)
                window.location.href = "../../index.html"
            }else{
                alert("As senhas devem ser iguais.")
            }
        }
    }
    
}

function completedFields(){
    if(name.value === "" || userName.value === "" || email.value === "" || password.value === "" || confirmPassword === "") return false

    return true
}