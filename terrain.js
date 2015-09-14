//Comment comment comment


function Tile(x, y) {
        this.x = x;
        this.y = y;
}

/*function tileHeight() {
    switch ( (int)(3*Math.random()) ) {
                case 0:
                    var height = 1;
                    break;
                case 1:
                    var height = 2;
                    break;
                case 2:
                    var height = 3;
                    break;   
};*/

Tile.prototype = {
        height: tileHeight()
        type: function() {
            switch ( (int)(3*Math.random()) ) {
                case 0:
                    var type = "grass";
                    break;
                case 1:
                    var type = "rocks";
                    break;
                case 2:
                    var type = "water";
                    break;
            }
        };    
        condition: function() {
            switch ( (int)(3*Math.random()) ) {
                case 0:
                    var type = "burning";
                    break;
                case 1:
                    var type = "normal";
                    break;
                case 2:
                    var type = "frozen";
                    break;
            }
        }; 
       freeze: function() {
            if (this.condition === "burning") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                 this.condition === "frozen";
            } else {
                 this.height = this.height + 1;
            }
       }; 
       burn: function() {
            if (this.condition === "frozen") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                this.condition === "burning";
            } else if (this.condition === "burning" && this.height > 0) {
                this.height = this.height - 1;
            } else continue;
       };
}    
