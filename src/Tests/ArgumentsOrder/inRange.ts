
var e = console.log;

var thaiRange1: [number, number] = [10, 20]
var thaiRange2 = { start: 10, end: 20 }

function inRange1(v, start, end) {
    return v >= start && v <= end;
}

function inRange2(v, [start, end]) {
    return v >= start && v <= end;
}

function isThai1(v) {
    return inRange2(v, thaiRange1);
}

function isThai2(v, obj: { start, end}) {
    return inRange1(v, obj.start, obj.end);
}
