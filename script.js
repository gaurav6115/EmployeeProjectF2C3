let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");

let arr = [
    { id: 1, name: "John", age: "18", profession: "Developer" },
    { id: 2, name: "Jack", age: "20", profession: "Developer" },
    { id: 3, name: "Karen", age: "19", profession: "Admin" }
]


//filter list by profession

function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }

    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let divElement = document.createElement("div");

            //add border to values
            divElement.style.borderStyle = "solid";
            divElement.style.margin = "15px 0px"
            divElement.style.borderRadius = "10px"


            divElement.innerText = item.id + ".  Name:  " + item.name + "  Profession:  " + item.profession + "  Age:  " + item.age;
            result.append(divElement);
        }
    })
    console.log(arr);
}

//call the filter function
filterbtn.addEventListener("click", filterbyprofession);


//add new user detail

let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");

let aadBtn = document.getElementById("adduser");


function addUser() {
    let Uname = addName.value;
    let age = addAge.value;
    let prf = addProfession.value;

    let x = arr.length;
    ++x;

    let brr = { id: x, name: `${Uname}`, age: `${age}`, profession: `${prf}` }
    if (Uname !== "" && age !== "" && prf !== "") {
        arr.push(brr);
    }
    else {
        alert("fill complete detail.")
    }

    console.log(arr);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";

}


// call the add user detail function
aadBtn.addEventListener("click", addUser);
