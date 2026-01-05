import Controller from './controllers/Controller.js';
import InputView from './views/InputView.js';
import OutputView from './views/OuputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const controller = new Controller({ inputView, outputView });
    await controller.start();
  }
}

export default App;
