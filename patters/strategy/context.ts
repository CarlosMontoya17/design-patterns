import {  IStrategy } from "./istrategy";

export class StrategyContext {
    private strategy!: IStrategy;

    constructor(strategy: IStrategy) {
        this.setStrategy(strategy);
    }

    setStrategy(strategy: IStrategy): void {
        this.strategy =  strategy;
    }

    auth(user: string, pass: string): boolean {
        return this.strategy.isAuth(user, pass);
    }
}