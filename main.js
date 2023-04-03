canvas=document.getElementById("myCanvas")
getContext.getContext("2d")
var colour=""
var width=""
var cx
var cy
var lx
var ly
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e);
{
    color=document.getElementById("color").value;
    width=document.getElementById("lineWidth").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e);
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e);
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e);
{
    mouseEvent="mousemove";
    cx = e.clientX - canvas.offSetLeft;
    cy = e.clientY - canvas.offSetTop;
    if (mouseEvent=="mouseDown")
    {
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
    current_touch_x=e.touches[0].clientX-canvas.offSetLeft
    current_touch_y=e.touches[0].clientY-canvas.offSetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width
    ctx.moveTo(last_touuch_x, last_touch_y)
    ctx.lineTo(current_touch_x, current_touch_y)
    ctx.stroke()
}