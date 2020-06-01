const ulElement = document.getElementById("container")
const LIST = []
const addButton = document.getElementById('addButton')

//Current date
const currentDate = document.getElementById('currentDate')
let today  = new Date()
console.log(today)
let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let date =  weekday[today.getDay()] + ',' + today.getDate() + '/' +  (today.getMonth()+1) +'/'+ today.getFullYear()
currentDate.insertAdjacentHTML('beforeend', ` ${date}`)

//Adding item to list
function render(){
    ulElement.innerHTML = ''
    LIST.forEach(function(item,index){
        innerHTML =  
        `<li>${item}</li>
        <button class = 'delButton' id=${index}>Erase it</button>`
        ulElement.insertAdjacentHTML('beforeend', innerHTML)
    })
}
const addText = document.getElementById('addText')
addText.addEventListener('keyup', function(event){
        if (event.keyCode === 13){
            addButton.click()
        }
    })   

addButton.addEventListener('click',function(){
    const newItem = addText.value
    LIST.push(newItem)
    addText.value = ''
    render()
    remove()
   
})

//Erase item from list
const delButton = document.getElementsByClassName('delButton')
// console.log(delButton)
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

