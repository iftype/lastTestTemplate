import AttendanceService from './services/AttendanceService.js';

class App {
  async run() {
    const service = new AttendanceService();
    service.init();
    service.printAll();
  }
}

export default App;
