const URL = 'https://api.thecatapi.com/v1/images/search'

const btn = document.getElementById('gatos')



btn.addEventListener('click',(e)=>{

    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        const imagen = document.getElementById('gatitos')
        imagen.src = data[0].url
        
    } )

})