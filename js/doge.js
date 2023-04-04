var container = document.getElementById('dogeContainer');
var dogeImage = document.getElementById('dogeImage');
var dogeCanvas = document.getElementById('dogeCanvas');
var dogeTexts = ['such scale', 'many shop', 'wizard', 'such ebook', 'many user', 'so content', 'so transaction', 'azure'];

function enhanceContext(canvas, context) {
    var ratio = window.devicePixelRatio || 1,
        width = canvas.width,
        height = canvas.height;

    if (ratio > 1) {
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        context.scale(ratio, ratio);
    }
}
function renderDoge()
{
	var dogeWidth = parseInt(document.defaultView.getComputedStyle(container, '').getPropertyValue('width'));
	if(dogeWidth > 800)
	{
		dogeWidth = 800;
	}
	var text = "width: " + dogeWidth;
	dogeCanvas.setAttribute('width', dogeWidth);
	dogeCanvas.setAttribute('height', dogeWidth / 4  * 3);
	if (dogeCanvas.getContext) 
	{
		var ctx = dogeCanvas.getContext('2d');
		var dogeFont = (dogeCanvas.width / 10) + 'px Comic Sans, Comic Sans MS, Chalkboard SE, sans-serif';
		enhanceContext(dogeCanvas, ctx);
        ctx.font = dogeFont;
        ctx.drawImage(dogeImage, 0, 0, dogeWidth, dogeWidth / 4 * 3);
        ctx.fillStyle = 'white';
        ctx.fillText(text, 100, 100);
    }
}

renderDoge();
window.onresize = renderDoge;
