var xhttp = new XMLHttpRequest();
var hostname;
class Info{
    constructor() {
        hostname = "http://localhost:2020";
        //hostname = "http://102.130.118.167:2020";
    }
    static getHost() {
        return "http://localhost:2020";
    }
    present(){
        return hostname;
    }
}
function getHost() {
    return host;
}
function webCall(method, url) {
    var host = getHost();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            response = xhttp.responseText;
            webResponse = JSON.parse(response);
        }
    };
    xhttp.open(method, host + url, true);
    xhttp.send();
    //return obj;
}
function getWebResponse() {
    return webResponse;
}