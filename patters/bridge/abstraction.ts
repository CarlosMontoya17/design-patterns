import { IAbstraction } from "./abstraction.interface";
import { Implementor } from "./implementor.interface";

export class Abstraction implements IAbstraction {
    implementor: Implementor;
    constructor(implementor: Implementor) {
        this.implementor = implementor;
    }

    public add(element: number): void {
        this.implementor.add(element);
    }

    public get(): number[] {
        return this.implementor.getElements;
    }

    public operation(cb: (n: number) => number): number[] {
        return this.implementor.getElements.map(cb);
    }
}