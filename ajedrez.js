let cblancas = document.getElementById('blancas');
let cnegras = document.getElementById('negras');
let bla = document.getElementById('bla');
let neg = document.getElementById('neg');
let par = document.getElementById('par');
let rei = document.getElementById('rei');
let juega = document.querySelector('.quien');
let cuanto = document.querySelector('.cuanto');
let cont = document.querySelector('#cont');
let entrada = document.querySelector('.entrada');
let aceptar = document.getElementById('aceptar');
let inp = document.getElementById('inp');
aceptar.addEventListener('click', ()=>{
    if(inp.value == ''){alert('Poné un número madafaka')}else{
        setTimeout(desaparece(), 2000)
        numeroJ = parseInt(inp.value);
        cuanto.innerHTML = `<b>Se juega a ${numeroJ} min</b>`
    }
})
function desaparece(){
    entrada.style.display = 'none'
    cont.classList.remove('cont')
}

m = 0;
s = 0;
mi = 0;

let min = document.getElementById('min');
let seg = document.getElementById('seg');
let mil = document.getElementById('mil');
    
bla.addEventListener('click', ()=>{
    console.log(numeroJ)
    bla.classList.add('desactivo')
    neg.classList.remove('desactivo')
    cnegras.classList.add('desactivo')
    cblancas.classList.remove('desactivo')
    juega.innerHTML = 'Juegan las blancas'
    if(m1 != 0){clearInterval(crono1) }
    crono = setInterval(function yqs(){
        if(m > 99){
            m = 0
            s++
        }if(s == 60){
            s=0;
            mi++
        }if(mi == numeroJ){clearInterval(crono); juega.innerHTML = 'Las negras ganan', m--}
        m++
        mil.innerHTML = m;
        seg.innerHTML = s;
        min.innerHTML = mi;
    }, 10)
});

let min1 = document.getElementById('min1');
let seg1 = document.getElementById('seg1');
let mil1 = document.getElementById('mil1');
m1 = 0;
s1 = 0;
mi1 = 0;

neg.addEventListener('click', ()=>{
    neg.classList.add('desactivo')
    bla.classList.remove('desactivo')
    cblancas.classList.add('desactivo')
    cnegras.classList.remove('desactivo')
    juega.innerHTML = 'Juegan las negras'
    if(m !=0){clearInterval(crono)}
    crono1 = setInterval(function yqs1(){
        if(m1 > 99){
            m1 = 0
            s1++
        }if(s1 == 60){
            s1=0;
            mi1++
        }if(mi1 == numeroJ){clearInterval(crono1); juega.innerHTML = 'Las blancas ganan',m1--}
        m1++
        mil1.innerHTML = m1;
        seg1.innerHTML = s1;
        min1.innerHTML = mi1;
    }, 10)
})

par.addEventListener('click', ()=>{
    if(m1 !=0){clearInterval(crono1)}
    if(m !=0){clearInterval(crono)}
    cblancas.classList.remove('desactivo')
    cnegras.classList.remove('desactivo')
    bla.classList.remove('desactivo')
    neg.classList.remove('desactivo')
});

rei.addEventListener('click', ()=>{
    if(m1 !=0){clearInterval(crono1)}
    if(m !=0){clearInterval(crono)}
    mil1.innerHTML = 0;
    m=0;
    s=0;
    mi=0;
    m1=0;
    s1=0;
    mi1=0;
    seg1.innerHTML = 0;
    min1.innerHTML = 0;
    mil.innerHTML = 0;
    seg.innerHTML = 0;
    min.innerHTML = 0;
    cblancas.classList.remove('desactivo')
    cnegras.classList.remove('desactivo')
    bla.classList.remove('desactivo')
    neg.classList.remove('desactivo')
    juega.innerHTML = '';
})