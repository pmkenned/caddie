"use strict";

var Point4 = function () {

  this.create = function (x, y, z, w) {
    var p = new Float32Array(4);
    p[0] = 0;
    p[1] = 0;
    p[2] = 0;
    p[3] = 1;
    if (arguments.length >= 1) p[0] = x;
    if (arguments.length >= 2) p[1] = y;
    if (arguments.length >= 3) p[2] = z;
    if (arguments.length >= 4) p[3] = w;
    return p;
  };

  this.createFrom = function (from) {
    var p = new Float32Array(4);
    p[0] = from[0];
    p[1] = from[1];
    p[2] = from[2];
    p[3] = from[3];
    return p;
  };

  this.copy = function (to, from) {
    to[0] = from[0];
    to[1] = from[1];
    to[2] = from[2];
    to[3] = from[3];
  };

  this.distanceBetween = function (p1, p2) {
    var dx = p1[0] - p2[0];
    var dy = p1[1] - p2[1];
    var dz = p1[2] - p2[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  this.normalize = function (p) {
    if (p[3] !== 0) {
      p[0] = p[0] / p[3];
      p[1] = p[1] / p[3];
      p[2] = p[2] / p[3];
      p[3] = 1;
    }
  };

  this.print = function (name, p) {
    var maximum = Math.max(p[0], p[1], p[2], p[3]);
    var order = Math.floor(Math.log(maximum) / Math.LN10 + 0.000000001);
    var digits = (order <= 0) ? 5 : (order > 5) ? 0 : (5 - order);

    console.log("Point4: " + name + ": "
        + p[0].toFixed(digits) + " "
        + p[1].toFixed(digits) + " "
        + p[2].toFixed(digits) + " "
        + p[3].toFixed(digits));
  };
};
