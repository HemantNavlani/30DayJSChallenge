const apiKey = '4e0608df'

document.getElementById('search').addEventListener('click',fetchMovieData)

async function fetchMovieData (){
    try {
        const div = document.getElementById('movieResults')
        div.innerHTML='';
        const movieName = document.getElementById('input').value
        const api = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}&`
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);

        const title = document.createElement('h2')
        title.textContent=`Movie Title : ${movieName}`
        const poster = document.createElement('img')
        poster.src = data.Poster
        poster.alt='poster'
        const year = document.createElement('h4')
        year.textContent = `Year : ${data.Year}`

        div.append(title)
        div.append(poster)
        div.append(year)
        
        const btn = document.createElement('button');
        btn.id='moreInfo'
        btn.innerText='More Info'
        div.append(btn);

        btn.addEventListener('click',()=>{
            getMoreInfo(data);
        })
    } catch (error) {
    }
}

async function getMoreInfo(data) {
    const extra = document.createElement('div')
    extra.id='extra'
    const plot = document.createElement('p')
    plot.innerHTML=`<b>Plot</b> : ${data.Plot}`
    const director = document.createElement('p')
    director.innerHTML=`<b>Director</b> : ${data.Director}`
    const actors = document.createElement('p')
    actors.innerHTML=`<b>Actors</b> : ${data.Actors}`
    extra.appendChild(plot)
    extra.appendChild(director)
    extra.appendChild(actors)
    const div = document.getElementById('movieResults')
    div.appendChild(extra)
}