reply.addEventListener("click", () =>{

    send.style.display = "none"
    newSend.style.display = "block"
    addComment.focus()

    newSend.addEventListener("click", ()=>{
    //     if(addComment.valeu){
        console.log("O lastID antes do if é: " + lastId)
        addComment.focus()
        send.style.display = "none"
        newSend.style.display = "block"
        
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
        const replyText = addComment.value

        const replyUserName = document.createElement("span")
        replyUserName.id = "replyUserName"
        replyUserName.textContent = "@Netomaciel48"

        const breakLine = document.createElement("br");


        div.appendChild(line)
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
        line.appendChild(breakLine)

        addComment.value = ""
        send.style.display = "block"
        newSend.style.display = "none"
        // }
    })
            
})