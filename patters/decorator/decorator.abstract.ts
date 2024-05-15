import { IComponent } from "./component.interface";
import { IData } from "./data.interface";

export abstract class Decorator<T> implements IComponent<T> {
    protected component!: IComponent<T>;
    constructor(component: IComponent<T>) {
        this.component = component;
    }

    async data(): Promise<T> {
        return await this.component.data();
    }
}