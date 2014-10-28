/**
 * Created by Tomas on 14/10/14.
 */
var Ball = function(context, id, x ,y, radius, speed, angle) {


    this.context = context;
    this.id = id;
    this.x = x ? x : Math.random() * this.context.canvas.width;
    this.y = y ? y : Math.random() * this.context.canvas.height;
    this.radius = radius ? radius : 3 + Math.random() * 20;
    this.speed = speed ? speed : 2;
    this.angle = angle;
    this.rgb = this.randomColor;
    var self = this;
    this.context.canvas.addEventListener("click", function(e){ return self.onClick(e, self)});

    self.animate(self);
    console.log('y: ' + this.y);
    console.log('x: ' + this.x);

}

Ball.prototype = {
    get randomColor() {
        return "rgb(" + Math.floor(Math.random() * 255) + ", " +
                 + Math.floor(Math.random() * 255) + ", " +
                 + Math.floor(Math.random() * 255) + ")";
    },
    drawOneBall : function(ball) {
        ball = ball ? ball : this;
        ball.context.beginPath();
        ball.context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
        ball.context.fillStyle = ball.rgb;
        ball.context.fill();
        console.log(ball);
    },
    onClick : function(e, self) {
        console.log(this.rgb);
        console.log(self.rgb);

        if ((e.x > this.x - this.radius) && (e.x < this.x + this.radius) && (e.y > this.y - this.radius) && (e.y < this.y + this.radius) && (this.rgb === self.rgb)) {
            this.drawOneBall(new Ball(this.context));
        }
    },
    get radians() { return this.angle * Math.PI / 180; },
    get vx() { return Math.cos(this.radians) * this.speed; },
    get vy() { return Math.cos(this.radians) * this.speed; },
    animate : function(self) {
        setInterval(function() {
            self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height);
            self.drawOneBall();

            //self.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            self.checkBorder(self);
            self.x = self.x + self.vx;
            self.y = self.y + self.vy;
        }, 20);
    },
    checkBorder : function(ball) {
       if(ball.x > ball.context.canvas.width - ball.radius || ball.x < 0 + ball.radius) {
           ball.angle = 180 - ball.angle;
       }
        if(ball.y > ball.context.canvas.height - ball.radius || ball.y < 0 + ball.radius) {
            ball.angle = 180 - ball.angle;
        }
    }
}