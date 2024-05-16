import { Context } from "./context";
import { IState } from "./state.interface";

export class MainMenuState implements IState {
    
    constructor(private context: Context) { }

    start(): void {
        this.context.changeState = new RunningState(this.context);
    }

    pause(): void { }

    resume(): void { }
}

export class RunningState implements IState {
    constructor(private context: Context) { }

    start(): void { }

    pause(): void {
        this.context.changeState = new PausedState(this.context);
    }

    resume(): void {}
}

export class PausedState implements IState {
    constructor(private context: Context) { }

    start(): void {}

    pause(): void {}

    resume(): void {
        this.context.changeState = new RunningState(this.context);
    }
}