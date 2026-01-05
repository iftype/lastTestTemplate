export default class Controller {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  test() {
    return 1;
  }

  async start() {
    try {
      this.#outputView.printStartMessage();

      const anything = await this.#inputView.readAnything();

      this.#outputView.printMessage(anything);
      return null;
    } catch (error) {
      this.#outputView.printError(error);
      return null;
    }
  }
}
