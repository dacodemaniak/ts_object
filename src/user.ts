class User implements Greeting {
    private name: string;
    private forname: string;
    private country: string;

    public getGreeting(): string {
        return this.forname + ' ' + this.name;
    }
    
    public setName(name: string): User {
        this.name = name;
        return this;
    }

    public setForname(forname: string): User {
        this.forname = forname;
        return this;
    }

    /**
     * Définit le pays de l'utilisateur
     * @param string country Code ISO du pays
     * @return User
     */
    public setCountry(country: string): User {
        this.country = country;
        return this;
    }

    public getName(): string {
        return this.name;
    }

    public getForname(): string {
        return this.forname;
    }

    public getCountry(): string {
        return this.country;
    }
}