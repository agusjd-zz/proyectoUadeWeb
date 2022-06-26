console.log("Script Ejecutado")

const buyOperation = () =>{
    alert("Proximamente estara habilitada esta opcion")
}


function submitButton() {
    const name = document.getElementById('name').value;
    const surName = document.getElementById('surName').value;
    const mail = document.getElementById('mail').value;
    const text = document.getElementById('text').value;

    if (name && surName && mail && text !=""){
        alert("Formulario enviado")
    }

  }


    addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menuItems')
            menu_items.classList.toggle('show')
        })
    }
})