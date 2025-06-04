class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("width must be a positive number");
    }
  }
  set height(newHieght) {
    if (newHieght > 0) {
      this._height = newHieght;
    } else {
      console.error("height must be a positive number");
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}
const rectangle = new Rectangle(3, 5);
console.log(rectangle.width);
console.log(rectangle.height);
