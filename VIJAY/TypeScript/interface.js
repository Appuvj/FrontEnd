var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.che = c;
        this.maths = m;
    }
    Students.prototype.totalMarks = function () {
        return this.total = this.phy + this.che + this.maths;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.StudentResult = function () {
        console.log("physics:".concat(this.phy, " chemistry:").concat(this.che, " maths:").concat(this.maths, " total:").concat(this.totalMarks(), " percentage:").concat(this.percentage()));
    };
    return Students;
}());
var stdObj = new Students(90, 95, 98);
stdObj.StudentResult();
