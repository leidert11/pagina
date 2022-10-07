const pedir=document.querySelector('#boton1')
const lista=document.querySelector('#seleccionarOpcion')
const modal=document.querySelector('.modal')
const seleccionado=document.getElementById('productos')

const cancelar=document.querySelector('.cancelar')
const aceptar=document.querySelector('.aceptar')


pedir.addEventListener('click',()=>{
 if (lista.options[lista.selectedIndex].value==='none') {
    alert('no selecciono nada')
 }else{
    modal.style.top=0
    seleccionado.textContent=(lista.options[lista.selectedIndex].text)
 }
})

cancelar.addEventListener('click',()=>{
    modal.style.top='-1120px',Transition='1s'
    lista.selectedIndex=0
})

aceptar.addEventListener('click',(e)=>{
    e.preventDefault()
    setTimeout(() => {
        location='./modal.html'})
})        
