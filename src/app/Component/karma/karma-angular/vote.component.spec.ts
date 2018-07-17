// ! state change pattern
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => { // ? set up
        component = new VoteComponent;
    });

    // afterEach(() => {}); // ? tear down
    // ? This is where you can write some cleanup code, executed once after ea test

    // beforeAll(() => {});
    // ? This is executed once before all the tests

    // afterAll(() => {});
    // ? This is executed once after all the tests

    it('should increment totalVotes when upvoted ', () => {
        component.upVote(); // * Act, call method or action

        expect(component.totalVotes).toBe(1); // * Assert
    });

    it('should decrement totalVotes when downvoted', () => {
        component.downVote();

        expect(component.totalVotes).toBe(-1);
    });

});
