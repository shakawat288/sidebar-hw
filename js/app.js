const sidebarbtn = document.querySelector('nav .sidebarbtn')
const sidebar  = document.querySelector('.sidebar')
const cancelbtn = document.querySelector('.cancel')


const opensidebar = () =>{
    sidebar.classList.add('active')

}


sidebarbtn.addEventListener('click', opensidebar)

const closesidebar = (event) => {

    const {target} = event
    if((target.classList.contains('sidebar') || target.classList.contains('cancel')) ){

        sidebar.classList.remove('active')
    }
}

cancelbtn.addEventListener('click', closesidebar)

sidebar.addEventListener('click', closesidebar)