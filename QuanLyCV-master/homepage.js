const ulElement = document.getElementById("container")
const LIST = []
const addButton = document.getElementById('addButton')

//Current date
const currentDate = document.getElementById('currentDate')
let today  = new Date()
// console.log(today)
let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let date =  weekday[today.getDay()] + ',' + today.getDate() + '/' +  (today.getMonth()+1) +'/'+ today.getFullYear()
currentDate.insertAdjacentHTML('beforeend', ` ${date}`)

//Adding item to list
function render(){
    ulElement.innerHTML = ''
    LIST.forEach(function(item,index){
        innerHTML =  
        `<li>
        <i class="far fa-circle"></i>
        <span >${item}</span>
        <i id=${index} class="fa fa-trash"></i>
        </li>`
        ulElement.insertAdjacentHTML('beforeend', innerHTML)
    })
}

// const checkButton = document.getElementsByClassName('far fa-circle')
// function check(){
//     for ( let i = 0; i < checkButton.length; i ++){
//         console.log(LIST)
//         checkButton[i].addEventListener('click', function(e){
//             const index = e.target.id 
//             LIST[i].classList.toggle("done")
//             render()
//             remove()
//             check()
//         })
//     }
// }

const addText = document.getElementById('addText')
addText.addEventListener('keyup', function(event){
        if (event.keyCode === 13){
            addButton.click()
        }
    })   

addButton.addEventListener('click',function(){
    const newItem = addText.value
    if (newItem !== ''){
        LIST.push(newItem)
        addText.value = ''
        render()
        remove()
    }else{
        alert('You must write something in')
    }
   
})

//Erase item from list
const delButton = document.getElementsByClassName('fa fa-trash')
function remove(){
    for ( let i = 0; i < delButton.length; i ++){
        console.log(LIST)
        delButton[i].addEventListener('click', function(e){
            const index = e.target.id 
            LIST.splice(index, 1)
            render()
            remove()
        })
    }
}

