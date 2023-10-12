"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //   use if you want in child
    getReelTime() {
        return 1;
    }
}
//we Cannot create an instance of an abstract class.
// const gaurav = new TakePhoto("test" , "Test")
class instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const gaurav = new instagram("test", "Test", 1);
