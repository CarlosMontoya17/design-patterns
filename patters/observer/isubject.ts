import { IObserver } from "./iobserver";

export interface ISubject <T>{
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    next(value: T): void;
}