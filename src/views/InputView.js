import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static MESSAGE = {
    ASK_Q: '구입금액을 입력해 주세요.\n',
  };

  async readAnything() {
    try {
      const input = await Console.readLineAsync('닉네임을 입력해주세요.');
      return input;
    } catch (error) {
      return error;
    }
  }
}
