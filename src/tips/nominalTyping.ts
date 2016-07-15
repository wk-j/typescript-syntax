enum FooIdBrand {}
type FooId = FooIdBrand & string;

enum BarIdBrand {}
type BarId = BarIdBrand & string;

var fooId: FooId;
var barId: BarId;

type T1 = {}
type T2 = {}

var t1:T1 = {};
var t2:T2 = {};
t1 = t2;

type N1 = T1 & FooIdBrand;
type N2 = T2 & BarIdBrand;

var n1 = {} as N1;
var n2 = {} as N2;
// n1 = n2;



