"use strict";
exports.__esModule = true;
exports.Utility = exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
        this.productName = 'Tablet';
    }
    A.prototype.getProductDetails = function (productId) {
        return 'ProductId is ' + productId + 'ProductName is ' + this.productName;
    };
    return A;
}());
exports.A = A;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.CalculateAmount = function (price, quantity) {
        return price * quantity;
    };
    return Utility;
}());
exports.Utility = Utility;
