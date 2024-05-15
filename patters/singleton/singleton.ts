export default class Singleton {
    private static instance: Singleton;
    private message!: string;
    private constructor() {
        this.message = "SingletonCreated!";
    }
    public static getInstance(): Singleton {
        if(!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    // Methods
    public getMsg(): string {
        return this.message;
    }
    public setMsg(msg: string): void {
        this.message = msg;
    }
}
