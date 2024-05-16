// Product
export class Car {
    private brand!: string;
    private model!: string;
    private color!: string;
    private price!: number;

    constructor(brand: string, model: string, color: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price; 
    }

    get properties(): { brand: string;model: string;color: string;price: number; } {
        return { 
            brand:this.brand,
            model: this.model,
            color: this.color,
            price:this.price
        };
    }

    getBrand(): string {
        return this.brand;
    }

    getKey(): string {
        return `${this.brand[0]}${this.model[0]}-${this.color[0]}`;
    }

    getTotalPrice(): number {
        return this.price * 1.16;
    }
}