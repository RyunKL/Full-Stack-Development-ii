// calculator.test.js
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { add, sub, mul, div } from './calculator.js';

// Success test cases
describe('Calculator - Success Tests', () => {
  it('should add two numbers correctly', () => {
    const result = add(7, 3);
    expect(result).to.equal(10);
  });

  it('should subtract two numbers correctly', () => {
    const result = sub(5, 2);
    expect(result).to.equal(3);
  });

  it('should multiply two numbers correctly', () => {
    const result = mul(4, 3);
    expect(result).to.equal(12);
  });

  it('should divide two numbers correctly', () => {
    const result = div(8, 2);
    expect(result).to.equal(4);
  });
});

// Fail test cases
describe('Calculator - Fail Tests', () => {
  it('should fail to divide by zero', () => {
    // Using chai's `expect` with a function that throws an error
    expect(() => div(10, 0)).to.throw('Cannot divide by zero');
  });
});