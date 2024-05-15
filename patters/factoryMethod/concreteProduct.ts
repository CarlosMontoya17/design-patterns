import { ISale } from "./product";

//Concrete Product
export class StoreSale implements ISale {
    private _tax!: number;
    constructor(tax: number) {
        this._tax = tax;
    }
    public Sell(total: number): number {
        return total*(1 + this._tax);
    }
}

//Concrete Product
export class RemoteSale implements ISale {
    private _extra!: number;
    constructor(extra: number) {
        this._extra = extra;
    }

    public Sell(total: number): number {
        return total+this._extra;
    }
}