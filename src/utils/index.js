/**
 * @returns {Boolean}
 */
export function isLoggedIn() {
  return localStorage.getItem('auth') !== null
}

export function logout() {
  localStorage.setItem('auth', '')
}

/**
 * @param {Object} auth
 * @param {String} auth.appId
 * @param {String} auth.accessToken
 */
export function setLoginDetails(auth) {
  localStorage.setItem('auth', JSON.stringify(auth))
}

/**
 * @returns {Object|null}
 */
export function getLoginDetails() {
  return JSON.parse(localStorage.getItem('auth') || 'null')
}