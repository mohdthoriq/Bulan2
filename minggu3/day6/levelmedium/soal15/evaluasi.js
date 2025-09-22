let data =  '{"id":1,"name":"Andi","status":"inactive"}';
let user = JSON.parse(data)
console.log(user.name)
user.status = "active"
let str = JSON.stringify(user)
console.log(str)