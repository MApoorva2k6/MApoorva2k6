document.addEventListener("DOMContentLoaded", function () {
    // Get references to the dropdown and hackathon table
    const hackathonDropdown = document.getElementById("hackathonDropdown");
    const hackathonTable = document.getElementById("hackathonTable").getElementsByTagName("tbody")[0];

    // Define mock hackathon data (you can replace this with actual data)
    const nationalHackathons = [
        { serialNumber: 1, name: "National Hackathon 1", registrationDate: "2023-09-30", applyLink: "registerToJoin.html" },
        { serialNumber: 2, name: "National Hackathon 2", registrationDate: "2023-10-15", applyLink: "quiz.html" },
        { serialNumber: 3, name: "National Hackathon 3", registrationDate: "2023-10-25", applyLink: "challenge.html" }
    ];

    const internationalHackathons = [
        { serialNumber: 1, name: "International Hackathon 1", registrationDate: "2023-10-10", applyLink: "challenge.html" },
        { serialNumber: 2, name: "International Hackathon 2", registrationDate: "2023-10-20", applyLink: "challenge.html" },
        { serialNumber: 3, name: "International Hackathon 3", registrationDate: "2023-11-05", applyLink: "challenge.html" }
    ];

    // Function to update the hackathon table based on selection
    function updateHackathonTable() {
        const selectedValue = hackathonDropdown.value;
        const hackathonsToShow = selectedValue === "national" ? nationalHackathons : internationalHackathons;

        // Clear the current table
        hackathonTable.innerHTML = "";

        // Populate the table with the selected hackathons
        hackathonsToShow.forEach((hackathon) => {
            const row = hackathonTable.insertRow();
            const serialNumberCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const registrationDateCell = row.insertCell(2);
            const applyLinkCell = row.insertCell(3);

            serialNumberCell.textContent = hackathon.serialNumber;
            nameCell.textContent = hackathon.name;
            registrationDateCell.textContent = hackathon.registrationDate;
            applyLinkCell.innerHTML = `<a class="apply-link" href="${hackathon.applyLink}" target="_self">Apply Now</a>`;
        });
    }

    // Add an event listener to the dropdown to update the table when selection changes
    hackathonDropdown.addEventListener("change", updateHackathonTable);

    // Initial population of the table
    updateHackathonTable();

    // Function to open the challenge.html page when clicking "Apply Now" links
    function openChallengePage(applyLink) {
        window.open(applyLink, "_self"); // "_self" opens in the same window
    }

    // Add click event listeners to "Apply Now" links to open challenge.html
    hackathonTable.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("apply-link")) {
            const applyLink = target.getAttribute("href");
            openChallengePage(applyLink);
            event.preventDefault(); // Prevent default link behavior
        }
    });
});
