let firstName;
const serverUrl = "https://api.genderize.io";



document.getElementById("form").addEventListener("submit", getGender);

function getName() {
    firstName = nameToSubmit.value;
}

function clear() {
    nameToSubmit.value = "";
}


function getGender() {
    try {

        getName();
        let url = `${serverUrl}?name=${firstName}`;
        let response = fetch(url);
        let gender = response.then((response) => response.json());
        gender.then((result) => alert(`${result.name} : ${result.gender}`));
        clear();
    } catch (err) {
        alert(err)
    }
}