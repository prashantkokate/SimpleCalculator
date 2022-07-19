input1=document.getElementById('input1')
buttons=document.getElementsByName('button')

rad.addEventListener('click',function(){
 input1.value+='rad'
});
deg.addEventListener('click',function(){
    input1.value+='deg'
})
seven.addEventListener('click',function(){
    input1.value+='7'
})
plus.addEventListener('click',function(){
    input1.value+='+'
})
minus.addEventListener('click',function(){
    input1.value+='-'
})
multiply.addEventListener('click',function(){
    input1.value+='*'
})
devide.addEventListener('click',function(){
    input1.value+='/'
})
eight.addEventListener('click',function(){
    input1.value+='8'
});
clear.addEventListener('click',function(){
    input1.value=""
})
equal.addEventListener('click',function(){
    input1.value=eval(input1.value)
})
nine.addEventListener('click',function(){
    input1.value+='9'
})
one.addEventListener('click',function(){
    input1.value+='1'
})
two.addEventListener('click',function(){
    input1.value+='2'
})
three.addEventListener('click',function(){
    input1.value+='3'
})
four.addEventListener('click',function(){
    input1.value+='4'
})
five.addEventListener('click',function(){
    input1.value+='5'
})
six.addEventListener('click',function(){
    input1.value+='6'
})
zero.addEventListener('click',function(){
    input1.value+='0'
})







