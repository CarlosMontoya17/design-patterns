import { ICarBuilder } from "./builder.interface";
import { Car } from "./product";

export class CarBuilder implements ICarBuilder {
    brand!: string;
    color!: string;
    model!: string;
    price!: number;

    constructor() {
        this.brand = "";
        this.color = "";
        this.model = "";
        this.price = 0;
    }

    reset(): void {
        this.brand = "";
        this.color = "";
        this.model = "";
        this.price = 0;
    }

    setBrand(brand: string): ICarBuilder {
        this.brand = brand;
        return this;
    }

    setColor(color: string): ICarBuilder {
        this.color = color;
        return this;
    }

    setModel(model: string): ICarBuilder {
        this.model = model;
        return this;
    }

    setPrice(price: number): ICarBuilder {
        this.price = price;
        return this;
    }

    build(): Car {
        const _car = new Car(
            this.brand,
            this.model,
            this.color,
            this.price
        );
        this.reset();
        return _car;
    }
}