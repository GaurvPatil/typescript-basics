abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //   this has to be in child
  abstract getSepia(): void;

  //   use if you want in child
  getReelTime(): number {
    return 1;
  }
}

//we Cannot create an instance of an abstract class.
// const gaurav = new TakePhoto("test" , "Test")

class instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}
const gaurav = new instagram("test", "Test", 1);
