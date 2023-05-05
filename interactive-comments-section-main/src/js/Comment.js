export class Comment{

    constructor(author){
        this.author = author
        this.postingTime = "1 week ago"
        this.amountOfComments = 0
        this.amountOfLikes = 0
    }

    setAuthor(author){
        this.author = author
    }

    getAuthor(){
        return this.author
    }

    setPostingTime(postingTime){
        this.postingTime = postingTime
    }

    getPostingTime(){
        return this.postingTime
    }

    setAmountOfComments(amountOfComments){
        this.amountOfComments = amountOfComments
    }

    getAmountOfComments(){
        return this.amountOfComments
    }

    setAmountOfLikes(amountOfLikes){
        this.amountOfLikes = amountOfLikes
    }

    getAmountOfLikes(){
        return this.amountOfLikes
    }
}