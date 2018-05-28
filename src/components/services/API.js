

const Api = {

    getData(city, country) {

        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5bbde1b1ec0801e88f8120ba298d706d&units=metric`);

    }

};

export default Api;
