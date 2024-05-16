import { MainMenuState } from "./concreteState";
import { IState } from "./state.interface";

export class Context {
    private state!: IState;

    constructor() {
        this.state = new MainMenuState(this);
    }

    set changeState(state: IState) {
        this.state = state;
    }

    get getState(): IState {
        return this.state;
    }

    start(): void {
       this.state.start();
    }

    pause(): void {
        this.state.pause();
    }

    resume(): void {
        this.state.resume();
    }
}