var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // private instance variables
        // public properties
        // Constructor
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        Island.prototype.StartLvl2 = function () {
            this._dx = 0;
            {
                this.ResetLvl2();
            }
        };
        // updates the game object every frame
        Island.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Island.prototype.UpdateLvl2 = function () {
            this.MoveLvl2();
            this.CheckBoundsLvl2();
        };
        // reset the objects location to some value
        Island.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -this.height;
        };
        Island.prototype.ResetLvl2 = function () {
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
            this.x = -this.width;
        };
        // move the object to some new location
        Island.prototype.Move = function () {
            this.y += this._dy;
        };
        Island.prototype.MoveLvl2 = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Island.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Island.prototype.CheckBoundsLvl2 = function () {
            if (this.x >= 0 + this.width) {
                this.ResetLvl2();
            }
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map