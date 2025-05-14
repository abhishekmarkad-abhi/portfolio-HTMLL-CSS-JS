// Load from localStorage if available
var appointments = JSON.parse(localStorage.getItem("appointments")) || [
    "Birthday Party",
    "Meeting with Manager"
];

function SaveAppointments() {
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

function LoadAppointments() {
    const list = document.getElementById("lstAppointments");
    list.innerHTML = "";

    appointments.forEach(function (appointment) {
        var option = document.createElement("option");
        option.text = appointment;
        option.value = appointment;
        list.appendChild(option);
    });

    document.getElementById("lblCount").innerHTML = `You have ${appointments.length} appointments`;
}

function bodyload() {
    LoadAppointments();
}

function AddClick() {
    var appointment = document.getElementById("txtTask").value.trim();
    if (appointment === "") {
        alert("Please enter a valid appointment.");
        return;
    }
    appointments.push(appointment);
    SaveAppointments();
    alert(`${appointment} added to your list`);
    LoadAppointments();
    document.getElementById("txtTask").value = "";
}

function SortAsc() {
    appointments.sort();
    SaveAppointments();
    LoadAppointments();
}

function SortDesc() {
    appointments.sort().reverse();
    SaveAppointments();
    LoadAppointments();
}

function DeleteClick() {
    var list = document.getElementById("lstAppointments");
    var selectedIndex = list.selectedIndex;
    if (selectedIndex === -1) {
        alert("Please select an appointment to delete.");
        return;
    }
    var removed = appointments.splice(selectedIndex, 1);
    SaveAppointments();
    alert(`${removed} deleted.`);
    LoadAppointments();
}

function ClearAllClick() {
    if (appointments.length === 0) {
        alert("No appointments to clear.");
        return;
    }
    if (confirm("Are you sure you want to clear all appointments?")) {
        appointments = [];
        SaveAppointments();
        LoadAppointments();
    }
}

function EditClick() {
    var list = document.getElementById("lstAppointments");
    var selectedIndex = list.selectedIndex;
    var newValue = document.getElementById("txtTask").value.trim();

    if (selectedIndex === -1) {
        alert("Please select an appointment to edit.");
        return;
    }
    if (newValue === "") {
        alert("Please enter a new value.");
        return;
    }

    appointments[selectedIndex] = newValue;
    SaveAppointments();
    alert("Appointment updated.");
    LoadAppointments();
    document.getElementById("txtTask").value = "";
}
