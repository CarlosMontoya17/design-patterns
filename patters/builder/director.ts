import { ICarBuilder } from "./builder.interface";

export class CarDirector {
    private carBuilder!: ICarBuilder;
    constructor(carBuilder: ICarBuilder) {
        this.carBuilder = carBuilder;
    }

    createVWCar(model: string, color: string, price: number): void {
        this.carBuilder.reset();
        this.carBuilder.setBrand("Volkswagen")
                        .setModel(model)
                        .setColor(color)
                        .setPrice(price);
    }

    createJetta2024VWCar(color: string): void {
        this.carBuilder.reset();
        this.carBuilder.setBrand("Volkswagen")
                        .setModel("Jetta")
                        .setColor(color)
                        .setPrice(3000);
    }
}