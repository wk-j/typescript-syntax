function fullName(data: { firstName: string, lastName: string }) {
    return `${data.firstName} ${data.lastName}`;
}

function test() {
    var a = fullName({ firstName: "wk", lastName: "kw" })
}