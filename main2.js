console.log('hello world');

const app=document.getElementById('app')
document.getElementsByClassName('')


const div=document.createElement('div')

div.textContent='app2'
// app.innerHTML=`
// <div>app</div>
// `
app.appendChild(div)

const app2=document.querySelector('#app')

const div2=document.createElement('div')

div2.textContent='app3'
app2.appendChild(div2)

const input =document.querySelector('input')

input.value='10'

const input2=document.querySelector('#app>input')

input2.value='20'

function add(a,b){
return a+b
}
input.value=add(1,2)

const input3=document.createElement('input')
const input4=document.createElement('input')
const button=document.createElement('button')
const br=document.createElement('br')
const span=document.createElement('span')
button.textContent='add'
span.textContent='0'
app.appendChild(input3)
app.appendChild(input4)
app.appendChild(button)
app.appendChild(br)
app.appendChild(span)

function newAdd(){
// console.log('New Add');
let a = +input3.value
let b= +input4.value
if(isNumber(a)&& isNumber(b) ){
  const sub= a+b
  span.textContent=sub
}else{
  span.textContent=''
  if(!isNumber(a)){
    span.textContent+='a '
  }
  if(!isNumber(b)){
    span.textContent+='b '
}
span.textContent+='input error'
}
}
function isNumber(num){
  // if (+num===num){
  //   return true
  // }else{
  //   return false
  // }
return +num===num
}

const isNumber2=(num) =>{
  return +num===num
}


button.addEventListener('click',() =>newAdd())

//=======================

let num =0

for(let num=0 ;num <= 10;num++){
const input=document.createElement('input')
app.appendChild(input)
}

const list=['1','2','3','4','5']

for(let i = 0;i < 5; i++){
  console.log(i,list[i]);
}

list.forEach(element =>{
  console.log(element);
})

list.forEach((element,index)=>{
  console.log(index,element);
})


class User{
   name=''
   age=0
   money=0
   
   login = () => {
    console.log(this.name,'login');
   }

saveMoney=(num) =>{
  this.money += num
  console.log(`${this.name} money is:${this.money}`);
}

checkMonkey=() =>{
  console.log(`${this.name} Money is ${this.money}`);
}

   constructor(name){
     this.name=name
   }
}

const xiaoming=new User('xiaoming')
console.log(xiaoming);

const zhangsan=new User('zhangsan')
console.log(zhangsan);

xiaoming.login()
zhangsan.saveMoney(200)
zhangsan.saveMoney(200)

xiaoming.checkMonkey()
zhangsan.checkMonkey()