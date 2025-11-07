export function isValidPassword(password) {
  if (!password || password.length < 8) return false;
  if (!/\d/.test(password)) return false;
  return true;
}
