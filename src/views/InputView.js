import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static MESSAGE = {
    ASK_Q: '구입금액을 입력해 주세요.\n',
  };

  async readAnything() {
    try {
      const input = await Console.readLineAsync(InputView.MESSAGE.ASK_Q);
      // inputValidator넣어도 됨
      return input;
    } catch (error) {
      Console.print(error.message);
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}
