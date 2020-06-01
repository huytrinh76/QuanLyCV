async function fetchdata(){
    const firstData = await fetch('https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts')
    const realData = await firstData.json()
    return realData
}

async function render(){
    const rlData = await fetchdata()
    console.log(rlData)

    let i = 0
    const mainFormSignUp = document.getElementById('mainFormSignUp')
    mainFormSignUp.addEventListener('submit',(e) => {
    e.preventDefault()
    rlData.forEach((element) =>{
    if (mainFormSignUp.password.value == rlData[element].Password
        && mainFormSignUp.mail.value == rlData[element].Email){
       i += 1
    }
    else i = 0
    
    if (i = 0){
        alert('Account does not exist, please try again')
    window.location.href = 'file:///C:/Users/Admin/Desktop/C4EJS72/QuanLyCV-master/Login.html'
    }
    else window.location.href = 'file:///C:/Users/Admin/Desktop/C4EJS72/QuanLyCV-master/homepage.html'
    })})
}
        


