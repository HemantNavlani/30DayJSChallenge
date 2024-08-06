const apiKey= "3f706bff42d84baba09170320240508"

document.getElementById("searchButton").addEventListener('click',async(e)=>{

    try {
        const error = document.getElementById('error');
        error.innerHTML=''
        
        const city = document.getElementById('city').value;
        // console.log(city);
        const api = `http://api.weatherapi.com/v1/current.json?key=3f706bff42d84baba09170320240508&q=${city}&aqi=no`
        if (city){
            const res = await fetch(api) 
            const data = await res.json()
            // console.log(data);
            
            if (!data) throw new Error("Data Not found");

            const temp = data.current.temp_c
            const condition = data.current.condition.text;
            const cityName = data.location.name;
            const icon ="https:"+data.current.condition.icon

            const section = document.getElementById('weatherInfo');
            section.innerHTML=''
            const tempPara = document.createElement('p')
            tempPara.innerHTML =  `Temperature(C) : ${temp}`;

            const condPara = document.createElement('p')
            condPara.innerHTML = `Weather condition : ${condition}`;

            const cityPara = document.createElement('p')
            cityPara.innerHTML = `City Name : ${cityName}`;

            const img = document.createElement('img');
            img.src=icon

            section.appendChild(tempPara)
            section.appendChild(condPara)
            section.appendChild(cityPara)
            section.appendChild(img)
        }
    } catch (error) {
        console.log(error.message);   
        document.getElementById('error').innerHTML =''
        document.getElementById('weatherInfo').innerHTML=''
        document.getElementById('error').innerHTML = `Error : ${error.message}`
    }
})

document.getElementById("searchButton").addEventListener('click',async(e)=>{
    try {
        document.getElementById('error').innerHTML=''
        const forecast = document.getElementById('forecastInfo');
        forecast.innerHTML=''
        const city = document.getElementById('city').value;
        // console.log(city);
        const api = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
        if (city){
            const res = await fetch(api) 
            const data = await res.json()
            // console.log(data);
            
            if (!data) throw new Error("Data Not found");

            for (let i =0;i<5;i++){

                const div = document.createElement('div');
                const heading = document.createElement('h3')
                heading.innerHTML = `Day ${i+1}`
                div.appendChild(heading)


                const temp = data.forecast.forecastday[i].day.avgtemp_c;
                const condition = data.forecast.forecastday[i].day.condition.text;
                const icon = "https:"+data.forecast.forecastday[i].day.condition.icon;

                
                const tempPara = document.createElement('p')
                tempPara.innerHTML =  `Temperature(C) : ${temp}`;

                const condPara = document.createElement('p')
                condPara.innerHTML = `Weather condition : ${condition}`;

                const img = document.createElement('img')
                img.src = icon

                div.appendChild(tempPara)
                div.appendChild(condPara)
                div.appendChild(img)
                forecast.appendChild(div)
            }
        }
    } catch (error) {
        console.log(error.message);   
        document.getElementById('error').innerHTML =''
        document.getElementById('weatherInfo').innerHTML=''
        document.getElementById('error').innerHTML = `Error : ${error.message}`
    }
})