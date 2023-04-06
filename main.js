canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var color=""
var width=""
var cx
var cy
var lx
var ly
var mouseEvent=""
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cx = e.clientX - canvas.offsetLeft;
    cy = e.clientY - canvas.offsetTop;
    if (mouseEvent=="mousedown")
    {
        console.log("inside if condition")
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lx, ly)
        ctx.lineTo(cx, cy)
        ctx.stroke()
    }
    lx=cx
    ly=cy
}
canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        lx=e.touches[0].clientX-canvas.offsetLeft;
        ly=e.touches[0].clientY-canvas.offsetTop;
    }
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e)
{
    current_touch_x=e.touches[0].clientX-canvas.offsetLeft
    current_touch_y=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width
    ctx.moveTo(lx, ly)
    ctx.lineTo(current_touch_x, current_touch_y)
    ctx.stroke()
}