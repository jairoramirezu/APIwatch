const Hour = document.querySelector(".hour");
const Min = document.querySelector(".min");
const Sec = document.querySelector(".sec");

const addZeros = n => {
  if (n.toString().length < 2) return "0".concat(n);
  return n;
}

const getTime = () => {
  const time = new Date();
  let hour = addZeros(time.getHours());
  let min = addZeros(time.getMinutes());
  let sec = addZeros(time.getSeconds());
  Hour.textContent = `${hour} :`;
  Min.textContent = `${min} :`;
  Sec.textContent = sec;
}

getTime();
setInterval(getTime, 1000);