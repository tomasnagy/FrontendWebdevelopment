/**
 * Created by Tomas on 14/10/14.
 */
document.addEventListener("DOMContentLoaded", function () {
    var can = new Canvas("canvas");
    console.log(can.ctx);
    canvasApp(can.ctx);
});

function canvasApp(context) {
    var ball = new Ball(context, "ball1", 340, 200, 20, 4, 0 );
    ball.drawOneBall();
}