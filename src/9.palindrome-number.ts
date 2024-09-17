// https://leetcode.com/problems/palindrome-number/description/
export function isPalindrome(x: number): boolean {
  const str = `${x}`
  const max = str.length;

  for (let i = 0; i < max; i++) {
    if (str[i] !== str[max - i - 1]) {
      return false
    }
  }

  return true
}
