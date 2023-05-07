import { Comment } from "../js/Comment.js"

const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")

let c = 0

const createComment = () => {
    if(addComment.value){

        const newcomment = new Comment("Victor")
        newcomment.creationTime()
        let textComment = addComment.value

        const li = document.createElement("li")
        const headComment = document.createElement("div")
        headComment.id = "headComment"
        const profileAndPostingTime = document.createElement("div")
        profileAndPostingTime.id = "profileAndPostingTime"
        const profilePicture = document.createElement("img")
        profilePicture.id = "profilePicture"
        profilePicture.src = "./images/avatars/image-juliusomo.png"
        const userName = document.createElement("div")
        userName.id = "userName"
        userName.textContent = newcomment.getAuthor()

        const postingTime = document.createElement("div")
        postingTime.id = "postingTime"
        postingTime.textContent = newcomment.getPostingTime()
        setInterval(() => {
            postingTime.textContent = newcomment.getPostingTime();
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
            })

            confirmCancel.addEventListener("click", () =>{
                popUp.remove()
            })
        })
        edit.addEventListener("click", (event) =>{
                if(c === 0){
                    delet.style.display = "block"
                    c = 1
                }else{
                    delet.style.display = "none"
                    c = 0
                }

                edit.style.display = "none"
                check.style.display = "block"

                let postedCommentContent = commentText.textContent
                console.log(postedCommentContent)

                addComment.value = postedCommentContent

                check.addEventListener("click", () =>{
                    commentText.textContent = addComment.value

                    edit.style.display = "block"
                    check.style.display = "none"
                    delet.style.display = "none"

                    addComment.value = ""
                })
          });
        const divReply = document.createElement("div")
        divReply.id = "divReply"
        const textReply = document.createElement("div")
        textReply.textContent = "Reply"
        const reply = document.createElement("img")
        reply.id = "reply"
        reply.src = "./images/icon-reply.svg"
        const commentText = document.createElement("div")
        commentText.id = "commentText"
        commentText.textContent = textComment

        profileAndPostingTime.appendChild(profilePicture)
        profileAndPostingTime.appendChild(userName)
        profileAndPostingTime.appendChild(postingTime)
        profileAndPostingTime.appendChild(edit)
        profileAndPostingTime.appendChild(check)
        profileAndPostingTime.appendChild(delet)
        headComment.appendChild(profileAndPostingTime)
        divReply.appendChild(reply)
        divReply.appendChild(textReply) 
        headComment.appendChild(divReply)
        li.appendChild(headComment)
        li.appendChild(commentText)
        comments.appendChild(li)

        addComment.value = ""
    }
}

send.addEventListener("click", createComment)
