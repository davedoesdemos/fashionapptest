//Set up on load events
window.addEventListener('DOMContentLoaded', pageFirstLoad, false);

async function pageFirstLoad() {
    if (userinfo = getUserInfo()) {
        const userName = userinfo.clientPrincipal.userDetails;
        document.getElementById("loginbox").innerHTML = userName;
    } else {
        document.getElementById("loginbox").innerHTML = "No user info";
    }
}

async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return payload;
}