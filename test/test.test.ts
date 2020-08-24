import { reverse } from '../src/test';


beforeAll(() => {
  console.log(998);
});

afterAll(() => {
  console.log(5555);
});

test('测试算法', () => {
  expect(reverse(798)).toBe(897);
  expect(reverse(432)).toBe(234);
  expect(reverse(-666990)).toBe(-99666);
  expect(reverse(990)).toBe(99);
  expect(reverse(432)).not.toBe(239);
});

test('测试算法2', () => {
  expect(reverse(798)).toBe(897);
});