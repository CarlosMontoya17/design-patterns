import { IComponent } from "./component.interface";
import { IData } from "./data.interface";
import { Decorator } from "./decorator.abstract";

export class HtmlElementDecorator extends Decorator<IData[]> {
    constructor(component: IComponent<IData[]>) {
        super(component);
    }

    async data(): Promise<IData[]> {
        const _data = await super.data();
        const _newData = _data.map(d => {
            d.title = `<h4>${d.title}</h4>`;
            d.thumbnailUrl = `<img src="${d.albumId}">`;
            return d;
        });
        return _newData;
    }
}