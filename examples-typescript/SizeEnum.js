var Size;
(function (Size) {
    Size[Size["SMALL"] = 100] = "SMALL";
    Size[Size["MEDIUM"] = 150] = "MEDIUM";
    Size[Size["LARGE"] = 200] = "LARGE";
})(Size || (Size = {}));
console.log(Size.SMALL);
console.log(Size["MEDIUM"]);
console.log(Size.LARGE);
