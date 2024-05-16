import { MainMenuState, PausedState, RunningState } from "./concreteState";
import { Context } from "./context";

describe('State pattern', () => {
    let _process: Context;

    beforeEach(() => _process = new Context());
    test('Main menu process correctly', () => {
        _process.pause();
        _process.resume();
        expect(_process.getState).toBeInstanceOf(MainMenuState);
    })
    test('Start process correctly', () => {
        _process.start();
        // Try start again
        _process.start();
        // Try resume process
        _process.resume();
        expect(_process.getState).toBeInstanceOf(RunningState);
    });
    test('Paused process correctly', () => {
        _process.start();
        _process.pause();
        // Try start again
        _process.start();
        // Try pause again
        _process.pause();
        expect(_process.getState).toBeInstanceOf(PausedState);
    });
    test('Resumed process correctly', () => {
        _process.start();
        _process.pause();
        _process.resume();
        expect(_process.getState).toBeInstanceOf(RunningState);
    });
});