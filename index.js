// console.log("Weather");

//let dom with id's
const Leftarrow = document.getElementById("leftarrow");

const Search = document.getElementById("search");

const Weatherdetail = document.getElementById("weatherdetail");

const Success = document.getElementById("success");

const Input = document.getElementById("input");

const Fail = document.getElementById("Fail");
const Form = document.getElementById("form");
const Lable = document.getElementById("lable")




Leftarrow.addEventListener("click", func = () => {
    location.reload();
})







//for api
const apikey = "157c976a2271e954a836e7bd8d93cc4b";
// const Img = document.getElementById("img");

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(url); //IF AWAIT not write then promises pending
    let data = await response.json();

    // console.log(data);
    // console.log(typeof data);


    return showWeather(data);
}



const showWeather = (data) => {
    if (data.cod == "404") {
        Lable.innerHTML = ` <label for="inputCity"
        class="form-label fs-6 border  w-100 p-1 rounded-1 text-center bg-danger text-danger bg-opacity-10 my-1"
        id="fail" data-aos="zoom-in">Please Enter a Valid City
        Name</label>`;

        Weatherdetail.innerHTML = ``

    }
    else {
        Lable.innerHTML = ` `;


        const temptocel = (kelvine) => {
            kelvine = data.main.temp;
            let cel = kelvine - 273.15;
            return cel;
        }

        let img;
        let thermometer;
        let tempid = data.weather[0].id;

        if (tempid <= 300 && tempid > 200) {

            //Thunderstorm
            img = "img/thunderstom.png";
            thermometer = `<i class="bi bi-cloud-lightning-rain"></i>`;

        }


        else if (tempid <= 500 && tempid > 300) {

            //Drizzle
            img = "img/drizzle(1).png";
            thermometer = `<i class="bi bi-cloud-drizzle"></i>`;

        }
        else if (tempid <= 600 && tempid > 500) {
            //Rain 
            img = "img/raining.png";
            thermometer = `<i class="bi bi-cloud-drizzle"></i>`;

        }
        else if (tempid <= 700 && tempid > 600) {
            //Snow 
            img = "img/snowflakes.png";
            thermometer = `<i class="bi bi-cloud-snow"></i>`;

        }

        else if (tempid < 800 && tempid > 700) {
            // Atmosphere 
            img = "img/atmosphere.png";
            thermometer = `<i class="bi bi-thermometer-half"></i>`;

        }
        else if (tempid = 800) {
            // Clear 
            img = "img/clear.png";
            thermometer = `<i class="bi bi-cloud-fog"></i>`;
        }
        else if (tempid > 800) {
            //Clouds 
            img = "img/cloudy.png";
            thermometer = `<i class="bi bi-cloud-sun"></i>`;
        }

        // let Thermometer = document.getElementById("thermometer");
        // Thermometer.innerHTML = `<i class="bi bi-thermometer-sun"></i>`;
        // Thermometer.style.color="red";




        Weatherdetail.innerHTML = ` <div class="card border-white" style="width: 25rem; font-family: 'Nunito Sans', sans-serif;" data-aos="zoom-in">
    <img src=${img} class="card-img-top pb-2" alt="nothing" id="img">
    <ul class="list-group text-center fs-4">
        <li class="list-group-item fw-semibold" style="font-size:4rem; font-family: 'M PLUS 1p', sans-serif;">${(data.main.temp - 273.15).toFixed(2)}°C</li>
        <li class="list-group-item">${data.weather[0].main}</li>
        <li class="list-group-item "><i class="bi bi-geo-alt text-primary"></i>${data.name},${data.sys.country}</li>

    </ul>
    <ul class="list-group text-center fs-5">

        <li class="list-group-item text-primary fs-1" id="thermometer">${thermometer}</li>
        <li class="list-group-item  fw-semibold"> Feels Like ${(data.main.feels_like - 273.15).toFixed(2)}°C</li>
       

    </ul>
    <ul class="list-group text-center fs-5">


        <li class="list-group-item text-primary fs-1"><i class="bi bi-droplet-half"></i></li>
        <li class="list-group-item">Humidity ${data.main.humidity}%</li>
       
    </ul>
</div>`
    }




}








Form.addEventListener("submit", function (e) {
    // console.log(Input.value);
    getWeather(Input.value)
    e.preventDefault();
})





