class viewConsole{
    printMap(players,cards,a,b,c){
        console.log('Player 0: Money: '+players[0].getMoney()+' Position: '+players[0].getPosition());
        console.log(`Player 1: Money: ${players[1].getMoney()} Position: ${players[1].getPosition()}`);
        console.log(`${a} + ${b}`);
        console.log(`Go player № : ${c}`);
    }
};

