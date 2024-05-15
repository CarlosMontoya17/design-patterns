export interface IComponent<T> {
    data(): Promise<T>;
}