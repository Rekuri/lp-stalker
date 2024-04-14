function fetchRank() {
    fetch("https://umgwfmw97a.execute-api.us-west-1.amazonaws.com/default/riot/TURBOSHART666/SKID", {
        method: "POST"
    })
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("Rekuri").getElementsByClassName("player-name")[0].innerText = json["summonerData"]["gameName"] + "#" + json["summonerData"]["tagLine"];
        document.getElementById("Rekuri").getElementsByClassName("player-icon-image")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${json["puuidInfo"]["profileIconId"]}.jpg`;
        document.getElementById("Rekuri").getElementsByClassName("player-icon-border")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/wings/wings_${(json["rankedInfo"][0]["tier"]).toLowerCase()}.png`;
        document.getElementById("Rekuri").getElementsByClassName("player-rank")[0].innerText = json["rankedInfo"][0]["tier"] + " " + json["rankedInfo"][0]["rank"] + " " + json["rankedInfo"][0]["leaguePoints"] + "LP";
        document.getElementById("Rekuri").getElementsByClassName("win-loss")[0].innerText = json["rankedInfo"][0]["wins"] + "W " + json["rankedInfo"][0]["losses"] + "L " + Math.round((json["rankedInfo"][0]["wins"] / (json["rankedInfo"][0]["wins"] + json["rankedInfo"][0]["losses"])) * 100) + "% WR";
    });

    fetch("https://umgwfmw97a.execute-api.us-west-1.amazonaws.com/default/riot/MightyYuumi/NA1", {
        method: "POST"
    })
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("Mighty-Yuumi").getElementsByClassName("player-name")[0].innerText = json["summonerData"]["gameName"] + "#" + json["summonerData"]["tagLine"];
        document.getElementById("Mighty-Yuumi").getElementsByClassName("player-icon-image")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${json["puuidInfo"]["profileIconId"]}.jpg`;
        document.getElementById("Mighty-Yuumi").getElementsByClassName("player-icon-border")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/wings/wings_${(json["rankedInfo"][0]["tier"]).toLowerCase()}.png`;
        document.getElementById("Mighty-Yuumi").getElementsByClassName("player-rank")[0].innerText = json["rankedInfo"][0]["tier"] + " " + json["rankedInfo"][0]["rank"] + " " + json["rankedInfo"][0]["leaguePoints"] + "LP";
        document.getElementById("Mighty-Yuumi").getElementsByClassName("win-loss")[0].innerText = json["rankedInfo"][0]["wins"] + "W " + json["rankedInfo"][0]["losses"] + "L " + Math.round((json["rankedInfo"][0]["wins"] / (json["rankedInfo"][0]["wins"] + json["rankedInfo"][0]["losses"])) * 100) + "% WR";
    });

    fetch("https://umgwfmw97a.execute-api.us-west-1.amazonaws.com/default/riot/Lamia/NA1", {
        method: "POST"
    })
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("Lamia").getElementsByClassName("player-name")[0].innerText = json["summonerData"]["gameName"] + "#" + json["summonerData"]["tagLine"];
        document.getElementById("Lamia").getElementsByClassName("player-icon-image")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${json["puuidInfo"]["profileIconId"]}.jpg`;
        document.getElementById("Lamia").getElementsByClassName("player-icon-border")[0].src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/wings/wings_${(json["rankedInfo"][0]["tier"]).toLowerCase()}.png`;
        document.getElementById("Lamia").getElementsByClassName("player-rank")[0].innerText = json["rankedInfo"][0]["tier"] + " " + json["rankedInfo"][0]["rank"] + " " + json["rankedInfo"][0]["leaguePoints"] + "LP";
        document.getElementById("Lamia").getElementsByClassName("win-loss")[0].innerText = json["rankedInfo"][0]["wins"] + "W " + json["rankedInfo"][0]["losses"] + "L " + Math.round((json["rankedInfo"][0]["wins"] / (json["rankedInfo"][0]["wins"] + json["rankedInfo"][0]["losses"])) * 100) + "% WR";
    });
}