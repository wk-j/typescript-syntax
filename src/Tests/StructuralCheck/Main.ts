interface A { a : string }
interface B { b : number }

class C<T> { value: string = "" } 
class D<T> { value: T }

function fun1(input: C<A>) { }
function fun2(input: D<A>) { }

fun1(new C<A>());
fun1(new C<B>()); // ok

fun2(new D<A>());

// Argument of type D<B> is not assignable
// to parameter of type D<A>
// fun2(new D<B>()); 







