import { Observer } from "./observer";
import { Subject } from "./subject";

describe('Observer pattern', () => {
    test('Subject notifies observers correctly', () => {
        const _subject = new Subject<number>();
        const _observer1 = new Observer<number>(() => {});
        const _observer2 = new Observer<number>(()=>{}); 
        _subject.subscribe(_observer1);
        _subject.subscribe(_observer2);
        _subject.next(35);
        expect(_observer1.getLastValue()).toStrictEqual(_observer2.getLastValue());
    });
    test('Observer is detached correctly', () => {
        const _subject = new Subject<{ position: number }>();
        const _observer1 = new Observer<{ position: number }>(() => {});
        const _observer2 = new Observer<{ position: number }>(() => {});
        _subject.subscribe(_observer1);
        _subject.subscribe(_observer2);
        _subject.next({ position: 20 });
        _subject.unsubscribe(_observer1);
        _subject.next({ position: 1080 });
        expect(_observer1.getLastValue()).not.toStrictEqual(_observer2.getLastValue())
    });
});