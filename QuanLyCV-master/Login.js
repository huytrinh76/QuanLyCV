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
        console.log(mainFormSignUp.password.value)
        rlData.forEach((element) =>{
            if ( mainFormSignUp.email.value == element.Email){
                if (mainFormSignUp.password.value == element.Password){
                    i = i + 1
                }
        }})
        if (i == 0){
            alert('Account does not exist, please try again')
            location.reload()
        }
        else {alert('Moving to homepage')
            window.location.href = 'file:///C:/Users/Admin/Desktop/C4EJS72/QuanLyCV-master/homepage.html'
    }})
}
render()
        


