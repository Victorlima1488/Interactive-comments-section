import { Comment } from "../js/Comment.js"

const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")
const newSend = document.getElementById("newSend")
const popUpSettings = document.getElementById("popUpSettings")
const buttonSttings = document.getElementById("buttonSttings")
const listPopUpSettingsAuxFont = document.getElementById("listPopUpSettingsAuxFont")
const listPopUpSettingsAuxLanguage = document.getElementById("listPopUpSettingsAuxLanguage")
const fontSizeSettings = document.getElementById("fontSizeSettings")
const LanguageSettings = document.getElementById("LanguageSettings")
const main = document.getElementById("main")
const selectOptionSize = document.getElementById("selectOptionSize")
const fontHeader = document.querySelectorAll(".textSize")

const themeBody = document.getElementById("body")
themeBody.classList.remove("purple")
themeBody.classList.add(localStorage.getItem("theme"))

const theme = document.getElementById("theme")
theme.textContent = ""
theme.textContent = localStorage.getItem("textTheme")

const themeIcon = document.createElement("img")
themeIcon.id = "themeIcon"
themeIcon.src = ""
themeIcon.src = localStorage.getItem("iconTheme")
theme.appendChild(themeIcon)

let x = true
export let testing = false
let currentTheme
let currentIcon
let currentSize = localStorage.getItem("size")

fontHeader.forEach((Element)=>{
    Element.style.fontSize = currentSize
})

updatingSettingsWindowSize()

