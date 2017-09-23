import Weather from './services';

function iconSelector(icon) {
  const iconNum = Number(icon.substr(0, 2));
  let iconPath;

  if (iconNum === 1) {
    iconPath = '004-sun.png';
  } else if (iconNum <= 4) {
    iconPath = '003-fluffy-cloud-silhouette.png';
  } else {
    iconPath = '001-umbrella-and-raindrops.png';
  }

  return {
    path: {
      '16' : `img/16/${iconPath}`,
      '32': `img/32/${iconPath}`,
      '128': `img/128/${iconPath}`
    }
  };
}

function AsynWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    Weather.Get.byPosition(position.coords.latitude, position.coords.longitude).then((data) => {
      console.log(data);
      chrome.browserAction.setIcon(iconSelector(data.icon));
      chrome.browserAction.setBadgeText({ text: data.temperature });
    });
  });
}


chrome.storage.local.get('todos', (obj) => {
  let todos = obj.todos;
  if (todos) {
    todos = JSON.parse(todos);
  }
  if (navigator.geolocation) {
    setInterval(AsynWeather, 5000);
  } else {
    console.error('Browser too old');
  }
});
