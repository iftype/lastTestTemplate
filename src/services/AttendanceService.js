// AttendanceService.js
import Attendance from '../models/Attendance.js'; // Attendance 클래스를 가져와야 합니다.
import { readCSV } from '../utils/fileReader.js';

export default class AttendanceService {
  #attendances = [];

  init() {
    // 1. rawData는 [{ nickname: '...', timestamp: '...' }, ...] 형태의 단순 객체 배열임
    const rawData = readCSV('attendances.csv');

    // 2. 반드시 new를 사용해서 클래스 인스턴스로 변환해야 메서드를 쓸 수 있음
    this.#attendances = rawData.map(
      (item) => new Attendance(item.nickname, item.timestamp),
    );
  }

  printAll() {
    this.#attendances.forEach((att) => {
      // 이제 att는 Attendance 클래스의 인스턴스이므로 메서드 호출 가능!
      console.log(`${att.getNickname()} - 지각여부: ${att.isTardy()}`);
    });
  }
}
