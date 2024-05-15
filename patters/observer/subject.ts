import { IObserver } from "./iobserver";
import { ISubject } from "./isubject";

export class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[]; 
    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    next(data: T): void {
        this.observers.forEach(obs => {
            obs.refresh(data);
        });
    }

}