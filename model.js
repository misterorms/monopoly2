var players = [new Player(1.5 * 10^6, 0), new Player(1.5 * 10^6, 1)];
var cards = [];
for(var i = 0; i < 40; i++){
    cards[i] = new Cards(i, 100 * 10^3, 10000, Math.floor(i/2));
}
function getRandomInt(max) {
    if (max) return Math.floor(Math.random() * Math.floor(max));
    else Math.floor(Math.random() * Math.floor(7));
}
(function (){
    function Card(num, price, priceRent, color){
        this.owner = -1;
        this.num = num;
        this.price = price;
        this.priceRent = priceRent;
        this.color = color;
    }
    function RoflanCard(type) {
        this.type = type;
        this.caraganda = function (player) {
            player.position = getRandomInt(41);
        }
        //И т.д остальные рофлан

    }
    function Player(money, num) {
        this.money = money;
        this.num = num;
        this.position = 0;
    }
})();