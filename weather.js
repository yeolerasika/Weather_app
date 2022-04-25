
let getWeather = () => {
    let cityName = document.querySelector("#textId").value || "Mumbai";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=858f15fed9292cbe25c341a754c55e45&units=metric&q=" + cityName;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        console.log(refJson);
        domOperationHere(refJson);
    };
    xhr.send();
};

let domOperationHere = (refJson) => {
    const name = refJson.name;
    const maxTemp = refJson.main.temp_max;

    const parent = document.querySelector("#parent");

    const newElement = parent.cloneNode(true);
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = "Temperature" + ": " + maxTemp + " C" + "      " + ",     City" + ": " + name;

    let mainBox = document.querySelector("#mainBox");
    mainBox.insertBefore(newElement, mainBox.firstChild);

    document.querySelector("#textId").value = "";

};