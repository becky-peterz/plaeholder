// let Email = document.getElementById('Email')
// let submit = document.getElementById('Submit'). value ="Email is valid"
// submitOK = "true";
// function validateEmail(email) { 
   
// } 
// submit.onclick = function(){
//     if {
//       Email.innerHTML="email is valid"
//     }
//     else{
//         Email.innerHTML="email isnot valid"
//     }
// }

//   function ValidateEmail(Email) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w {2, 3})+$/.test(myForm.emailAddr.value)) {
//         return (true)
//     }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
// let input =document.getElementById('input').value
// let btn = document.getElementById ('Gvalue')

// btn.onclick = function(){
//     let input =document.getElementById('input').value
//     console.log(input)
//     .innerHTML = input
// }
  
// let add = document.getElementById ('add').value
let btn =document.getElementById ('Add')
let btn1 =document.getElementById ('Sub')
let btn2 =document.getElementById ('Mult')
let btn3 =document.getElementById ('Mod')


// let b = 20
// let c = 30


// let ans = a + b
// a.innerText = ans 


btn.onclick = function(){ 
    let add = document.getElementById ('add').value
    let add1 =document.getElementById ('add1').value
    let a = parseInt(add)
    let b = parseInt(add1)
    let ans = a + b
    console.log(ans)
    answer.innerHTML = ans
    // return a + b
}
 
// let sum = add(20, 5)
// console.log(sum)

btn1.onclick = function(){ 
    let sub = document.getElementById ('sub').value
    let sub1 =document.getElementById ('sub1').value
    let c = parseInt(sub)
    let d = parseInt(sub1)
    let anS = c - d
    console.log(anS)
    answer1.innerHTML = anS
 
}
btn2.onclick = function(){ 
    let mult = document.getElementById ('mult').value
    let mult1 =document.getElementById ('mult1').value
    let a = parseInt(mult)
    let b = parseInt(mult1)
    let Ans = a * b
    console.log(Ans)
    answer2.innerHTML = Ans
    // return a + b
}
btn3.onclick = function(){ 
    let mod = document.getElementById ('mod').value
    let mod1 =document.getElementById ('mod1').value
    let a = parseInt(mod)
    let b = parseInt(mod1)
    let ansW = a % b
    console.log(ansW)
    answer3.innerHTML = ansW
    // ans.innerHTML = ans
    // return a + b
}