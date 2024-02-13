const mode=document.querySelector('.nav-item-mode')
const darkBtn=document.querySelector('.dark')
const lightBtn=document.querySelector('.light')

mode.addEventListener('click',()=>{
    document.querySelector('.has-dropdown').classList.toggle("visible")
})

darkBtn.addEventListener('click',()=>{
    document.querySelector('.container').classList.add('dark')
})
lightBtn.addEventListener('click',()=>{
    document.querySelector('.container').classList.remove('dark')
})