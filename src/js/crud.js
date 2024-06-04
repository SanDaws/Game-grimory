import { loggedWarde } from "./warden.js";
loggedWarde()
//servers
// const link = 'https://sqv986dd-3000.use2.devtunnels.ms/'
const link = 'http://localhost:3000/'

const usertokken=localStorage.getItem('usertoken')
async function listLoader(usertokken) {
    if (usertokken!= null) {
        const response = await fetch(`${link}user?id=${usertokken}`)
        let user= await response.json()
        user= user[0]
        const gameList= await fetch(`${link}list?listof=${user.nick}`)//this should be optimized by using the user id as foreing key in listof insted of the nickname
        let gameObj= await gameList.json()
        gameObj=gameObj[0]// this is global  
        return gameObj
        
        
    }
}
let gameObj=await listLoader(usertokken)
displayJson(gameObj.games,gameObj.shops,gameObj.prices)
//selections
// form 
const form=document.querySelector('form')
const gameName= form.querySelector('input[id="game-name"]')
const minPrice= form.querySelector('input[id="price-expect"]')
const shop= form.querySelector('#shop')
//table
const table= document.querySelector('table')
const tbody= table.querySelector('tbody')




async function index(data) {
    
form.addEventListener('submit',async(event)=>{
    event.preventDefault()
    await fetch(`${link}list`,{
        method: 'POST',
        headers:{'content-type':"aplication/json"},
        body:JSON.stringify(data)

    })
}) 

}

function updatelsitGame(id,gameObj) {
    gameName.value=gameObj.games[id]
    minPrice.value=Number(gameObj.prices[id])
    shop.value=gameObj.shops[id]


    
    
}

async function updateJson(datos,id) {
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

//recive 3 arrays from the object list
function displayJson(games,shops,prices) {
    const printingSpace= document.querySelector('tbody')
    for (let i = 0; i < games.length; i++) {
        const template =`
        <tr scope="row">
            <th scope="col" class="text-capitalize">${games[i]}</th>
            <td scope="col" class="text-capitalize">${shops[i]}</td>
            <td scope="col">${prices[i]}</td>
            <td scope="col">40000 COP</td>
            <td scope="col"> 20000 COP</td>
            <td scope="col">----</td>
            <td scope="col">----</td>
            <td scope="col">30000</td>
            <td scope="col" class="editing">
        <!-- CRUD buttons -->
                <button id="edit" item-id="${i}" type="button" class="btn btn-info bi bi-pencil-square " ><i class="bi bi-pencil-square"></i></button>
                <button id="delete" item-id="${i}" type="button" class="btn btn-danger bi bi-trash3" ><i class="bi bi-trash3"></i></button>
            </td>
        </tr>
        `
        printingSpace.innerHTML+=template
    
        
    }
}


//delete ot edit info
tbody.addEventListener('click' ,(event)=>{
    let itemId=event.target.getAttribute('item-id')

    if (event.target.classList.contains('btn-danger')){//delete function
        console.log('apunto de borrar');
        remove(itemId)
    }
    if (event.target.classList.contains('btn-info')){// update function
        console.log('apunto de editar');
        updatelsitGame(itemId,gameObj)
    }
    
})
