class viewConsole{
    constructor(players,cards){
        this.players=players;
        this.cards=cards;
    }
    printMap(){
     console.log('Player 0: '+this.players[0].getMoney());
    }
}