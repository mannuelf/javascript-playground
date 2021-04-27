var OldHonda = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var drink = {
    color: 'brown',
    carbonated: false,
    sugar: 20,
    summary: function () {
        return "Name: " + this.name;
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
console.log(printSummary(drink));
