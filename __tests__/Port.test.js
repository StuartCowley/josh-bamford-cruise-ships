/* globals describe it expect */ 
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
    describe('with ports and ships', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;

        beforeEach(() => {
            port = new Port('Dover');
            ship = {};
            titanic = {};
            queenMary = {};
        });
        it('can be instantiated ', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('has a name property', () => {
            expect(port.name).toBe('Dover');
        });
        it('can add ship', () => {   
           port.addShip(ship);
    
           expect(port.ships).toContain(ship);
        });
        it('can remove a ship', () => {
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(titanic);
    
            expect(port.ships).toEqual([queenMary]);
        });
    });
});
