
//let searchBar=document.querySelector('#search_bar').value.toLowerCase();


async function fetchData(){
    try{
        ///Variable declaration
 
        const searchBar=document.querySelector('#search_bar').value.toLowerCase();
        let city=document.querySelector('.city')
        let cloud=document.querySelector('.description');
         let humidity=document.querySelector('.humidity');
         let temperature=document.querySelector('.degree');
         let wind =document.querySelector('.wind');
         let icon=document.querySelector('.icon')
         //passing the api
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&appid=60c7a7708076ed888eedd2ef049ed1fa`)
        if (!response.ok){
            throw new Error('data not found')
            
        }
        const data = await response.json()
        //passing in data to variables
        city.innerHTML=data.name
        wind.innerHTML=data.wind.speed
       humidity.innerHTML=data.main.humidity
     temp= Math.floor((data.main.temp)-273)
       temperature.innerHTML= temp
       //icon=data.weather[0]
       cloud.innerHTML=data.weather[0].description
    
        
    }
    catch(error){       
        console.error(error)
    }
 }



 let search=  document.querySelector('#search')
 search.addEventListener('click',fetchData)
 document.body.addEventListener('keypress',enter)
 function enter(e){
     if(e.key==='Enter'){
         fetchData();
     }
 }