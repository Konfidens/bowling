import { calculateScore } from "./bowling";

describe('calculateScore', () => {
  it('returns something', () => {
    const input = { pins: [5, 0] };
    const result = calculateScore(input);
    expect(result).toBeTruthy()
  })
})

export {}
