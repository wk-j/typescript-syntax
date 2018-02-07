
class User {
    private _firstName: string;
    private _lastName: string;

    get firstName() { return this._firstName }
    get lastName() { return this._lastName }

    set firstName(firstName) { this._firstName = firstName }
    set lastName(lastName) { this._lastName = lastName }

    getFullName = () => `${this._firstName} ${this._lastName}`;
}

var user = new User()
var firstName = user["firstName"] = "wk"
var lastName = user["lastName"] = "kw"
var fullName = user["getFullName"]()

console.log({ firstName, lastName, fullName });