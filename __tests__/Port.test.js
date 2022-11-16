/* globals describe it expect */ 
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
    describe('with ports and ships', () => {
        let port;

        beforeEach(() => {
            port = new Port('Dover');
        });
        it('can be instantiated ', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('has a name property', () => {
            expect(port.name).toBe('Dover');
        });
        it('can add ship', () => {  
            const ship = jest.fn();  
            port.addShip(ship);
            
            expect(port.ships).toContain(ship);
        });
        it('can remove a ship', () => {
            const titanic = jest.fn();
            const queenMary = jest.fn();

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(titanic);
            
            expect(port.ships).not.toContain([titanic]);
        });
    });
});
