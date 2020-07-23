
// 基本
// let [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3


//  可嵌套
// let [a, [[b], c]] = [1, [[2], 3]];
// a = 1
// b = 2
// c = 3


// 可忽略
// let [a, , b] = [1, 2, 3];
// a = 1
// b = 3


//  不完全解构
// let [a = 1, b] = [];
// a = 1, b = undefined


//剩余运算符
// let [a, ...b] = [1, 2, 3];
//a = 1
//b = [2, 3]


// 字符串等
// 在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现Iterator接口的数据。
// let [a, b, c, d, e] = 'hello';
// a = 'h'
// b = 'e'
// c = 'l'
// d = 'l'
// e = 'o'


// 解构默认值
// let [a = 2] = [undefined]; // a = 2


// 当解构模式有匹配结果，且匹配结果是undefined时，会触发默认值作为返回结果。
// let [a = 3, b = a] = [];     // a = 3, b = 3
// let [a = 3, b = a] = [1];    // a = 1, b = 1
// let [a = 3, b = a] = [1, 2]; // a = 1, b = 2
//a与b匹配结果为undefined ，触发默认值：a = 3;b = a = 3
//a正常解构赋值，匹配结果：a = 1，b匹配结果undefined ，触发默认值：b = a = 1a与b正常解构赋值，匹配结果：a = 1，b = 2




//对象模型的解构（Object）
//基本

// let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
// foo = 'aaa'
// bar = 'bbb'

// let {baz: foo} = {baz: 'ddd'};
//foo = 'ddd'


//可嵌套可忽略
// let obj = {p: ['hello', {y: 'world'}]};
// let {p: [x, {y}]} = obj;
// x = 'hello'
// y = 'world'

// let obj = {p: ['hello', {y: 'world'}]};
// let {p: [x, {}]} = obj;
// x = 'hello'


//不完全解构
// let obj = {p: [{y: 'world'}]};
// let {p: [{y}, x]} = obj;
// x = undefined
// y = 'world'


//剩余运算符
// let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
// a = 10
// b = 20
// rest = {c: 30, d: 40}


//解构默认值
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;
