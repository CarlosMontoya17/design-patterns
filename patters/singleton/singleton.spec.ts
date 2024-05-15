import Singleton from './singleton';

describe('Singleton Pattern', () => {
    test('Same instance', () => {
        const singleton1 = Singleton.getInstance();
        const singleton2 = Singleton.getInstance();
        expect(singleton1).toBe(singleton2)
    });
    
    test('Get same message', () => {
        const singleton1 = Singleton.getInstance();
        singleton1.setMsg("fromSingletonOne");
        const singleton2 = Singleton.getInstance();
        singleton2.setMsg("fromSingletonTwo");
        expect(singleton1.getMsg()).toStrictEqual(singleton2.getMsg());
    });
});