const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")

const createComment = () =>{
    console.log("Funcionou")

    const li = document.createElement("li")

    comments.appendChild(li)
}

send.addEventListener("click", createComment)
