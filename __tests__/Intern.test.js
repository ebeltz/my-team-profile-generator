const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const intern = new Employee(456, 'John');

            expect(intern.id).toEqual(456);
            expect(intern.name).toEqual('John');
        });
    });
});
