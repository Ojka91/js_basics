activateClicks();
createTable();


function createTable() {

    const myTable = document.getElementById("table");

    const members = data.results[0].members;

    myTable.innerHTML = "";

    for (let i = 0; i < members.length; i++) {

        if (canISeeTheMember(members[i])) {
            const row = document.createElement("tr");
            row.insertCell().innerHTML = members[i].first_name;
            row.insertCell().innerHTML = members[i].party;
            row.insertCell().innerHTML = members[i].state;
            myTable.append(row);
        }
    }
}

function activateClicks() {
    document.getElementById("rep").onclick = createTable;
    document.getElementById("dem").onclick = createTable;
    document.getElementById("selector").onchange = createTable;
}

function canISeeTheMember(member) {
    let myFirstFilter = false;
    let mySecondFilter = false;

    let arrayCheckbox = [];

    if (document.getElementById("rep").checked) {
        arrayCheckbox.push("R");
    }
    if (document.getElementById("dem").checked) {
        arrayCheckbox.push("D");
    }

    if (!document.getElementById("rep").checked && !document.getElementById("dem").checked) {
        arrayCheckbox.push("R");
        arrayCheckbox.push("D");
    }

    if (arrayCheckbox.includes(member.party)) {
        myFirstFilter = true;
    }

    let stateSelected = document.getElementById("selector").value;

    if (stateSelected === member.state || stateSelected === "all") {
        mySecondFilter = true;
    }


    return myFirstFilter && mySecondFilter;
}
