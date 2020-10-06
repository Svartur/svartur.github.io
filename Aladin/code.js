
console.log("Al Ladin running");


function formChanged() {
	var urlStatic = "https://www.shmu.sk/data/datanwp/v2/";
	var model, actual;

	var forecastType = document.getElementById("forecastType").value;
	var forecastLocation = document.getElementById("forecastLocation").value;

	if (forecastType == 2)
		model = "epsgram/al-epsgram_";
	else if (forecastType == 3)
		model = "meteogram/al-meteogram_";
	else if (forecastType == 8)
		model = "epsecmgram/al-epsecmgram_";
	else if (forecastType == 10)
		model = "ecmgram/al-ecmgram_";

	var d = new Date();
	var DayMin = getDayMin(d);

	if ((forecastType == 2) || (forecastType == 3)) {
		if (DayMin <= 260) {
			actual = "-1800-nwp-.png";
			d.setDate(d.getUTCDate()-1);
		} else if (DayMin > 260)
			actual = "-0000-nwp-.png";
		else if (DayMin > 665)
			actual = "-0600-nwp-.png";
		else if (DayMin > 960)
			actual = "-1200-nwp-.png";
		else if (DayMin > 1380)
			actual = "-1800-nwp-.png";
	} else if (forecastType == 8) {
		if (DayMin <= 480) {
			actual = "-1200-nwp-.png";
			d.setDate(d.getUTCDate()-1);
		} else if (DayMin > 480)
			actual = "-0000-nwp-.png";
		else if (DayMin > 1220)
			actual = "-1200-nwp-.png";
	} else if (forecastType == 10) {
		if (DayMin <= 455) {
			actual = "-1200-nwp-.png";
			d.setDate(d.getUTCDate()-1);
		} else if (DayMin > 455)
			actual = "-0000-nwp-.png";
		else if (DayMin > 1175)
			actual = "-1200-nwp-.png";
	}

	var YMD = getYMD(d)

	var url = urlStatic + model + forecastLocation + "-" + YMD + actual;
	console.log(url);

	var img = document.getElementById("img");
	img.src = url;


	crop(url);
}


function canvasURL(url, can) {
	var img = new window.Image();
	img.addEventListener("load", function () {
		can.getContext("2d").drawImage(img, 0, 0);
	});
	img.setAttribute("src", url);
}


function getDayMin(d) {
	return d.getUTCHours()*60 + d.getUTCMinutes();
}
	

function getYMD(d) {
	return d.getUTCFullYear() + nullify(d.getUTCMonth()+1) + nullify(d.getUTCDate());
}


function nullify(n) {
	if (n < 10)
		return "0" + n;
	else
		return "" + n;
}



function setup() {
	var canvas = createCanvas(600, 300);
	canvas.parent("result");
	background(32);
}


function draw() {
	
}


function crop(u) {
	background(255);
	var img = loadImage(u, function onLoad(i) {
		var temperature = i.get(0, 43, 600, 144);
		image(temperature, 0, 0);
	});

	
	
}