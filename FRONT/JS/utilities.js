// createElement function based on POO

createElement =  function(settings) {
    const parent = document.getElementById(settings.containerId); 
    const child = document.createElement(settings.type);
    parent.appendChild(child);
    if (settings.id) {
        child.id = settings.id;
    }
    if (settings.classList) {
        child.classList = settings.classList;
    }
    child[settings.contentAttribution.type] = settings.contentAttribution.value;
    return child;
}


// getSrcPath

getFurnitureID = function() {
    return window.location.search.substr(4);
}
const baseUrl = "http://localhost:3000";
const furnitureApiPath = "/api/furniture";
getFullApiPath = function() {
    return baseUrl + furnitureApiPath;
}

getProduct = function(id) {
    return new Promise(function(resolve , reject) {
        let itemRequest = new XMLHttpRequest();
        itemRequest.onreadystatechange = function() {
            if (itemRequest.readyState === XMLHttpRequest.DONE && itemRequest.response.length > 0 && itemRequest.status === 200) {
                resolve(JSON.parse(itemRequest.response));   
            }
        }
        itemRequest.open("GET" , getFullApiPath() + "/" + id);
        itemRequest.send();
    });
}

