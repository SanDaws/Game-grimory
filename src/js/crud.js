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
    await fetch(`${link}list/${id}`,{
        method:'DELETE',
        headers: {"content-Type": "application/json"}
    })
}

function dysplay(list) {
    
    list.forEach(game => {
        const template =`
    <tr scope="row">
        <th scope="col">${game.name}</th>
        <td scope="col">${game.shop}</td>
        <td scope="col">${game.minprice}</td>
        <td scope="col">40000 COP</td>
        <td scope="col"> 20000 COP</td>
        <td scope="col">----</td>
        <td scope="col">----</td>
        <td scope="col">30000</td>
        <td scope="col">
    <!-- CRUD buttons -->
            <button item-id="${game.id}" type="button" class="btn btn-info " ><i class="bi bi-pencil-square"></i></button>
            <button item-id="${game.id}" type="button" class="btn btn-danger" ><i class="bi bi-trash3"></i></button>
        </td>
    </tr>
    `
    });
}
