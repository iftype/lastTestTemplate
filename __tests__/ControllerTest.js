import Controller from '../src/controllers/Controller.js';

describe('Controller 테스트', () => {
  let inputView;
  let outputView;
  let controller;

  beforeEach(() => {
    // 1. View 객체들을 Mock 함수로 정의
    inputView = {
      readAnything: jest.fn(),
    };
    outputView = {
      printStartMessage: jest.fn(),
      printMessage: jest.fn(),
      printError: jest.fn(),
    };

    // 2. Mock 객체를 주입하여 Controller 인스턴스 생성
    controller = new Controller({ inputView, outputView });
  });

  test('test() 메서드는 1을 반환한다.', () => {
    expect(controller.test()).toBe(1);
  });

  test('정상적으로 입력받은 메시지를 출력하는지 확인한다.', async () => {
    // given: 입력을 "hello"로 설정
    const input = 'hello';
    inputView.readAnything.mockResolvedValue(input);

    // when: start 실행
    await controller.start();

    // then: 각 View의 메서드가 올바른 인자와 함께 호출되었는지 검증
    expect(outputView.printStartMessage).toHaveBeenCalled();
    expect(inputView.readAnything).toHaveBeenCalled();
    expect(outputView.printMessage).toHaveBeenCalledWith(input);
  });

  test('에러 발생 시 printError를 호출하는지 확인한다.', async () => {
    // given: 입력 시 에러가 발생하도록 설정
    const error = new Error('입력 오류');
    inputView.readAnything.mockRejectedValue(error);

    // when: start 실행
    await controller.start();

    // then: 에러 메시지가 출력되었는지 확인
    expect(outputView.printError).toHaveBeenCalledWith(error);
  });
});
