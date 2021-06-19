const object1 = {
    name :"Naruto",
    age:10,
    message:"I never go back on my word!",
    message1:"HEHE :]",
   }
const object2={
   name :"Sasuke",
   age:11,
   message:"Stupid Naruto",
   fun : function()
   {
       console.log (this.message)
       console.log (this.message1)
   },
   para : function(a,b,c)
    {
        console.log(this.name)
    console.log(a+b+c)
    }
   }
   
   
   //Call
   object2.fun.call(object1)
   object2.para.call(object1,1,2,3)
   
   //Apply
   object2.fun.apply(object1)
   object2.para.apply(object1,[1,2,3])
   
   //Bind
   var a=object2.para.bind(object1,1,2,3)
   a()