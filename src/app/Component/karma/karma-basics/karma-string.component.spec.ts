import { greet } from './karma-string.component';

describe('greet', () => {
    it('should include the name in the message', () => {
        expect(greet('matt')).toContain('matt');
    });
});
