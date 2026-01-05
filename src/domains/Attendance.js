// models/Attendance.js
export default class Attendance {
  #nickname;
  #dateTime;

  constructor(nickname, timestamp) {
    this.#nickname = nickname;
    this.#dateTime = new Date(timestamp);
  }

  getNickname() {
    return this.#nickname;
  }

  isTardy() {
    // 요일/시간 판단 로직...
    return false; // 임시
  }
}
