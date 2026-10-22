Array.prototype.square = function() {
    return this.map(element => element ** 2);
};

Array.prototype.cube = function() {
    return this.map(element => element ** 3);
};

Array.prototype.sum = function() {
    return this.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber;
    }, 0);
};

Array.prototype.average = function() {
    return this.length === 0 ? NaN : this.sum() / this.length;
};

Array.prototype.even = function() {
    return this.filter(num => {
        return num % 2 === 0;
    });
};

Array.prototype.odd = function() {
    return this.filter(num => {
        return num % 2 !== 0;
    });
};