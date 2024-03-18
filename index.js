//Set up on load events
window.addEventListener('DOMContentLoaded', pageFirstLoad, false);

function pageFirstLoad() {
    if (userinfo = getUserInfo()) {
        document.getElementById("loginbox").innerHTML = userinfo.userDetails;
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