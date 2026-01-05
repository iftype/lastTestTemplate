export const MIN_TRY_NUMBER = 1;
export const MAX_TRY_NUMBER = 100;

const PREFIX = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
  RANGE: `${PREFIX} 시도 횟수는 ${MIN_TRY_NUMBER} 이상 ${MAX_TRY_NUMBER} 이하의 숫자만 가능합니다.`,
  NOT_INTEGER: `${PREFIX} 시도 횟수는 정수여야 합니다.`,
});
