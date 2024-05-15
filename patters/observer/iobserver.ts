export interface IObserver<T> {
    refresh(value: T): void;
}