import axios from "axios";

async function getCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        response.data.sort(function (a, b) {
            return a.population - b.population
        });

        const lands = response.data.map((country)=>{
            return `<li class="${getContinentColor(country.region)}"><img src="${country.flag}" alt="flags" width="40px">
                     ${country.name}
                    <p>Has a Population of ${country.population}</p></li>`;
        });

       function getContinentColor(region){
                switch (region) {
                        case 'Africa':
                            return 'green';
                        case 'Americas':
                            return 'blue';
                        case 'Asia':
                            return 'orange';
                        case 'Europe':
                            return 'yellow';
                        case 'Oceania':
                            return 'purple';
                        default:
                            return 'gray';
                    }
                }

        const list = document.getElementById("all-countries");
        console.log(list);
        list.innerHTML = lands.join(" ");
    }
    catch (error) {
        console.error(error);
    }
}
getCountries();


console.log('Hallo daar!');