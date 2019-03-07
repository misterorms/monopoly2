include("model.js");
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
(function () {
    function gameCycle() {
        var i = 0;
        while(players.length > 1){
            if(i === players.length) i = 0;
        }
    }
    function step() { //TURMA
        var a = getRandomInt();
        var b = getRandomInt();
        if(Math.floor(player.position + a + b / 40) > 0) player.money += 200000;
        player.position = (player.position + a + b) % 40;

    }
})();