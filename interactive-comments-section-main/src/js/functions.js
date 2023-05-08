import { variable } from "./variables.js"

let counter1 = 0
let counter2 = 0
const li = document.createElement("li")

export function editFunction(){
    if(counter1 === 0){
        delet.style.display = "block"
        counter1 = 1
    }else{
        delet.style.display = "none"
        counter1 = 0
    }

    edit.style.display = "none"
    check.style.display = "block"

    addComment.value = commentText.lastChild.textContent
    addComment.focus()

    check.addEventListener("click", () =>{
        commentText.lastChild.textContent = addComment.value

        edit.style.display = "block"
        check.style.display = "none"
        delet.style.display = "none"

        addComment.value = ""
    })
}

export function deletFunction(){

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
        addComment.value = ""

        popUp.remove()
        darkFun.remove()
    })

    confirmCancel.addEventListener("click", () =>{
        popUp.remove()
    })
}

export  function replyFunction(){
    addComment.focus()
    send.style.display = "none"
    newSend.style.display = "block"
    newSend.addEventListener("Click", () =>{

        if(addComment.value){
            const line = document.createElement("div")
            line.id = "line"
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
            replyName.id = "replyName"
            replyName.textContent = "Neto Maciel"
            const replyPostingTime = document.createElement("div")
            replyPostingTime.id = "replyPostingTime"
            replyPostingTime.textContent = newComment.getPostingTime()
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
            replyCommentText.id = "replyCommentText"
            const replyUserName = document.createElement("div")
            replyUserName.id = "replyUserName"
            let x = 0

            replyEdit.addEventListener("click", () =>{
                if(x === 0){
                    replyDelet.style.display = "block"
                    x = 1
                }else{
                    replyDelet.style.display = "none"
                    x = 0
                }
    
                replyEdit.style.display = "none"
                replyCheck.style.display = "block"
    
                addComment.value = commentText.lastChild.textContent
                addComment.focus()
    
                replyCheck.addEventListener("click", () =>{
                    commentText.lastChild.textContent = addComment.value
    
                    replyEdit.style.display = "block"
                    replyCheck.style.display = "none"
                    replyDelet.style.display = "none"
    
                    addComment.value = ""
                })
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
                    line.remove()
                    addComment.value = ""
    
                    popUp.remove()
                    darkFun.remove()
                })
    
                confirmCancel.addEventListener("click", () =>{
                    popUp.remove()
                })
            })

            comments.appendChild(line)
            line.appendChild(replyComment)
            replyComment.appendChild(replycommentHeader)
            replyComment.appendChild(replyCommentText)
            replycommentHeader.appendChild(replyProfileAndResponsePostingTime)
            replyProfileAndResponsePostingTime.appendChild(replyProfilePicture)
            replyProfileAndResponsePostingTime.appendChild(replyName)
            replyProfileAndResponsePostingTime.appendChild(replyPostingTime)
            replyProfileAndResponsePostingTime.appendChild(replyEdit)
            replyProfileAndResponsePostingTime.appendChild(replyCheck)
            replyProfileAndResponsePostingTime.appendChild(replyDelet)
        }
    })

}

export function textReplyFunction(){
    const line = document.createElement("div")
    line.id = "line"
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
    replyName.id = "replyName"
    replyName.textContent = newComment.getUserName()
    const replyPostingTime = document.createElement("div")
    replyPostingTime.id = "replyPostingTime"
    replyPostingTime.textContent = newComment.getPostingTime()
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

    comments.appendChild(line)
    line.appendChild(replyComment)
    replyComment.appendChild(replycommentHeader)
    replyComment.appendChild(commentText)
    replycommentHeader.appendChild(replyProfileAndResponsePostingTime)
    replyProfileAndResponsePostingTime.appendChild(replyProfilePicture)
    replyProfileAndResponsePostingTime.appendChild(replyName)
    replyProfileAndResponsePostingTime.appendChild(replyPostingTime)
    replyProfileAndResponsePostingTime.appendChild(replyEdit)
    replyProfileAndResponsePostingTime.appendChild(replyCheck)
    replyProfileAndResponsePostingTime.appendChild(replyDelet)
}

export function replyEditFunction(){
    if(counter2 === 0){
        replyDelet.style.display = "block"
        counter2 = 1
    }else{
        replyDelet.style.display = "none"
        counter2 = 0
    }

    replyEdit.style.display = "none"
    replyCheck.style.display = "block"

    addComment.value = commentText.lastChild.textContent
    addComment.focus()

    replyCheck.addEventListener("click", () =>{
        commentText.lastChild.textContent = addComment.value

        replyEdit.style.display = "block"
        replyCheck.style.display = "none"
        replyDelet.style.display = "none"

        addComment.value = ""
    })
}

export function replyDeletFunction(){

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
        line.remove()
        addComment.value = ""

        popUp.remove()
        darkFun.remove()
    })

    confirmCancel.addEventListener("click", () =>{
        popUp.remove()
    })
}