class HelloFactory {
    /**
     * private User user Instance d'un utilisateur
     */
    private greeting: Greeting;

    public constructor(greeting: Greeting) {
        this.greeting = greeting;
    }
    
    /**
     * Instancie un Hello spécifique et retourne l'objet concerné
     * @return Hello
     */
    public getHelloInstance(): Hello {
        let className: string;
        if (this.greeting instanceof User) {
            className = this._buildMethodName(this.greeting.getCountry());
        } else {
            className = 'HelloCat';
        }

        let instance: any;

        try {
            instance = new (window)[className](this.greeting);
        } catch(error) {
            instance = new HelloFr(this.greeting);
        };
        
        return instance;
    }

    private _buildMethodName(country: string): string {
        return 'Hello' + country.charAt(0).toUpperCase() + country.slice(1);
    }
}