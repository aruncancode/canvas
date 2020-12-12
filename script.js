mouse_down = false;
selected_size = 5;
selected_colour = "black";
canvas = document.getElementById("canvas");
lastx = 0;
lasty = 0;
newx = 0;
newy = 0;

function make_pixel(x, y) {
	ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(x, y, selected_size, 0, 2 * Math.PI);
	ctx.fillStyle = selected_colour;
	ctx.fill();
}

function make_line(lastx, lasty, newx, newy) {
	ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(lastx, lasty);
	ctx.lineTo(newx, newy);
	ctx.lineWidth = selected_size + 4;
	ctx.strokeStyle = selected_colour;
	ctx.stroke();
}

$("#canvas").mousedown(function (e) {
	mouse_down = true;
	lastx = e.clientX;
	lasty = e.clientY;
});

$("#canvas").mousemove(function (e) {
	if (mouse_down) {
		make_pixel(e.clientX, e.clientY);
	}
	newx = e.clientX;
	newy = e.clientY;
});

$("#canvas").mouseup(function (e) {
	mouse_down = false;
});

$(".brushColours").click(function (e) {
	selected_colour = e.target.style.outlineColor;
});

$(".brushSizes").click(function (e) {
	selected_size = parseInt(e.target.id);
});

$(document).keydown(function (e) {
	if (e.keyCode == 16) {
		make_line(lastx, lasty, newx, newy);
	}
});

$(".clear").click(function (e){
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height)
})