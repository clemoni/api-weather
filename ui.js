class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.conditionGeneral = document.getElementById("w-desc");
        this.conditionTemp = document.getElementById("w-string");
        this.conditionIcon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.uvCloud = document.getElementById("w-uv-cloud");
        this.feelTemp = document.getElementById("w-feels-like");
        this.wind = document.getElementById("w-wind");
    }

    printData(data) {
        this.location.innerText = `${data.location.name} - ${data.location.country}`;
        this.conditionGeneral.innerText = data.current.condition.text;
        this.conditionIcon.setAttribute('src', data.current.condition.icon);
        this.conditionTemp.innerText = `${data.current.temp_c} C / ${data.current.temp_f} F `;
        this.humidity.innerText = `Relative humidity ${data.current.humidity}%`;
        this.uvCloud.innerText = `U.V : ${data.current.uv}  Cloud coverage: ${data.current.cloud}%`;
        this.feelTemp.innerText = `Feel like: ${data.current.feelslike_c} C / ${data.current.feelslike_f} F`;
        this.wind.innerText = `Wind: From the ${data.current.wind_dir} at ${data.current.wind_kph}kph. Gusting to ${data.current.gust_kph}`
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const parentDiv = document.getElementById('city-info').parentElement;
        const beforeElement = document.getElementById('city-info');
        parentDiv.insertBefore(div, beforeElement);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove()
        }
    }

    cityInfoDisplay(status) {
        document.querySelector('#city-info').style.display = status;
    }


}