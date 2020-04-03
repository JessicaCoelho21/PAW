function hello(a){
    console.log('Hello')
   }
   hello()
   hello("world")
   hello(true)
   hello(2)
   function demo(a,b,c){
    console.log(a)
   }
   demo(2);
   demo(2,3);
   demo(2,3,4);
   function new_demo(a,b=3){
    console.log(a + " " + b)
   }
   new_demo(1)
   new_demo(1,4)
   function odd_demo(a,b){
    if (b==undefined){
        console.log(a)
    }else{
    console.log(a + " " +b)
    }
   }
   odd_demo(1)
   odd_demo("hello", 3)