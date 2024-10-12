const cityForm=document.querySelector('form')
const details=document.querySelector('.details')
const icon=document.querySelector('.icon img')
const time=document.querySelector('.time')
const card=document.querySelector('.card')
const temp=document.querySelector('.temp')
cityForm.addEventListener('submit',e=>{
    e.preventDefault()
    const city=cityForm.city.value.trim()
    cityForm.reset();
    apis(city)
    .then(data=>{
        updateUI(data)
    })
    .catch(err=>{
        temp.innerHTML=('<h2>Oops! Something wrong happened</h2>')
    })
})
const apis=async(city)=>{
    const cityDets=await getCity(city);
    const weatherDets=await getWeather(cityDets.Key)
    return {cityDets,weatherDets};
}
const updateUI= data =>{
    const cityDets=data.cityDets
    const weatherDets=data.weatherDets
    details.innerHTML=`
        <h5 class="my-3 ">${cityDets.EnglishName}</h5>
        <div class="my-3">${weatherDets.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDets.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    //update icon
    const iconSrc=`img/${weatherDets.WeatherIcon}.svg` 
    icon.setAttribute('src',iconSrc)
    const timeSrc= weatherDets.isDayTime ? 'img/day.svg' : 'img/night.svg'
    time.setAttribute('src',timeSrc)
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}