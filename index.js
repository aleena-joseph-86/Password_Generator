const input = document.getElementById("inputbox");

const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const symbols="`~!@#$%^&*()-_";
const allchar=uc+lc+num+symbols;
const len=12;


function generatepw(){
    let password="";
    password+=uc[Math.floor(Math.random()*uc.length)];
    password+=lc[Math.floor(Math.random()*lc.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(len>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    input.value=password;
}

function copypw(){
    const copy = input.value;
    navigator.clipboard.writeText(copy);
}
