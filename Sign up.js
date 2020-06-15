async function fetchData(){
    const firstData = await fetch('https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts')
    const realData = await firstData.json()
    return realData
}
fetchData()

function postData(url, data){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

//Sign up 
const mainFormSignUp = document.getElementById('mainFormSignUp')
mainFormSignUp.addEventListener('submit',(e) => {
    e.preventDefault()
    // if (mainFormSignUp.email.value === )
    if (mainFormSignUp.password.value === mainFormSignUp.confirmPass.value){
        let data = {
            'Email': mainFormSignUp.email.value,
            'Password': mainFormSignUp.password.value
        }
        let url = 'https://5ec285b38ebdcc0016a59e51.mockapi.io/Accounts'
        console.log(data)
        postData(url, data)
        alert('Moving into the log in web')
        window.location.href = 'file:///C:/Users/Admin/Desktop/C4EJS72/QuanLyCV-master/Login.html'
    }
    else alert('Confirm password does not match')
})

