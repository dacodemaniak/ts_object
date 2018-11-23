class Cat implements Greeting {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getGreeting(): string {
        return this.name;
    }
    public getName(): string {
        return this.name;
    }
}