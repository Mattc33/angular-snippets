// ! https://www.youtube.com/watch?v=yG4FH60fhUE&t

// describe() define a suite
// it() define a test

import { compute } from './karma-number.component';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 0 if input is negative', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});

// describe('compute', () => {
//     it('should return 0 if num === is negative', () => {

//     });
// });
