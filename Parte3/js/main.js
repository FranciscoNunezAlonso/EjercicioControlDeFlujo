// Part 3
// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

function showIfBusinesHour() {
    let a = getDayNumber(0, 58);
    return businessHours(a, 19);
}
console.log(showIfBusinesHour());

function businessHours(dayNumber, hourNumber){
    if((dayNumber>=1)&&(dayNumber<=5)&&(hourNumber=>9)&&(hourNumber<=18))
    {
        return true;
    } else {
        return false;
    }
}

function getDayNumber(janFirstDayNumber,yearDayNumber) {
    return janFirstDayNumber + (yearDayNumber-1)%7;
}
