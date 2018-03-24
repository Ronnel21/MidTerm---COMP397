module objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this.Reset();
    }

    public StartLvl2():void{
      this._dx = 0;{
        this.ResetLvl2();
      }
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
      this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
      this.y = -this.height;
    }
    
    public ResetLvl2():void{
      this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
      this.x = -this.width;
    }

    // move the object to some new location
    public Move():void {
      this.y += this._dy;
    }

    public MoveLvl2():void{
      this.x += this._dx;
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      if(this.y >= 480 + this.height) {
        this.Reset();
      }
    }

    public CheckBoundsLvl2():void{
      if(this.x >= 0 + this.width){
        this.ResetLvl2();
      }
    }
  }
}
