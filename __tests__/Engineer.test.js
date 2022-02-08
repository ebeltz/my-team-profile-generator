const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', ()  => {
            const engineer = new Engineer(456, 'John')

            expect(engineer.id).toEqual(456);
            expect(engineer.name).toEqual('John');
        })
    })
})