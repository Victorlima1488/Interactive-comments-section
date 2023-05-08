export function editF(){
    if(c === 0){
        delet.style.display = "block"
        c = 1
    }else{
        delet.style.display = "none"
        c = 0
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

export function deletF(){

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

export function replyF(){
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
    const replyEdit = document.createElement("img")
    replyEdit.id = "replyEdit"
    replyEdit.src = "./images/icon-edit.svg"
    const replyCheck = document.createElement("img")
    replyCheck.id = "replyCheck"
    replyCheck.src = "./images/Icon-check.svg"
    const replyDelet = document.createElement("img")
    replyDelet.id = "replyDelet"
    replyDelet.src = "./images/icon-delete.svg"

    edit.addEventListener("click", )

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