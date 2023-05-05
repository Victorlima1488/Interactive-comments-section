import { Comment } from "../js/Comment.js"

const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")

const createComment = () =>{
    if(addComment.value){
  
        let textComment = addComment.value

        const li = document.createElement("li")
        li.textContent = textComment
        comments.appendChild(li)

        addComment.value = ""
    }
}

send.addEventListener("click", createComment)

const newcomment = new Comment("Victor")