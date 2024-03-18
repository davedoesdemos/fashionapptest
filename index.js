//variables
var userInfo = null;

//Set up on load events
window.addEventListener('DOMContentLoaded', pageFirstLoad, false);

async function pageFirstLoad() {
    userInfo = await getUserInfo();
    if (userInfo != null) {
        document.getElementById("loginbox").innerHTML = userInfo.clientPrincipal.userDetails + " <a href=\"/.auth/logout\">(Logout)</a>";
    } else {
        document.getElementById("loginbox").innerHTML = "<a href=\"/.auth/login/aadb2c\">Login</a>";
    }
}

async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    return payload;
}