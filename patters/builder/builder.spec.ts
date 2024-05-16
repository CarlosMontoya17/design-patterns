import { CarBuilder } from "./builder";
import { CarDirector } from "./director";
import { Car } from "./product";

describe('Builder pattern', () => {
    test('Create a car instance', () => {
        const _carBuilder = new CarBuilder();
        const _car = _carBuilder.setBrand("Audi")
                                .setModel("A1")
                                .setColor("Red")
                                .setPrice(10000)
                                .build();
        expect(_car).toBeInstanceOf(Car);
    });
    test('Create a VW car correctly', () => {
        const _carBuilder = new CarBuilder();
        const _director = new CarDirector(_carBuilder);
        _director.createVWCar("Jetta", "White", 1500);
        const _vw = _carBuilder.build();
        expect(_vw.getBrand()).toStrictEqual("Volkswagen");
    });
    test('Generate key correctly', () => {
        const _carBuilder = new CarBuilder();
        const _director = new CarDirector(_carBuilder);
        _director.createVWCar("Jetta", "White", 1500);
        const _vw = _carBuilder.build();
        expect(_vw.getKey()).toStrictEqual("VJ-W");
    });
    test('Get total price correctly', () => {
        const _carBuilder = new CarBuilder();
        const _director = new CarDirector(_carBuilder);
        _director.createVWCar("Virtus", "Red", 1000);
        const _vw = _carBuilder.build();
        expect(_vw.getTotalPrice()).toBe(1160);
    })
});