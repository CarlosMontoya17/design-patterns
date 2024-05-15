export interface IStrategy {
    isAuth(user: string, password: string): boolean;
}