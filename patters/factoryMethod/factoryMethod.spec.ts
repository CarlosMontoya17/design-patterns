import { RemoteSaleFactory, StoreSaleFactory } from "./concreteCreator";
import { ISale } from "./product";
import SaleFactory from "./creator";

describe('Factory Method Pattern', () => {
    test('Create Store Sale' , () => {
        const storeFactory: SaleFactory = new StoreSaleFactory(0.1);
        const sale = storeFactory.getSale();
        expect(sale.Sell(20)).toBe(22);
    });
    test('Create Remote Sale', () => {
        const remoteFactory = new RemoteSaleFactory(40);
        const sale = remoteFactory.getSale();
        expect(sale.Sell(50)).toBe(90);
    });
});