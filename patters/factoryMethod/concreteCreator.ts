import { RemoteSale, StoreSale } from "./concreteProduct";
import SaleFactory from "./creator";
import { ISale } from "./product";

//Concrete Creator
export class StoreSaleFactory implements SaleFactory {
    private _extra!: number;

    constructor(extra: number) {
        this._extra = extra;
    }

    public getSale(): ISale {
        return new StoreSale(this._extra);
    }
}

//Concrete Creator
export class RemoteSaleFactory implements SaleFactory {
    private _extra!: number;
    constructor(extra: number) {
        this._extra = extra;
    }

    public getSale(): ISale {
        return new RemoteSale(this._extra);
    }
}