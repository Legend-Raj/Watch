function startClocks() {
  // Digital clock
  function updateDigitalClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the date string
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dayOfWeek = daysOfWeek[now.getDay()];
    var monthOfYear = monthsOfYear[now.getMonth()];
    var dayOfMonth = now.getDate();
    var year = now.getFullYear();
    var dateString = `${dayOfWeek}, ${monthOfYear} ${dayOfMonth}, ${year}`;

    var digitalClockDisplay = document.getElementById('digital-clock-display');
    digitalClockDisplay.innerHTML = `${dateString}<br>${hours}:${minutes}:${seconds} ${ampm}`;
  }

  updateDigitalClock();
  setInterval(updateDigitalClock, 1000);

  // Circular clock
  function updateCircularClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var hoursAngle = (hours % 12) / 12 * 360 + minutes / 60 * 30;
    var minutesAngle = minutes / 60 * 360;
    var secondsAngle = seconds / 60 * 360;
    var hoursHand = document.querySelector('.hours-hand');
    var minutesHand = document.querySelector('.minutes-hand');
    var secondsHand = document.querySelector('.seconds-hand');

    if (hours >= 12) {
      hoursAngle += 180;
      minutesAngle += 180;
      secondsAngle += 180;
    }
    if (hours<=12) {
      hoursAngle -=180;
      minutesAngle -= 180;
      secondsAngle -= 180;
    }

    hoursHand.style.transform = `rotate(${hoursAngle}deg)`;
    minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
    secondsHand.style.transform = `rotate(${secondsAngle}deg)`;
  }

  updateCircularClock();
  setInterval(updateCircularClock, 1000);

  // Switch
  const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

}
