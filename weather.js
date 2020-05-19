class Weather {
    constructor(city) {
        this.apiKey = '7590dc0665244cc686d202830201905';
        this.city = city;
    }

    // get weather from api 
    async getWeather() {
        // const url = `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=4`
        const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`

        const response = await fetch(url);
        const data = await response.json();

        return data

    }

    changeCity(city) {
        this.city = city;
    }
}