const createComment = () => {
    
    if(addComment.value){

        // Variáveis de contagem para as operações codicionais em algumas funções.
        let counter1 = true
        let counter2 = true
        let c = 0

        // Instanciadno a classe Comment.
        const newComment = new Comment("Victor", "@_vitorlimaa_")
        newComment.creationTime()

        //Criação dos elementos que irão compor o comentário.
        let textComment = addComment.value

        const li = document.createElement("li")

        const commentHeader = document.createElement("div")
        commentHeader.id = "commentHeader"

        const profileAndPostingTime = document.createElement("div")
        profileAndPostingTime.id = "profileAndPostingTime"

        const profilePicture = document.createElement("img")
        profilePicture.id = "profilePicture"
        profilePicture.src = "./images/avatars/image-maxblagun.png"

        const name = document.createElement("div")
        name.classList.add("textSize")
        name.id = "name"
        name.textContent = newComment.getAuthor()
        name.style.fontSize = currentSize

        const postingTime = document.createElement("div")
        postingTime.classList.add("textSize")
        postingTime.id = "postingTime"
        postingTime.textContent = newComment.getPostingTime()
        setInterval(() => {
            postingTime.textContent = newComment.getPostingTime();
        }, 1000);
         
        const check = document.createElement("img")
        check.id = "check"
        check.src = "./images/Icon-check.svg"

        const edit = document.createElement("img")
        edit.id = "edit"
        edit.src = "./images/icon-edit.svg"

        const delet = document.createElement("img")
        delet.id = "delet"
        delet.src = "./images/icon-delete.svg"
        delet.style.display = "none"

        const userName = document.createElement("span")
        userName.classList.add("textSize")
        userName.id = "userName"
        userName.textContent = newComment.getUserName()
        userName.style.fontSize = currentSize

        const divReply = document.createElement("div")
        divReply.id = "divReply"

        const textReply = document.createElement("div")
        textReply.id = "textReply"
        textReply.textContent = "Reply"

        const reply = document.createElement("img")
        reply.id = "reply"
        reply.src = "./images/icon-reply.svg"

        const commentText = document.createElement("div")
        commentText.classList.add("textSize")
        commentText.id = "commentText"
        commentText.style.fontSize = currentSize

        const div = document.createElement("div")
        div.id = "newDiv"

        console.log("o ID da div é: " + newComment.getId().toString())

        const line = document.createElement("div")
        line.id = "line"

        // Montando o comnetário na tela amarando um elemento ao outro.
        profileAndPostingTime.appendChild(profilePicture)
        profileAndPostingTime.appendChild(name)
        profileAndPostingTime.appendChild(postingTime)
        profileAndPostingTime.appendChild(edit)
        profileAndPostingTime.appendChild(check)
        profileAndPostingTime.appendChild(delet)
        commentHeader.appendChild(profileAndPostingTime)
        divReply.appendChild(reply)
        divReply.appendChild(textReply) 
        commentHeader.appendChild(divReply)
        commentText.appendChild(userName)
        commentText.appendChild(document.createTextNode(" "))
        commentText.appendChild(document.createTextNode(textComment))
        li.appendChild(commentHeader)
        li.appendChild(commentText)
        comments.appendChild(li)
        comments.appendChild(div)

        addComment.value = ""

        // Criação dos eventos para editar e deletar o comentário, assim como responder algum comentário.
        edit.addEventListener("click", () =>{
            if(counter1){
                delet.style.display = "block"
                counter1 = false
            }

            edit.style.display = "none"
            check.style.display = "block"

            addComment.value = commentText.lastChild.textContent
            addComment.focus()
        });

        check.addEventListener("click", () =>{
            commentText.lastChild.textContent = addComment.value

            if(!counter1){
                delet.style.display = "none"
                counter1 = true
            }

            edit.style.display = "block"
            check.style.display = "none"
            // delet.style.display = "none"

            addComment.value = ""
        })

        delet.addEventListener("click", () =>{

            const popUp = document.createElement("div")
            popUp.id = "pop-up"
            const popUpTitle = document.createElement("h3")
            popUpTitle.id = "popUpTitle"
            popUpTitle.textContent = "Delete Comment"
            const textPopUp = document.createElement("div")
            textPopUp.id = "textPopUp"
            textPopUp.textContent = "Once the comment is deleted, the operation cannot be undone. Are you sure?"
            const buttonsPopUp = document.createElement("div")
            buttonsPopUp.id = "buttonsPopUp"
            const confirmDelet = document.createElement("button")
            confirmDelet.id = "confirmDelet"
            confirmDelet.textContent = "Confirm"
            const confirmCancel = document.createElement("button")
            confirmCancel.textContent = "Cancel"
            confirmCancel.id = "confirmCancel"
            const darkFun = document.createElement("div")
            darkFun.id = "darkFun"

            document.body.appendChild(darkFun)
            document.body.appendChild(popUp)
            popUp.appendChild(popUpTitle)
            popUp.appendChild(textPopUp)
            popUp.appendChild(buttonsPopUp)
            buttonsPopUp.appendChild(confirmDelet)
            buttonsPopUp.appendChild(confirmCancel)

            confirmDelet.addEventListener("click", () =>{
                li.remove()
                if(line){
                    line.remove()
                }
                addComment.value = ""

                popUp.remove()
                darkFun.remove()
            })

            confirmCancel.addEventListener("click", () =>{
                popUp.remove()
            })
        })

        divReply.addEventListener("click", () =>{

            const newCommentReply = new Comment("Victor", "@_vitorlimaa_")
            newCommentReply.creationTime()

            x = false

                addComment.addEventListener("keyup", (event) =>{
                    if(!x){
                        if (event.keyCode === 13) {
                            event.preventDefault()
                            createReply(event)
                        }
                    }
                });

                console.log(x)

            send.style.display = "none"
            newSend.style.display = "block"
            addComment.focus()

            let isEventRunning = false

            const createReply = () =>{

                if(!isEventRunning){

                    if(addComment.value){

                        c+=1
                        x = true

                        addComment.focus()
                        send.style.display = "none"
                        newSend.style.display = "block"

                        const replyComment = document.createElement("div")
                        replyComment.id = "replyComment"

                        const replycommentHeader = document.createElement("div")
                        replycommentHeader.id = "replycommentHeader"

                        const replyProfileAndResponsePostingTime = document.createElement("div")
                        replyProfileAndResponsePostingTime.id = "replyProfileAndResponsePostingTime"

                        const replyProfilePicture = document.createElement("img")
                        replyProfilePicture.id = "replyProfilePicture"
                        replyProfilePicture.src = "./images/avatars/image-juliusomo.png"

                        const replyName = document.createElement("div")
                        replyName.classList.add("textSize")
                        replyName.id = "replyName"
                        replyName.textContent = "Neto Maciel"
                        replyName.style.fontSize = currentSize

                        const replyPostingTime = document.createElement("div")
                        replyPostingTime.id = "replyPostingTime"
                        replyPostingTime.textContent = newCommentReply.getPostingTime()
                        setInterval(() => {
                            replyPostingTime.textContent = newCommentReply.getPostingTime();
                        }, 1000);
                        

                        const replyEdit = document.createElement("img")
                        replyEdit.id = "replyEdit"
                        replyEdit.src = "./images/icon-edit.svg"

                        const replyCheck = document.createElement("img")
                        replyCheck.id = "replyCheck"
                        replyCheck.src = "./images/Icon-check.svg"

                        const replyDelet = document.createElement("img")
                        replyDelet.id = "replyDelet"
                        replyDelet.src = "./images/icon-delete.svg"
                        replyDelet.style.display = "none"

                        const replyCommentText = document.createElement("div")
                        replyCommentText.classList.add("textSize")
                        replyName.id = "replyName"
                        replyCommentText.id = "replyCommentText"
                        replyCommentText.style.fontSize = currentSize
                        const replyText = addComment.value

                        const replyUserName = document.createElement("span")
                        replyUserName.classList.add("textSize")
                        replyName.id = "replyName"
                        replyUserName.id = "replyUserName"
                        replyUserName.style.fontSize = currentSize
                        replyUserName.textContent = "@Netomaciel48"

                        div.appendChild(line)
                        line.appendChild(replyComment)
                        replyComment.appendChild(replycommentHeader)
                        replyComment.appendChild(replyCommentText)
                        replyCommentText.appendChild(replyUserName)
                        replyCommentText.appendChild(document.createTextNode(" "))
                        replyCommentText.appendChild(document.createTextNode(replyText))
                        replycommentHeader.appendChild(replyProfileAndResponsePostingTime)
                        replyProfileAndResponsePostingTime.appendChild(replyProfilePicture)
                        replyProfileAndResponsePostingTime.appendChild(replyName)
                        replyProfileAndResponsePostingTime.appendChild(replyPostingTime)
                        replyProfileAndResponsePostingTime.appendChild(replyEdit)
                        replyProfileAndResponsePostingTime.appendChild(replyCheck)
                        replyProfileAndResponsePostingTime.appendChild(replyDelet)

                        addComment.value = ""
                        send.style.display = "block"
                        newSend.style.display = "none"

                        isEventRunning = true

                        replyEdit.addEventListener("click", () =>{
                            if(counter2){
                                replyDelet.style.display = "block"
                                counter2 = false
                                console.log(counter2)
                            }
                
                            replyEdit.style.display = "none"
                            replyCheck.style.display = "block"
                
                            addComment.value = replyCommentText.lastChild.textContent
                            addComment.focus()
                        });

                        replyCheck.addEventListener("click", () =>{
                            replyCommentText.lastChild.textContent = addComment.value

                            if(!counter2){
                                replyDelet.style.display = "block"
                                counter2 = true
                                console.log(counter2)
                            }
            
                            replyEdit.style.display = "block"
                            replyCheck.style.display = "none"
                            replyDelet.style.display = "none"
            
                            addComment.value = ""
                        })

                        replyDelet.addEventListener("click", () =>{

                            const popUp = document.createElement("div")
                            popUp.id = "pop-up"
                            const popUpTitle = document.createElement("h3")
                            popUpTitle.id = "popUpTitle"
                            popUpTitle.textContent = "Delete Comment"
                            const textPopUp = document.createElement("div")
                            textPopUp.id = "textPopUp"
                            textPopUp.textContent = "Once the comment is deleted, the operation cannot be undone. Are you sure?"
                            const buttonsPopUp = document.createElement("div")
                            buttonsPopUp.id = "buttonsPopUp"
                            const confirmDelet = document.createElement("button")
                            confirmDelet.id = "confirmDelet"
                            confirmDelet.textContent = "Confirm"
                            const confirmCancel = document.createElement("button")
                            confirmCancel.textContent = "Cancel"
                            confirmCancel.id = "confirmCancel"
                            const darkFun = document.createElement("div")
                            darkFun.id = "darkFun"
                
                            document.body.appendChild(darkFun)
                            document.body.appendChild(popUp)
                            popUp.appendChild(popUpTitle)
                            popUp.appendChild(textPopUp)
                            popUp.appendChild(buttonsPopUp)
                            buttonsPopUp.appendChild(confirmDelet)
                            buttonsPopUp.appendChild(confirmCancel)
                
                            confirmDelet.addEventListener("click", () =>{
                                c-=1
                                counter2 = true
                                replyComment.remove()
                                if(c === 0){
                                    line.remove()
                                }
                                addComment.value = ""
                
                                popUp.remove()
                                darkFun.remove()
                            })
                
                            confirmCancel.addEventListener("click", () =>{
                                popUp.remove()
                            })
                        })
        
                    }
                } 
                
            }

            newSend.addEventListener("click", createReply)

        })
    }
}

