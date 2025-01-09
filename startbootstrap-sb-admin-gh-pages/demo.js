// Initialisation de la date et de l'heure sélectionnée
let selectedDate = '';
let selectedTime = '';

// Fonction pour générer le calendrier du mois
function generateCalendar() {
    const calendarElement = document.getElementById("calendar");
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Calcul du premier jour du mois
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    
    const totalDaysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay(); // Jour de la semaine pour le premier jour du mois
    
    // Remplir les jours du mois
    let dayCounter = 1;
    calendarElement.innerHTML = ''; // Réinitialiser le calendrier

    // Créer les cases vides pour les jours avant le 1er du mois
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        calendarElement.appendChild(emptyDay);
    }

    // Ajouter les jours du mois
    for (let i = 0; i < totalDaysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = dayCounter;
        dayElement.addEventListener("click", () => selectDate(dayCounter));
        calendarElement.appendChild(dayElement);
        dayCounter++;
    }
}

// Fonction pour sélectionner une date
function selectDate(day) {
    const selectedDay = document.querySelector(".selected");
    if (selectedDay) {
        selectedDay.classList.remove("selected");
    }

    selectedDate = `${day < 10 ? '0' : ''}${day}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    document.getElementById('event-date').value = selectedDate;
    
    const newSelectedDay = document.querySelector(`#calendar .day:nth-child(${day + 6})`);
    newSelectedDay.classList.add("selected");
}

// Gestion de la soumission du formulaire
document.getElementById("event-form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
        alert("Veuillez sélectionner une date et une heure.");
        return;
    }

    const eventDescription = document.getElementById("event-description").value;
    const eventItem = document.createElement("div");
    eventItem.classList.add("event-item");
    eventItem.innerHTML = `<strong>${selectedDate} à ${selectedTime}</strong><p>${eventDescription}</p>`;

    document.getElementById("event-list").appendChild(eventItem);

    // Réinitialiser le formulaire
    document.getElementById("event-form").reset();
    selectedDate = '';
    selectedTime = '';
    document.getElementById('event-date').value = '';
});

// Générer le calendrier au chargement de la page
window.onload = generateCalendar;


