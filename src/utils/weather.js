const IP_CACHE = 'vww__cache_ip';

const ICON_MAPPINGS = {
  'clear-day': ['01d'],
  'clear-night': ['01n'],
  cloudy: ['03d', '03n'],
  fog: ['50d', '50n'],
  'partly-cloudy-day': ['02d', '04d'],
  'partly-cloudy-night': ['02n', '04n'],
  rain: ['09d', '09n', '10d', '10n', '11d', '11n'],
  sleet: ['13d', '13n'],
  snow: ['13d', '13n'],
  wind: ['50d', '50n'],
};

const UNIT_MAPPINGS = {
  auto: 'standard',
  us: 'imperial',
  uk: 'metric',
};

const utils = {
  lookupIP() {
    let cache = localStorage[IP_CACHE] || '{}';
    cache = JSON.parse(cache);
    if (cache.ip) {
      return Promise.resolve(cache);
    }

    return fetch('https://www.cloudflare.com/cdn-cgi/trace')
      .then((resp) => resp.text())
      .then((text) => {
        return text
          .split('\n')
          .map((l) => l.split('='))
          .filter((x) => x.length == 2)
          .reduce((o, x) => {
            o[x[0].trim()] = x[1].trim();
            return o;
          }, {});
      })
      .then((data) => {
        localStorage[IP_CACHE] = JSON.stringify(data);
        return data;
      });
  },
  
  fetchOWMWeather(opts = {}) {
    opts.units = opts.units || 'auto';
    opts.language = opts.language || 'en';
    if (!opts.lat || !opts.lng) {
      throw new Error('Geolocation is required');
    }

    const units = UNIT_MAPPINGS[opts.units] || 'standard';

    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?appid=${opts.apiKey}` +
        `&lat=${opts.lat}` +
        `&lon=${opts.lng}` +
        `&units=${units}` +
        `&lang=${opts.language}`
    )
      .then((resp) => resp.json())
      .then(utils.mapData);
  },

  mapData(data) {
    const { current } = data;
    const { weather } = current;
    const [currentWeather] = weather;
    const { icon } = currentWeather;
    const iconName = utils.mapIcon(icon);
    
    return {      
      currently: Object.assign({}, current, {
        icon: iconName,
        temperature: current.temp,
        summary: current.name,
        windSpeed: current.wind_speed,
        windBearing: current.wind_deg,
        dateTime: new Date(),
      }),
      daily: {
        data: data.daily.map((day) => {
          return {
            temperatureMax: day.temp.max,
            temperatureMin: day.temp.min,
            time: day.dt,
            icon: utils.mapIcon(day.weather[0].icon),
          };
        }),
      },
      hourly: {
        data: data.hourly.map((hour) => {
          return {
            temperature: hour.temp,
          };
        }),
      },
    };
  },

  mapIcon(code) {
    return Object.keys(ICON_MAPPINGS).find((key) => {
      return ICON_MAPPINGS[key].includes(code);
    });
  },
};

export default utils;
