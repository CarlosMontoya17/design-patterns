import { Implementor } from "./implementor.interface";

export class OrderImplementor implements Implementor {
    elements: number[] = [];
    
    public add(element: number): void {
        this.elements.push(element);
        this.elements.sort((a, b) => a - b);
    }
    public get getElements(): number[] {
        return this.elements;
    }
}


export class UniqueImplementor implements Implementor {
    elements: number[] = [];

    public add(element: number): void {
        if(!this.elements.includes(element)) {
            this.elements.push(element);
        }
    }

    public get getElements(): number[] {
        return this.elements;
    }
}