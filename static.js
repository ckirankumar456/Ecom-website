class demo {
  static variable = 54545;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getdemo(radius) {
    return 2 * this.variable * radius;
  }
}
console.log(demo.getdemo(10));
