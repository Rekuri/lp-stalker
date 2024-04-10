function fetchRank() {
    const URL = "https://umgwfmw97a.execute-api.us-west-1.amazonaws.com/default/riot/TURBOSHART666/SKID";

    fetch(URL, {
        method: "POST"
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        document.getElementById("Rekuri").getElementsByClassName("player-name")[0].innerText = json["summonerData"]["gameName"] + "#" + json["summonerData"]["tagLine"];
        document.getElementById("Rekuri").getElementsByClassName("player-rank")[0].innerText = json["rankedInfo"][0]["tier"] + " " + json["rankedInfo"][0]["rank"] + " " + json["rankedInfo"][0]["leaguePoints"] + "LP";
        document.getElementById("Rekuri").getElementsByClassName("win-loss")[0].innerText = json["rankedInfo"][0]["wins"] + "W " + json["rankedInfo"][0]["losses"] + "L " + Math.round((json["rankedInfo"][0]["wins"] / (json["rankedInfo"][0]["wins"] + json["rankedInfo"][0]["losses"])) * 100) + "% WR";
    });
}