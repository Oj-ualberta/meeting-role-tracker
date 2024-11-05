// Team members and roles
const members = ["Alice", "Bob", "Charlie", "Dana", "Evan"];
const roles = ["Facilitator", "Note Taker", "Time Keeper", "Presenter", "Tech Support"];

let currentIndex = 0;

// Function to update the table with the current assignments
function updateTable() {
    const tableBody = document.getElementById("rolesTable");
    tableBody.innerHTML = "";
    roles.forEach((role, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${role}</td><td>${members[(i + currentIndex) % members.length]}</td>`;
        tableBody.appendChild(row);
    });
}

// Function to rotate roles to the next member for the next meeting
function nextMeeting() {
    currentIndex++;
    updateTable();
}

// Initial table load
updateTable();
