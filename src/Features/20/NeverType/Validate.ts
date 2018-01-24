type MaxRule = {
    type: 'MAX',
    maxValue: number,
}

type MinRule = {
    type: 'MIN',
    minValue: number,
}

type ForAllRule = {
    type: 'FOR_ALL',
    rules: Rule[]
}

type ForSomeRule = {
    type: 'FOR_SOME',
    rules: Rule[]
}

type Rule = MinRule | MaxRule | ForAllRule | ForSomeRule


const validate = (value: number, rule: Rule): boolean => {
    switch (rule.type) {
        case 'MAX':
            return value <= rule.maxValue
        case 'MIN':
            return value >= rule.minValue
        case 'FOR_ALL':
            return rule.rules
                .reduce((acc, nextRule) => acc && validate(value, nextRule), true)
        case 'FOR_SOME':
            return rule.rules
                .reduce((acc, nextRule) => acc || validate(value, nextRule), false)
        //default:
        //    throw Error(`rule ${rule.type} is not being handled properly`)
    }
}

var rs = validate(100, { type: "MIN", minValue: 100 })
var rs2 = validate(200, {
    type: "FOR_SOME",
    rules: [
        { type: "MIN", minValue: 200 }
    ]
});

console.log(rs);
console.log(rs2);