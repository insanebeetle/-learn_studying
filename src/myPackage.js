//@ts-check
/**
 * initializes the porject
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
//위와 같은 것을 jsDoc이라고 함 js를 모두 ts로 바꿀필요없이
//해당 코드의 타입값만 지정해줄수 있음
export function init(config) {
  return true;
}

/**
 * exit programs
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
