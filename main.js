let selectMenu = document.querySelectorAll("select");
let currnetTime = document.querySelector("h1")
let setAlarmBtn = document.querySelector("button")
let content = document.querySelector(".content")
let alarmTime,isAlarmSet = false,
ringtone = new Audio("./voice/AlarmSound.wav")

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)

}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)


}

for (let i = 2; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)

}

setInterval(() => {
    let date = new Date();
        h = date.getHours();
        m = date.getMinutes(); 
        s = date.getSeconds();
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currnetTime.textContent = `${h}:${m}:${s} ${ampm}`

    if (alarmTime == `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

setAlarmBtn.addEventListener("click" ,setAlarm)

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = ""
        ringtone.pause()
        content.classList.remove("disable");
        setAlarmBtn.innerHTML = "Soatni yoqish"
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    
    if (time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!")
    }

    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerHTML = "Soatni o'chirish"
    } 