let hourElement = document.getElementById("hour");
let m = document.getElementById("min");
let s = document.getElementById("sec");
var ampmElement = document.getElementById("am-pm");
const day = document.getElementById("day");
const cDate = document.getElementById("currentdate");
let month = document.getElementById("month");
const year = document.getElementById("year");
const input = document.getElementById("input");
const searchBtn = document.getElementById("search");
const condition = document.getElementById("condition");
let icon = document.getElementById("icon-img");
const apiKey = "80e2c108756fc62ce4d71a68e60e48f1";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
ampm = "AM";


// input.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
        // event.preventDefault();
        
        searchBtn.addEventListener("click", function () {
            let result = input.value;
          console.log(result);
          async function checkWeather() {
            const response = await fetch(apiURL + `${result}` + `&appid=${apiKey}`);
            let data = await response.json();
            console.log(data);
            // console.log(data.name);
        
            if (data.name == "undefined") {
              document.getElementById("state").innerHTML = "Try Another City of State";
            }
            document.getElementById("state").innerHTML = data.name;
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById("celcius").innerHTML = Math.floor(data.main.temp);
            condition.innerHTML = data.weather[0].description;
            document.getElementById("humidity-no").innerHTML = data.main.humidity;
        
            // console.log(data.name )
          }
        
          checkWeather();
          input.value = "";
        });





//     }
// })





function dateTime() {
  const currentDate = new Date();
  let dateString = currentDate.toString();
  // console.log(dateString);
  // console.log(currentDate)

  let date = currentDate.getDate();
  //   console.log(date);
  date = date < 10 ? "0" + date : date;
  cDate.innerHTML = date;
  let monthno = currentDate.getMonth() + 1;
  monthno = monthno < 10 ? "0" + monthno : monthno;
  month.innerHTML = monthno;
  year.innerHTML = currentDate.getFullYear();

  h = currentDate.getHours();

  let hr = h < 10 ? "0" + h : h;

  hourElement.innerHTML = hr;
  //   console.log(h);

  if (hr > 12) {
    hr = hr - 12;
    ampmElement = " PM";
    // hourElement.innerHTML = hr;
  } else {
    ampmElement.innerHTML = " AM";
    // hourElement.innerHTML = hr;
  }

  ampm.innerHTML = ampm;
  //   console.log(ampm)

  let minutes = currentDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  //   console.log(minutes);
  m.innerHTML = minutes;

  let seconds = currentDate.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  s.innerHTML = seconds;

  day.innerHTML;
  let days = currentDate.getDay();
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < daysArray.length; i++) {
    if (days == i) {
      day.innerHTML = daysArray[i];
    }
  }
}
// dateTime();
setInterval(dateTime, 500);
