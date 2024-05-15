import { Component } from "./component";
import { IData } from "./data.interface";
import { HtmlElementDecorator } from "./decorator";

describe('Decorator pattern', () => {
    test('Get data', async () => {
        const _url = 'https://jsonplaceholder.typicode.com/photos';
        const _component = new Component<IData[]>(_url);
        const _data = await _component.data();
        expect(_data.length).toBeGreaterThan(0);
    });
    test('Decorator HTML title elements', async () => {
        const _url = 'https://jsonplaceholder.typicode.com/photos';
        const _component = new Component<IData[]>(_url);
        const _html = new HtmlElementDecorator(_component);
        const _data = await _html.data();
        expect(_data.every(data => data.title.startsWith('<h4>') && data.title.endsWith('</h4>'))).toBe(true);
    });
    test('Decorator HTML image elements', async () => {
        const _url = 'https://jsonplaceholder.typicode.com/photos';
        const _component = new Component<IData[]>(_url);
        const _html = new HtmlElementDecorator(_component);
        const _data = await _html.data();
        expect(_data.every(data => `<img src="${data.thumbnailUrl}">`)).toBe(true);
    });
});