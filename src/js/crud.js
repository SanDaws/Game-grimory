import { loggedWarde } from "./warden.js";
loggedWarde()

// const link = 'https://sqv986dd-3000.use2.devtunnels.ms/'
const link = 'http://localhost:3000/'

async function index(data) {
    
document.querySelector('form').addEventListener('submit',async(event)=>{
    event.preventDefault()
    await fetch(`${link}list`,{
        method: 'POST',
        headers:{'content-type':"aplication/json"},
        body:JSON.stringify(data)

    })
}) 

}


async function update(datos,id) {
    const response = await fetch(`${link}list?${id}`, {
        method: 'PUT',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(datos)
    })
        

}
// {
//     "games":[]
//   }
async function remove(id) {
    
}
