const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(456, 'John');

            expect(manager.id).toEqual(456);
            expect(manager.name).toEqual('John');
        });
    });
});
