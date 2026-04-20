

function cars (manufacturer = ""){
    const uppermanufacturer = manufacturer.toUpperCase();
    return function (year){
        return `the car was made by${uppermanufacturer}  in the year ${year} `
    }
}
const car = cars("lexus");
console.log(car("2003"));