var e = console.log;

function inRange1(v, min, max) {
    return v >= min && v <= max;
}

function inRange2(v, [min, max]) {
    return inRange1(v, min, max);
}

e(inRange1(10, 10, 20) == true);
e(inRange2(10, [10, 20]) == true);
