import { StrategyContext } from "./context";
import { VPSStrategy, WebStrategy } from "./strategy";

describe('Strategy Pattern', () => {
    test('Web no auth', () => {
        const _context = new StrategyContext(new WebStrategy());
        expect(_context.auth("basic", "user")).toBe(false);
    });
    test('Web auth', () => {
        const _context = new StrategyContext(new WebStrategy());
        expect(_context.auth("admin", "superAdmin")).toBe(true);
    });
    test('VPS no auth', () => {
        const _context = new StrategyContext(new VPSStrategy());
        expect(_context.auth("vps", "password")).toBe(false);
    });
    test('VPS auth', () => {
        const _context = new StrategyContext(new VPSStrategy());
        expect(_context.auth("root", "123456")).toBe(true);
    });
    test('Change strategy', () => {
        const _context = new StrategyContext(new WebStrategy());
        _context.setStrategy(new VPSStrategy());
        expect(_context.auth("root", "123456")).toBe(true);
    })
});