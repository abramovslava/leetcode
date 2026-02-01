import {isPalindrome} from "./9.palindrome-number";

it('isPalindrome', () => {
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(-121)).toBeFalsy()
  expect(isPalindrome(10)).toBeFalsy()
});
