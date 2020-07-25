class Biosensor{
    constructor(name){
        this.owner=name
        this.heartrate=0
        this.live()


    }

    generateRand(min, max){
        return parseInt(Math.random()*(max-min)+min);

    }

    beat(){
        let hr=this.generateRand(60, 70);
        this.heartrate=hr
        console.log('[Owner]:'+this.owner+'[HR]'+this.heartrate)
    }

    live(){
        setInterval(()=>{this.beat()},1000)
        
    }

}

let james= new Biosensor('james')