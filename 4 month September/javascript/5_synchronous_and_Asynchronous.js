
// synchronous


console.log(1)
console.log(2)
console.log(3)



// Asynchronous


console.log("first")
setTimeout(() =>{
  console.log("second")
    ,1000
})

console.log("last")


// 1 callback function
function myfunction (newFunction){
    
    newFunction()
    console.log("hello")
}
function secondfunction () {
    console.log("call back function")
}


myfunction(secondfunction)


// 2.async/await
// async/await is a letest version of promises , if we want to do any DB call that time we have to use.


const getdata = async()=>{

    const userData = await user.find()
    try {
        
    } catch (error) {
        console.log(error)
    }
}
// 3.promises