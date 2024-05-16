import { ICarBuilder } from "./builder.interface";

export class CarDirector {
    private carBuilder!: ICarBuilder;
    constructor(carBuilder: ICarBuilder) {
        this.carBuilder = carBuilder;
    }

    setCarBuilder(carBuilder: ICarBuilder): void {
        this.carBuilder = carBuilder;
    }


    createVWCar(model: string, color: string, price: number): void {
        this.carBuilder.reset();
        this.carBuilder.setBrand("Volkswagen")
                        .setModel(model)
                        .setColor(color)
                        .setPrice(price);
    }
}