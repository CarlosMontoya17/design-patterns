import { Implementor } from "./implementor.interface";

export interface IAbstraction {
    implementor: Implementor;
    add(element: number): void;
    get(): number[];
    operation(cb: (n: number) => number ): number[];
}