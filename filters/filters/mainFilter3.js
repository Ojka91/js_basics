[... document.querySelectorAll(".filter")].forEach(el => el.addEventListener("change", createTable));
createTable();

function createTable() {

    let checkboxesChecked = [... document.querySelectorAll("input[name=party]:checked")].map(cb => cb.value);
    let stateValue = document.getElementById("selector").value;

    let members = data.results[0].members.filter(member => {
        let partyFilter = checkboxesChecked.includes(member.party) || checkboxesChecked.length === 0;
        let stateFilter = member.state === stateValue || stateValue === "All";

        return partyFilter && stateFilter;
    });

    printTable(members);
}

function printTable(array) {
    let template = "";

    array.map(member => {
            template += `
          <tr>
            <td><a href='${member.url}'>${member.first_name} , ${member.last_name}</a></td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
          </tr>
        `;
    });

    if(template.length === 0) document.getElementById('table').innerHTML = "Any guy with this criteria";
    else document.getElementById('table').innerHTML = template;
}
