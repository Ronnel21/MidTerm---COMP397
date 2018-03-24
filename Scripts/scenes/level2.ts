module scenes{
    export class Level2Scene extends objects.Scene{
        //Private Instance Variables
        private _ocean: objects.Ocean;
        private _plane: objects.Plane;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudNum: number;
        private _scoreBoard: managers.ScoreBoard;
    
        private _engineSound: createjs.AbstractSoundInstance;
        private _coin: objects.Coin;

        //Public Properties

        //Constructor
        constructor(){
            super();
            
            this.Start();
        }

        //Private Methods

        //Public Methods
        public Start():void{
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            managers.Game.plane = this._plane;
            this._plane.rotation = 90;

            this._coin = new objects.Coin();
            this._island = new objects.Island();

            this._clouds = new Array<objects.Cloud>();
            this._cloudNum = 2;
            for(let count = 0; count < this._cloudNum; count++){
                this._clouds[count] = new objects.Cloud();
            }

            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.3;

            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;

            this.Main();     
        }

        public Update(): void{
            this._ocean.UpdateLevel2();
            this._plane.UpdateLvl2();

            this._coin.x = this._island.x;
            this._coin.y = this._island.y;
            this._coin.Update();

            this._island.UpdateLvl2();

            managers.Collision.Check(this._plane, this._coin);

            this._clouds.forEach(cloud => {
                cloud.UpdateLvl2();
                managers.Collision.Check(this._plane,cloud);
            });

            if(this._scoreBoard.Lives <= 0){
                this._engineSound.stop();
                managers.Game.currentScene = config.Scene.OVER;
            }
        }

        public Main(): void{
            this.addChild(this._ocean);

            this.addChild(this._island);

            this.addChild(this._coin);

            this.addChild(this._plane);
            this.addChild(this._plane.planeFlash);

            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        }
        
    }
}