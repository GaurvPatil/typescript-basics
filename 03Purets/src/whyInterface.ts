interface TakePhoto { 
    cameraMode:string
    filter:string
    burst: number
   
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode:string,
        public filter : string,
        public burst: number,
        

    ){}
   
}

interface Story {
    createStory(): void
}


// impliment more than one interface 
class YouTube implements TakePhoto , Story {
    constructor(
        public cameraMode:string,
        public filter : string,
        public burst: number,
        // we can add more
        public short : string

    ){}

    createStory(): void {
        console.log("story was created")
    }
}