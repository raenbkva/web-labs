let cnv = document.getElementById('myCanvas');
cnv.width = 800;
cnv.height = 600;

// для точки
let pointButton = document.querySelector('.point');
pointButton.addEventListener("click", pointFunction);
function pointFunction() {
	let pointCoordinate = prompt('Введите x и y точки', 'Вот сюда');
	pointCoordinate = pointCoordinate.split(' ');
	let point = new Point (pointCoordinate[0], pointCoordinate[1]);
    let ctx = cnv.getContext('2d');
	ctx.beginPath();
	ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
	ctx.fill();

};

// для прямой
let lineButton = document.querySelector('.line');
lineButton.addEventListener("click", lineFunction);
function lineFunction() {
	let lineCoordinate = prompt('Введите координаты начала и конца прямой', 'Вот сюда');
	lineCoordinate = lineCoordinate.split(' ');
	let centerX = (lineCoordinate[0] + lineCoordinate[2])/2;
	let centerY = (lineCoordinate[1] + lineCoordinate[3])/2;
	let line = new Line (centerX, centerY, lineCoordinate[0], lineCoordinate[1], lineCoordinate[2], lineCoordinate[3]);
	let ctx = cnv.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(line.startX, line.startY); // начальная точка
	ctx.lineTo(line.endX, line.endY); // конечная точка
	ctx.stroke();
};

// для круга
let circleButton = document.querySelector('.circle');
circleButton.addEventListener("click", circleFunction);
function circleFunction() {
	let circleCoordinate = prompt('Введите координаты центра и радиус круга', 'Вот сюда');
	circleCoordinate = circleCoordinate.split(' ');	
	let circle = new Circle(circleCoordinate[0], circleCoordinate[1], circleCoordinate[2]);
	let ctx = cnv.getContext('2d');
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.rad, 0, 2 * Math.PI);
	ctx.fill();
};

// для эллипса
let ellipseButton = document.querySelector('.ellipse');
ellipseButton.addEventListener("click", ellipseFunction);
function ellipseFunction() {
	let ellipseCoordinate = prompt('Введите координаты центра, большую и малую полуоси эллипса', 'Вот сюда');
	ellipseCoordinate = ellipseCoordinate.split(' ');	
	let ellipse = new Ellipse(ellipseCoordinate[0], ellipseCoordinate[1], ellipseCoordinate[2], ellipseCoordinate[3]);
	let ctx = cnv.getContext('2d');
	ctx.beginPath();
	ctx.ellipse(ellipse.x, ellipse.y, ellipse.bigSemiAxis, ellipse.smallSemiAxis, 0, 0, 2 * Math.PI);
	ctx.fill();	
};

// для прямоугольника
let rectangleButton = document.querySelector('.rectangle');
rectangleButton.addEventListener("click", rectangleFunction);
function rectangleFunction() {
	let rectangleCoordinate = prompt('Введите координаты левого верхнего угла, ширину и высоту прямоугольника', 'Вот сюда');
	rectangleCoordinate = rectangleCoordinate.split(' ');
	let centerX = (rectangleCoordinate[2] / 2) + rectangleCoordinate[0];	
	let centerY = (rectangleCoordinate[3] / 2) + rectangleCoordinate[1];
	let rectangle = new Rectangle(centerX, centerY, rectangleCoordinate[2], rectangleCoordinate[3], rectangleCoordinate[0], rectangleCoordinate[1]);
	let ctx = cnv.getContext('2d');
	ctx.beginPath();
	ctx.fillRect(rectangle.leftUpX, rectangle.leftUpY, rectangle.firstSide, rectangle.secondSide);	
};

//классы из 6 лабы

class main {
	constructor(x, y) { // пусть x и y центры фигур
		this.x = x;
		this.y = y;
    }
    
	get center() { // центр фигуры
		return [this.x, this.y];
    }
    
	static centersDistance(f1, f2) { //расстояние между центрами фигур
		return (Math.sqrt(Math.pow((f2.center[0] - f1.center[0]), 2) + Math.pow((f2.center[1] - f1.center[1]), 2)));
	};
};

class Point extends main {
	constructor(x, y) { // вводим координаты точки
		super(x, y);
	}
}

class Line extends main {
	constructor(x, y, startX, startY, endX, endY) { // вводим координаты середины линии, начальной точки и конечной точки
		super(x, y);
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;
    }
    
	get parameters() { // параметры начала и конца
        return("Начальная точка прямой: (" + this.startX + ", " + this.startY + "), конечная точка прямой: (" + this.endX + ", " + this.endY + ")");
    }
    
	get length() { // длина прямой
        return("Длина прямой: " + Math.sqrt(Math.pow((this.endX - this.startX), 2) + Math.pow((this.endY - this.startY), 2)));
	}
}

class Circle extends main {
	constructor(x, y, rad) { // вводим координаты центра окружности и радиус
		super(x, y);
		this.rad = rad;
    }
    
    get length() { // длина окружности
        return ("Длинна окружности: " + 2 * Math.PI * this.rad);
    }
    
	get area() { // площадь окружности
		return ("Площадь окружности: " + Math.PI * Math.pow(this.rad, 2));
    }
    
	get radius() { // радиус окружности
        return ("Радиус окружности: " + this.rad);
	}
}

class Ellipse extends main {
	constructor(x, y, bigSemiAxis, smallSemiAxis) { // вводим координаты центра эллипса, большую полуось и малую полуось
		super(x, y);
		this.bigSemiAxis = bigSemiAxis;
		this.smallSemiAxis = smallSemiAxis;
    }
    
	get bigAxis() { // большая полуось
        return ("Большая полуось эллипса: " + this.bigSemiAxis);
    }
    
	get smallAxis() { // малая полуось
        return ("Малая полуось эллипса: " + this.smallSemiAxis);
    }
    
    get area() {
        return ("Площадь эллипса: " + Math.PI * this.bigSemiAxis * this.smallSemiAxis);
    }
}

class Rectangle extends main {
	constructor(x, y, firstSide, secondSide, leftUpX, leftUpY) { // вводим центр прямоугольника и длины сторон
		super(x, y);
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.leftUpX = leftUpX;
		this.leftUpY = leftUpY;
    }
    
	get sides() { // стороны прмоугольника
        return ("Стороны прямоугольника: " + this.firstSide + ", " + this.secondSide);
    }
    
    get area() { // площадь прямоугольника
        return ("Площадь прямоугольника: " + this.firstSide * this.secondSide);
	}
}