let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;

    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalUrl);
    
    fetch(finalUrl).then(res => res.json()).then(data => {console.log(data)})
})