class Hitcounter {
    winningmusik = new Audio('assets/Hero Theme.mp3');
    numOfHitedEnemies = 0;
    enemies = [];
    numOfEnemies = 3;

    constructor() {
        this.reset();
        this.render();
    }

    addEnemies() {
        for (let i = 0; i < this.numOfEnemies; i++) {
            this.enemies.push(new Enemy(enemy => {
                    this.hits(enemy);
                },
                'assets/mohrhuhn.png'));
        }
        console.log(this.enemies);
    }

    hits(enemy) {
        console.count('hit')
        this.numOfHitedEnemies++;
        this.hitcounterDiv.innerHTML =
            `<p>${this.numOfHitedEnemies} hits</p>`;

        if (this.numOfHitedEnemies !== 0 && (this.numOfHitedEnemies % 3) === 0) {
            this.reset();
            console.log('new chicken');
        } else {
            console.log('weiter spielen');
        }
        if (this.numOfHitedEnemies === 4) {
            console.log('gewonnen')
            this.won();
        }
    }

    render() {
        this.hitcounterDiv = document.createElement('div');
        this.hitcounterDiv.classList.add("hitcounter");
        document.body.appendChild(this.hitcounterDiv)
    }

    reset() {
        this.enemies.forEach(enemy => enemy.removeFromStage());
        this.enemies = [];
        this.addEnemies();
    }

    won() {
        console.log('backgroundmusic stop');
        clearInterval(this.gameended);
        this.winningmusik.play();
        console.log('winning music starts')
        alert('SUPER du hast gewonnen... noch eine runde?')
        location.reload()
    }
}