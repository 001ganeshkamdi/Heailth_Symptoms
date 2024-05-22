function popup(popup_name) {
    var get_popup = document.getElementById(popup_name);
    if (get_popup.style.display === "flex") {
        get_popup.style.display = "none";
    } else {
        fetchProfileData(); // Fetch profile data when showing the popup
        get_popup.style.display = "flex";
    }
}

function fetchProfileData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "showprofile.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var profileData = JSON.parse(xhr.responseText);
            if (profileData.error) {
                alert(profileData.error);
            } else {
                document.getElementById("profileImage").src = profileData.profileImage;
                document.getElementById("profileName").textContent = profileData.name;
                document.getElementById("profileEmail").textContent = profileData.email;
                document.getElementById("profileOccupation").textContent = profileData.occupation;
                document.getElementById("profileAge").textContent = profileData.age;
                document.getElementById("profileGender").textContent = profileData.gender;
            }
        }
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
    // Ensure the popup is hidden on page load
    var get_popup = document.getElementById('profile-popup');
    get_popup.style.display = 'none';
});
