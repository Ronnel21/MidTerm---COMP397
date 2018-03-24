module objects {
  export class Plane extends objects.GameObject {
    // private instance variables

    // public properties
    public planeFlash: objects.PlaneFlash;

    // Constructor
    constructor() {
      super("plane");
      this.Start();
    }

    // private methods
    private _animationEnded():void {
      if(this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.planeFlash = new objects.PlaneFlash();
      this.planeFlash.alpha = 1;
      this.planeFlash.on("animationend", this._animationEnded.bind(this), false );

      this.x = 320;
      this.y = 430;
    }

    public StartLvl2(): void{
      this.planeFlash = new objects.PlaneFlash();
      this.planeFlash.alpha = 1;
      this.planeFlash.on("animationend", this._animationEnded.bind(this), false);      
      this.rotation = 90;

      this.x = 20;
      this.y = 210;
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    public UpdateLvl2():void{
      this.MoveLvl2();
      this.CheckBoundsLvl2();
    }

    // reset the objects location to some value
    public Reset():void {

    }
    
    public ResetLvl2():void{

    }

    // move the object to some new location
    public Move():void {
     // mouse controls
     // this.x = objects.Game.stage.mouseX;
     // keyboard controls
     if(managers.Game.keyboardManager.moveLeft) {
       this.x -= 5;
     }

     if(managers.Game.keyboardManager.moveRight) {
       this.x += 5;
     }
     this.planeFlash.x = this.x;
     this.planeFlash.y = this.y;
    }

    //For Level 2
    public MoveLvl2():void{
      if(managers.Game.keyboardManager.moveForward){
        this.y -= 5;
      }
      if(managers.Game.keyboardManager.moveBackward){
        this.y += 5;
      }

      this.planeFlash.x = this.x;
      this.planeFlash.y = this.y;
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
    }

    //For Level 2
    public CheckBoundsLvl2():void{
      //bottom boundary
      if(this.y >= 640 - this.halfHeight){
        this.y = 640 - this.halfHeight;
      }
      //top boundary
      if(this.y <= this.halfHeight){
        this.y = this.halfHeight;
      }
    }
  }
}
