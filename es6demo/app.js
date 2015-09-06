var People = {
	say()
	{
		console.log("hello")
	}
};

var Man = {
	__prop__:People,
	name:'man',
	say()
	{
		console.log(`${this.name}`);
	}
}

Man.say();
People.say();

People.say();

var arr = [];
var len = 10;
for(let i=0; i<len; i++)
{
	arr[i] = function() {
		console.log(i)
	}
}
arr[1]();

// const obj = Object.freeze({});
// obj.name = "name";
// console.log(obj);
// let {name} = {name:'123123'};
// console.log(name)
// let [a,b,c] = "hel";
// console.log(a)

var x = 1, y = 4;

[x, y] = [y, x];
console.log(x, y);

var m = new Map();
m.set("first", 'hello');
m.set("second", 'world');

for(let [key, value] of m)
{
	console.log(key, value);
}
console.log(String.fromCharCode(0x20BB7));

var s = "𠮷";
console.log(/^.$/u.test(s));

function tag(strArr, value1, value2)
{
	console.log(strArr, value1, value2);
}

tag`hello ${x+y} world${x*y} `

console.log(String.raw({raw:"hello"},1,2,3,4));

// console.log(Array.from([1,2,3,4,5,6],x=>x*x));
Array.from = function(arrayLike,func){
	var arr = Array.prototype.slice.call(arrayLike);
	if(func)
	{
		for(let i=0,len=arr.length; i<len; i++)
		{
			arr[i] = func(arr[i]);
		}
	}
	return arr;
}

console.log(Array.from({ 0: 1, 1: 2, 2: 3, length: 3 }, x=>x*x));

var person = {
	get name(){
		console.log("get name")
		return "my name is"
	}
}

console.log(person.name);

var s = Symbol('symbol');
//error
// console.log(`this is ${s}`);
// var proxy = new Proxy({},{
// 	get(target, property){
// 		return 111;
// 	}
// });

// console.log(proxy.name)


// console.log(Math.max(...[1,2,3]))
console.log(...[1,2,3]);
console.log([..."hello"]);

var iarr = [1,2,3,4,5];
let it = iarr[Symbol.iterator]();

console.log(it.next());

class RangeIterator
{
	constructor(start, stop)
	{
		this.value = start;
		this.stop = stop;
	}
	[Symbol.iterator]()
	{
		return this
	}
	next()
	{
		var value = this.value;
		if(value < this.stop)
		{
			this.value++;
			return {value:value, done:false}
		}
		else
		{
			return {value:undefined, done:true}
		}
	}
}

function range(start, stop)
{
	return new RangeIterator(start, stop);
}

for(let i of range(0,10))
{
	console.log(i);
}


// const arrs = [for (i of range(0,99)) i*2 ];
// console.log(arrs);


// function* generate()
// {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	return 4;
// }

// for(let n of generate())
// {
// 	console.log(n)
// }
