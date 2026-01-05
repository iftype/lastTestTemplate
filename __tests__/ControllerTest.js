import { Controller } from '../src/controllers/Controller.js';

describe('컨트롤러 연결 테스트', () => {
  const newController = new Controller();

  test('테스트 문장을 입력하시오', () => {
    expect(newController.test()).toBe(1);
  });
});
