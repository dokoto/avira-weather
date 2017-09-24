import { WEATHER_API_HOST, APPID } from '../../../app/constants/App';

class Get {
  static byPosition(lat, lon) {
    return fetch(`${WEATHER_API_HOST}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${APPID}`)
      .then(response => response.json()
        .then((data) => {
          return {
            temperature: data.main.temp.toFixed(),
            icon: data.weather[0].icon,
            all: data
          };
        }
      )
    );
  }
}

export default {
  Get,
};
