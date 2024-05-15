import { IObserver } from "./iobserver";

export class Observer<T> implements IObserver<T> {
    private _fn: (value: T) => void;
    private lastValue!: T;

    constructor(fn: (value: T) => void) {
        this._fn = fn;
    }

    getLastValue(): T {
        return this.lastValue;
    }

    refresh(value: T): void {
        this.lastValue = value;
        this._fn(value);
    }
}