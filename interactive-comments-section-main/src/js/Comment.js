export class Comment{

    constructor(author, userNAme){
        this.author = author
        this.userNAme = userNAme
        this.postingTime = "now"
        this.amountOfComments = 0
        this.id = 0
        this.updateInterval = 0
    }

    creationTime(){
        let c = 1
        setInterval(()=>{
            const now = this.getUpdateInterval() + 1
            this.setUpdateInterval(now)
            if(this.getUpdateInterval() <= 60){
                this.setPostingTime("now")
                if(this.getUpdateInterval() === 60) c += 1
            }else if(this.getUpdateInterval() <= (60 * c) && c < 60){
                this.setPostingTime(`${c-1} min ago`)
                if(this.getUpdateInterval() === (60 * c)) c += 1
                if(c === 60) c = 2
            }else if(this.getUpdateInterval() < (60 * 60) * c){
                if(this.getUpdateInterval() === (60 * 60 * c)) c += 1
            }else if(this.getUpdateInterval() > (60 * 60 * 24)){
                c += 1
                if(this.getUpdateInterval() === (60 * 60 * 24 * 7) - 1) c = 1
            }else if(this.getUpdateInterval() > (60 * 60 * 24 * 7)){
                c += 1
                if(this.getUpdateInterval() > (60 * 60 * 24 * 7 * 30)) c = 1
            }else{
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

    setId(id){
        this.id = id
    }

    getId(){
        return this.id
    }

    setUpdateInterval(updateInterval){
        this.updateInterval = updateInterval
    }

    getUpdateInterval(){
        return this.updateInterval
    }
}