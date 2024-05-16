import { Car } from "./product";

export interface ICarBuilder {
    brand: string;
    model: string;
    color: string;
    price: number;
    setBrand(brand: string): ICarBuilder;
    setModel(model: string): ICarBuilder;
    setColor(color: string): ICarBuilder;
    setPrice(price: number): ICarBuilder;
    reset(): void;
    build(): Car;
}