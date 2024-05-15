import { IStrategy } from "./istrategy";

export class WebStrategy implements IStrategy {
    isAuth(user: string, pass: string): boolean {        
        const _users = [
            {
                user: 'admin',
                pass: 'superAdmin'
            },
            {
                user: 'client',
                pass: 'password'
            }
        ];

        const _user = _users.find(u => u.user===user && u.pass===pass);
        return _user? true: false;
    }
}

export class VPSStrategy implements IStrategy {
    isAuth(user: string, pass: string): boolean {
        const _user = { user: 'root', pass: '123456' };
        return _user.user===user && _user.pass===pass;
    }
}