send.addEventListener("click", createComment)

addComment.addEventListener("keyup", (event) =>{
    if(x){
        if (event.keyCode === 13) {
            event.preventDefault()
            createComment(event)
        }
    }
});

buttonSttings.addEventListener("click", () =>{
    if(!testing){
        popUpSettings.style.transform = "translateY(0px)"
        testing = true
    }else{
        popUpSettings.style.transform = "translateY(-198px)"
        testing = false
    }
})

main.addEventListener("click", downConfigurationWindow)

theme.addEventListener("click", () =>{
    if(themeBody.classList.contains("purple")){
        themeBody.classList.remove("purple")
        themeBody.classList.add("dracula")
        currentTheme = "dracula"
        currentIcon = "./images/icon-sun-theme.svg"
        localStorage.setItem("iconTheme", currentIcon)
        localStorage.setItem("theme", currentTheme)
        theme.textContent = "Purple theme"
        localStorage.setItem("textTheme", theme.textContent)
    }else{
        themeBody.classList.remove("dracula")
        themeBody.classList.add("purple")
        currentTheme = "purple"
        currentIcon = "./images/icon-dracula-theme.svg"
        localStorage.setItem("iconTheme", currentIcon)
        localStorage.setItem("theme", currentTheme)
        theme.textContent = "Dracula theme"
        localStorage.setItem("textTheme", theme.textContent)
    }
    themeIcon.id = "themeIcon"
    themeIcon.src = ""
    themeIcon.src = localStorage.getItem("iconTheme")
    theme.appendChild(themeIcon)
})

