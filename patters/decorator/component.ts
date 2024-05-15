import { IComponent } from "./component.interface";

export class Component<T> implements IComponent<T> {
    protected _url: string;

    constructor(url: string) {
        this._url = url;
    }

    public async data(): Promise<T> {
        const _res = await fetch(this._url);
        return await _res.json();
    }
}

