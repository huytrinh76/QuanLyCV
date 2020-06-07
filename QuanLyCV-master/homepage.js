const ulElement = document.getElementById("container")
const LIST = []
const addButton = document.getElementById('addButton')

//Current date
const currentDate = document.getElementById('currentDate')
let today  = new Date()
let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let date =  weekday[today.getDay()] + ',' + today.getDate() + '/' +  (today.getMonth()+1) +'/'+ today.getFullYear()
currentDate.insertAdjacentHTML('beforeend', ` ${date}`)

//Adding item to list
function render(){
    ulElement.innerHTML = ''
    LIST.forEach(function(item,index){
        innerHTML =  
        `<li>
        <i class="far fa-circle" id='circle${index}'></i>
        <span id =${index}>${item}</span>
        <i  class="fa fa-trash" ></i>
        </li>`
        ulElement.insertAdjacentHTML('beforeend', innerHTML)
    })
}

//Add add items button
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
        check()
    }else{
        alert('You must write something in')
    }
   
})

// Add check button
const checkButton = document.getElementsByClassName('far fa-circle')
function check(){
    for ( let i = 0; i < checkButton.length; i ++){
        checkButton[i].addEventListener('click', function(){           
            const checkCircle = document.getElementById(`circle${i}`)
            checkCircle.classList.toggle('fa-circle')
            checkCircle.classList.toggle('fa-dot-circle')    
            const checkElement = document.getElementById(`${i}`)
            checkElement.classList.toggle("done")
        }
        )}
}

//Erase item from list
const delButton = document.getElementsByClassName('fa fa-trash')
function remove(){
    for ( let i = 0; i < delButton.length; i ++){
        // console.log(LIST)
        delButton[i].addEventListener('click', function(e){
            const index = e.target.id 
            LIST.splice(index, 1)
            render()
            remove()
            check()
        })
    }
}

