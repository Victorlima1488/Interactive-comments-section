export class Comment{

    constructor(author, userNAme){
        this.author = author
        this.userNAme = userNAme
        this.postingTime = "now"
        this.amountOfComments = 0
        this.amountOfLikes = 0
        this.updateInterval = 0
    }

    creationTime(){
        let c = 1
        setInterval(()=>{
            const now = this.getUpdateInterval() + 1
            this.setUpdateInterval(now)
            console.log(this.getUpdateInterval())

            if(this.getUpdateInterval() <= 60){
                console.log("now")
                this.setPostingTime("now")
                if(this.getUpdateInterval() === 60) c += 1
            }else if(this.getUpdateInterval() <= (60 * c) && c < 60){
                console.log(`${c-1} min ago`)
                this.setPostingTime(`${c-1} min ago`)
                if(this.getUpdateInterval() === (60 * c)) c += 1
                if(c === 60) c = 2
            }else if(this.getUpdateInterval() < (60 * 60) * c){
                console.log(`${c-1} hour ago`)
                if(this.getUpdateInterval() === (60 * 60 * c)) c += 1
            }else if(this.getUpdateInterval() > (60 * 60 * 24)){
                console.log(`${c} day ago`)
                c += 1
                if(this.getUpdateInterval() === (60 * 60 * 24 * 7) - 1) c = 1
            }else if(this.getUpdateInterval() > (60 * 60 * 24 * 7)){
                console.log(`${c} week ago`)
                c += 1
                if(this.getUpdateInterval() > (60 * 60 * 24 * 7 * 30)) c = 1
            }else{
                console.log(`${c} month ago`)
                c += 1
            }
            
        }, 1000)  
    }

    setAuthor(author){
        this.author = author
    }

    getAuthor(){
        return this.author
    }

    setUserName(userNAme){
        this.userNAme = userNAme
    }

    getUserName(){
        return this.userNAme
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

    setUpdateInterval(updateInterval){
        this.updateInterval = updateInterval
    }

    getUpdateInterval(){
        return this.updateInterval
    }
}