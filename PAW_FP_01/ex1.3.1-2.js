function soma(a,b){
 return a+b
}

console.log(soma(1,2))
console.log(soma(1,3))
console.log(soma(0,3))

function concat(a,b){
 return a+b
}

console.log(concat("Hello ","World"))
console.log(concat("Hello and ", "goodbye"))
console.log(concat("I'm ", "sleepy"))

function odd_demo2(a,b){
 if (b==undefined){
 console.log(a)
 }else{
 console.log(a + " " +b)
 }
}

odd_demo2(1, 2000)
odd_demo2("hello", 3)
odd_demo2(21, 22)

function element(index){
 var arr =[1,2,3]
 return arr[index]
}

console.log(element(1));

function sample(c){
 console.log("unknown")
 }
 
sample()
