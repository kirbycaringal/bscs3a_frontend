// console.log(fetch('https://i0.wp.com/kpoplivepolska.pl/wp-content/uploads/2024/08/IVE-JANG-WONYOUNG.png?fit=696%2C464&ssl=1')

// .then(response=>{
//     console.log(response)
//     return response.blob();
// })

// .then(blob=>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error=>{
//     console.log(error)
// })

// )







//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""

    fetch("https://bscs-api-crud.onrender.com/api/members", {mode: "cors"})
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element)=> {
            html += `<li>${element.first_name} ${element.last_name} </li>`
        })

        content.innerHTML = html
    })

    .catch((error) => {
        console.log(error)
    })



}