abstract class Hello {
    private qui: String;
    protected quoi: string;

    public constructor(greeting: Greeting) {
        this.qui = greeting.getGreeting();
    }

    public setQui(qui: string): Hello {
        this.qui = qui;
        return this;
    }

    public sayHello(): void {
        this._humanSayHello();
        console.log(this.quoi + ' ' + this.qui);
    }
    
    /**
     * 
     */
    private _humanSayHello() {
        if ('speechSynthesis' in window) {
            let voices = speechSynthesis.getVoices();
            let sayIt = new SpeechSynthesisUtterance();
            sayIt.lang = 'Microsoft Hortense Desktop - French';
            sayIt.volume = 5;
            sayIt.pitch = 3;
            sayIt.text = this.quoi + ' ' + this.qui;
            window.speechSynthesis.speak(sayIt);
        }
    }
}