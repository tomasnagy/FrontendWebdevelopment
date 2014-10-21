/**
 * Created by Tomas on 14/10/14.
 */
var Canvas = function(id, width, height, backgroundColor) {
    this.id = id;

    this.height = height ? height : this.obj.height;
    this.width = width ? width : this.obj.width;
    this.backgroundColor = backgroundColor ? backgroundColor : "#dcdcdc"

    this.ctx = this.setContext();

    this.obj.style.border;
    console.log(this.obj.style);
};

Canvas.prototype = {

    get obj() {
        return document.getElementById(this.id) ? document.getElementById(this.id) : null;
    },
    setContext: function() {
        if(this.obj && this.obj.getContext) {
            var con = this.obj.getContext('2d');
            con.fillStyle = this.backgroundColor;
            con.fillRect(0, 0, this.width, this.height);
            return (con ? con : null);
        }
    }
}