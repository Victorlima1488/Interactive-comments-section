


const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")

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
const delet = document.createElement("img")
delet.id = "delet"
delet.src = "./images/icon-delete.svg"
delet.style.display = "none"
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
const commentText = document.createElement("div")
commentText.id = "commentText"

