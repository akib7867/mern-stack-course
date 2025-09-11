// destructuring Object, array

const userinfo = {

    name: "Akib",
    std: 10

}
const { name : fullname, std } = userinfo

console.log(fullname, "fullname")


// destructuring  array

const arr = [56,89,98,76,]

const [a,b] = arr

console.log(a, "====")