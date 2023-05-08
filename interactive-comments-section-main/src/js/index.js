import { Comment } from "../js/Comment.js"

const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")

let c = 0

const createComment = () => {
    if(addComment.value){

        const newComment = new Comment("Victor", "@_vitorlimaa_")
        newComment.creationTime()
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
        name.id = "name"
        name.textContent = newComment.getAuthor()

        const postingTime = document.createElement("div")
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

        edit.addEventListener("click", () =>{
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
        });

        const delet = document.createElement("img")
        delet.id = "delet"
        delet.src = "./images/icon-delete.svg"
        delet.style.display = "none"

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
                addComment.value = ""

                popUp.remove()
                darkFun.remove()
            })

            confirmCancel.addEventListener("click", () =>{
                popUp.remove()
            })
        })

        const userName = document.createElement("span")
        userName.id = "userName"
        userName.textContent = newComment.getUserName()
        const divReply = document.createElement("div")
        divReply.id = "divReply"
        const textReply = document.createElement("div")
        textReply.textContent = "Reply"
        const reply = document.createElement("img")
        reply.id = "reply"
        reply.src = "./images/icon-reply.svg"

        reply.addEventListener("click", () =>{
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

            // edit.addEventListener("click",)

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
        })
        const commentText = document.createElement("div")
        commentText.id = "commentText"

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

        addComment.value = ""
    }
}

send.addEventListener("click", createComment)
addComment.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13) {
        event.preventDefault()
        createComment(event)
    }
});
