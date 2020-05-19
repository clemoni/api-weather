// instanciate stoage
const weatherStorage = new Storage()

// fetch current city from storage
const city = weatherStorage.getCity()

// instanciate a new object weather
const weather = new Weather(city);

// instanciate a new object UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change city name
document.getElementById('w-change-btn').addEventListener('click', changeCity);


function changeCity() {

    const city = document.getElementById('city').value;
    console.log(city)

    // change city forn instance of Weather 
    weather.changeCity(city);

    // call app.function getWeather get data + print daga
    getWeather()

    // update city locate in Storage
    weatherStorage.setCity(city)



    // Close modal
    $('#locModal').modal('hide');
}

function getWeather() {

    weather.getWeather()
        .then(data => {
            if (data.error == null) {

                // remove potential alert 
                ui.clearAlert();

                // print data
                ui.printData(data)

            } else {
                // remove potential alert 
                ui.clearAlert();

                // show alert 
                ui.showAlert(data.error.message, "alert alert-danger");

            }

        })
        .catch(error => console.error(error))
}
