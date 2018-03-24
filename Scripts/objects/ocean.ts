module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
      this.y = -960;
    }

    //For Level 2
    private _resetLvl2():void{
      this.rotation = 90;
      this.x = 0;
    }

    // move the object to some new location
    private _move():void {
      this.y += this._dy;
    }

    //For Level 2
    private _moveLvl2():void{
      this.x += this._dx;
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      if(this.y >= 0) {
        this._reset();
      }
    }

    //For Level 2
    private _checkBoundsLvl2():void{
      if(this.x >= 640){
        this._resetLvl2();
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._reset();
    }

    //For Level 2
    public StartLvl2():void{
      this._dx = 5;
      this._resetLvl2();
    }

    // updates the game object every frame
    public Update():void {      
      this._move();
      this._checkBounds();
    }

    //For Level 2
    public UpdateLevel2():void{
      this._moveLvl2();
      this._checkBoundsLvl2();
    }
  }
}