fontSizeSettings.addEventListener("mouseover", ()=>{
    listPopUpSettingsAuxFont.style.display = "block"
    if(themeBody.classList.contains("purple")){
        listPopUpSettingsAuxFont.style.backgroundColor = "#d9d9eb"
        listPopUpSettingsAuxFont.style.color = "#000"
    }else{
        listPopUpSettingsAuxFont.style.backgroundColor = "#2f3146"
        listPopUpSettingsAuxFont.style.color = "#FFF"
    }
})

fontSizeSettings.addEventListener("mouseout", ()=>{
    listPopUpSettingsAuxFont.style.display = "none"
})

listPopUpSettingsAuxFont.addEventListener("mouseover", ()=>{
    listPopUpSettingsAuxFont.style.display = "block"
    if(themeBody.classList.contains("purple")){
        fontSizeSettings.style.backgroundColor = "#d9d9eb"
    }else{
        fontSizeSettings.style.backgroundColor = "#2f3146"
    }
})

listPopUpSettingsAuxFont.addEventListener("mouseout", ()=>{
    listPopUpSettingsAuxFont.style.display = "none"
    fontSizeSettings.style.backgroundColor = ""
})

LanguageSettings.addEventListener("mouseover", ()=>{
    listPopUpSettingsAuxLanguage.style.display = "block"
    if(themeBody.classList.contains("purple")){
        listPopUpSettingsAuxLanguage.style.backgroundColor = "#d9d9eb"
        listPopUpSettingsAuxLanguage.style.color = "#000"
    }else{
        listPopUpSettingsAuxLanguage.style.backgroundColor = "#2f3146"
        listPopUpSettingsAuxLanguage.style.color = "#FFF"
    }
})

LanguageSettings.addEventListener("mouseout", ()=>{
    listPopUpSettingsAuxLanguage.style.display = "none"
})

listPopUpSettingsAuxLanguage.addEventListener("mouseover", ()=>{
    listPopUpSettingsAuxLanguage.style.display = "block"
    if(themeBody.classList.contains("purple")){
        LanguageSettings.style.backgroundColor = "#d9d9eb"
    }else{
        LanguageSettings.style.backgroundColor = "#2f3146"
    }
})

listPopUpSettingsAuxLanguage.addEventListener("mouseout", ()=>{
    listPopUpSettingsAuxLanguage.style.display = "none"
    LanguageSettings.style.backgroundColor = ""
})

selectOptionSize.addEventListener("click", configurationWindow)

function downConfigurationWindow(){
    if(testing){
        testing = false
        popUpSettings.style.transform = "translateY(-198px)"
    }
}

function updatingFontSize(size){
    const textSize = getTextSizeElements()
    textSize.forEach((Element)=>{
        Element.style.fontSize = size
        currentSize = size
        console.log(size)
    })

    let newSize = size
    localStorage.setItem("size", newSize)
}

function configurationWindow(){
    updatingFontSize(selectOptionSize.value)
    updatingSettingsWindowSize()
}

function updatingSettingsWindowSize(){
    if(localStorage.getItem("size") === "18px" || localStorage.getItem("size") === "19px"){
        popUpSettings.style.width = "174px"
        popUpSettings.style.height = "150px"
        listPopUpSettingsAuxFont.style.height = "23.5px"
        listPopUpSettingsAuxLanguage.style.height = "21.5px"
        listPopUpSettingsAuxLanguage.style.top = "171.5px"
    }else if(localStorage.getItem("size") === "17px"){
        listPopUpSettingsAuxLanguage.style.height = "20.5px"
        listPopUpSettingsAuxLanguage.style.top = "168.5px"
    }else if(localStorage.getItem("size") === "16px"){
        listPopUpSettingsAuxLanguage.style.height = "19.5px"
        listPopUpSettingsAuxLanguage.style.top = "167.5px"
    }
    else{
        popUpSettings.style.width = "159px"
        popUpSettings.style.height = "140px"
        listPopUpSettingsAuxFont.style.height = "19.5px"
        listPopUpSettingsAuxLanguage.style.height = "18.5px"
        listPopUpSettingsAuxLanguage.style.top = "166.5px"
    }
}

function getTextSizeElements() {
    return document.querySelectorAll('.textSize');
}

