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
    for (i =0; i<LIST.length; i++){
        console.log(LIST[i].name)
        if (LIST[i].status == 'false'){
            innerHTML =  
                `<li>
                <i class="far fa-circle" id='circle${i}'></i>
                <span id ='item${i}'>${LIST[i].name}</span>
                <i  class="fa fa-trash" id='${i}'></i>
                </li>`
        } else {
            innerHTML =  
                `<li>
                <i class="far fa-dot-circle" id='circle${i}'></i>
                <span id ='item${i}' class='done'>${LIST[i].name}</span>
                <i  class="fa fa-trash" id='${i}' ></i>
                </li>`
        }
        ulElement.insertAdjacentHTML('beforeend', innerHTML)
    }
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
        let toDOITEM = {name: `${newItem}`, status: 'false'}
        LIST.push(toDOITEM)
        addText.value = ''
        render()
        remove()
        check('fa-circle')
        check('fa-dot-circle')
    }else{
        alert('You must write something in')
    }
   
})

// Add check button
function check(circle){
    const checkButton = document.getElementsByClassName(`${circle}`)
    for ( let i = 0; i < checkButton.length; i ++){
        checkButton[i].addEventListener('click', function(){ 
            const checkElement = document.getElementById(`item${i}`) 
            const checkCircle = document.getElementById(`circle${i}`) 
            checkCircle.classList.toggle('fa-circle')
            checkCircle.classList.toggle('fa-dot-circle')     
            checkElement.classList.toggle("done")  
            if (LIST[i].status == 'false'){ 
                LIST[i].status = 'true'
                console.log(i)
                
            } else{
                console.log(i)
                LIST[i].status = 'false'
            }
        }
        )}
        remove()
}

//Erase item from list
const delButton = document.getElementsByClassName('fa-trash')
function remove(){
    for ( let i = 0; i < delButton.length; i ++){
        delButton[i].addEventListener('click', function(e){
            const index = e.target.id 
            LIST.splice(index, 1)
            render()
            remove()
            check('fa-circle')
            check('fa-dot-circle')
        })
    }
}

async function fetchdata(){
    const firstData = await fetch('https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts/1/todolist')
    const realData = await firstData.json()
    return realData
}

async function postData(url, data){
    await fetch(url, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

async function deletePost(){
    const rlData = await fetchdata()
    rlData.forEach(async function(element){
        console.log(element.id)
        await fetch(`https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts/1/todolist/${element.id}`,{
        method: 'delete'
    })
    })
}

let saveButton = document.getElementById('saveButton')
saveButton.addEventListener('click', (e)=>{
    e.preventDefault()
    deletePost()
    console.log('a')
    console.log(LIST.length)
    for (let i = 0; i<LIST.length; i++){
        let data = {
        "id": `${i}`,
        "AccountId": "1",
        "todolist": `${LIST[i].name}`,
        "status": LIST[i].status
        }
        let url = 'https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts/1/todolist'
        postData(url,data)
    }   
})
