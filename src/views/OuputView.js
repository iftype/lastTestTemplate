import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static MESSAGE = {
    INFO_START: '메세지입니다\n',
  };

  printStartMessage() {
    Console.print(OutputView.MESSAGE.INFO_START);
  }

  printMessage(msg) {
    Console.print(msg);
  }

  printError(error) {
    Console.print(error.message);
  }
}
