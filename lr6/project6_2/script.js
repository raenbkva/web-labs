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
	constructor(x, y, firstSide, secondSide) { // вводим центр прямоугольника и длины сторон
		super(x, y);
		this.firstSide = firstSide;
		this.secondSide = secondSide;
    }
    
	get sides() { // стороны прмоугольника
        return ("Стороны прямоугольника: " + this.firstSide + ", " + this.secondSide);
    }
    
    get area() { // площадь прямоугольника
        return ("Площадь прямоугольника: " + this.firstSide * this.secondSide);
	}
}

let point = new Point (0, 0); 
let line = new Line(1, 1, -2, -2, 4, 4);
let circle = new Circle(5, 5, 5);
let ellipse = new Ellipse(5, 3, 5, 3);
let rectangle = new Rectangle(4, 8, 8, 16);

console.log("Точка: (" + point.center + ")");
console.log("Центр прямой: (" + line.center + ")");
console.log(line.parameters);
console.log(line.length);
console.log("Центр окружности: (" + circle.center + ")");
console.log(circle.length);
console.log(circle.area);
console.log(circle.radius);
console.log("Центр эллипса: (" + ellipse.center + ")");
console.log(ellipse.bigAxis);
console.log(ellipse.smallAxis);
console.log(ellipse.area);
console.log("Центр прямоугольника: (" + rectangle.center + ")");
console.log(rectangle.sides);
console.log(rectangle.area);

console.log("Расстояние между point и line: " + (main.centersDistance(point, line)));
console.log("Расстояние между point и circle: " + (main.centersDistance(point, circle)));
console.log("Расстояние между point и ellipse: " + (main.centersDistance(point, ellipse)));
console.log("Расстояние между point и rectangle: " + (main.centersDistance(point, rectangle)));
console.log("Расстояние между line и circle: " + (main.centersDistance(line, circle)));
console.log("Расстояние между line и ellipse: " + (main.centersDistance(line, ellipse)));
console.log("Расстояние между line и rectangle: " + (main.centersDistance(line, rectangle)));
console.log("Расстояние между circle и ellipse: " + (main.centersDistance(circle, ellipse)));
console.log("Расстояние между circle и rectangle: " + (main.centersDistance(circle, rectangle)));
console.log("Расстояние между ellipse и rectangle: " + (main.centersDistance(ellipse, rectangle)));