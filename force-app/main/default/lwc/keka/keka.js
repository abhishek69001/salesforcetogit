import { LightningElement } from 'lwc';
export default class Keka extends LightningElement {

homeimage ="https://icons8.com/icon/73/home";
yogaday="https://as2.ftcdn.net/v2/jpg/02/08/97/45/1000_F_208974506_1P2e1MVpsgXKyDvhJmeHnFtWOvYqf3nX.jpg";
currentTime;

connectedCallback() {
    this.updateCurrentTime();
    // Update the current time every second (1000 milliseconds)
    setInterval(() => {
        this.updateCurrentTime();
    }, 1000);
}

updateCurrentTime() {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const month = months[now.getMonth()];
    const day = this.padZero(now.getDate());
    const year = now.getFullYear();
    const dayOfWeek = days[now.getDay()];

    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    const seconds = this.padZero(now.getSeconds());
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    this.currentTime = `${month} ${day}, ${year} ${dayOfWeek} ${hours}:${minutes}:${seconds}${ampm}`;
}

padZero(value) {
    return String(value).padStart(2, '0');
}
}