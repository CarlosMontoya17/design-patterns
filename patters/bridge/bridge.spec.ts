import { Abstraction } from "./abstraction";
import { OrderImplementor, UniqueImplementor } from "./implementor";

describe('bridge test', () => {
    test('Unique data', () => {
        const _unique = new Abstraction(new UniqueImplementor());
        const _lenght = 5;
        for (let i = 0; i < _lenght; i++) {
            _unique.add(i);
        }
        // Trying to add a duplicate number.
        _unique.add(2);
        _unique.add(3);
        expect(new Set(_unique.get()).size).toStrictEqual(_lenght);
    });
    test('Order data', () => {
        const _order = new Abstraction(new OrderImplementor());
        for (let i = 0; i < 5; i++) {
            _order.add(i*Math.floor(Math.random() * 9) + 1);
        }
        const _data = _order.get();
        expect(_data.every((element, index, array) => index === 0 || element >= array[index - 1])).toBe(true);
    });
    test('Abstract operation', () => {
        const _unique = new Abstraction(new UniqueImplementor());
        for (let i = 0; i < 5; i++) {
            _unique.add(i);
        }
        const _original = _unique.get();
        const _modify = _unique.operation((n: number) => n*2);
        expect(_original.every((element, index) => element * 2 === _modify[index])).toBe(true);
    })
});