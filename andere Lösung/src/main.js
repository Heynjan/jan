class Main {
    backgroundmusic = new Audio('assets/backgroundmusic.mp3');
    background;
    crosshair;
    timer;

    constructor() {
        this.init();
    }

    init() {
        this.backgroundmusic.play()
        this.addBackground();
        this.timerstart();
        this.createHitCounter();
        this.loadcrosshair();
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus2.png');
        this.background.show();
    }

    loadcrosshair(){
        this.crosshair = new Crosshair('assets/crosshair1.svg')
        this.crosshair.show();
    }

    timerstart(){
        this.timer = new Timer ()
    }

    createHitCounter() {
        this.hitcounter = new Hitcounter();
    }
}