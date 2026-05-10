/**
 * L'Envol Arts Aériens - Mindbody API Mock Service
 * Simulates data and interactions that will eventually be handled by the Mindbody API.
 */

const MindbodyMock = {
    // Current user data
    currentUser: {
        firstName: "Sophie",
        lastName: "Tremblay",
        email: "sophie.t@example.com",
        membership: "Membre Illimité",
        balance: 0.00,
        passes: [
            { id: 1, name: "Forfait 10 cours", remaining: 4, total: 10, expiry: "2024-12-31" },
            { id: 2, name: "Atelier Spécial", remaining: 1, total: 1, expiry: "2024-06-15" }
        ],
        upcomingClasses: [
            { id: 101, name: "Pole Fitness 1", date: "2024-05-13", time: "17:30", instructor: "Karine B." },
            { id: 102, name: "Souplesse Active", date: "2024-05-14", time: "18:00", instructor: "Jessica L." }
        ],
        pastClasses: [
            { id: 98, name: "Pole Fitness 1", date: "2024-05-06", time: "17:30", instructor: "Karine B." },
            { id: 95, name: "Tissus Aériens 1", date: "2024-05-01", time: "19:00", instructor: "David R." }
        ]
    },

    // Studio schedule data
    getSchedule: () => {
        return [
            {
                day: "Lundi",
                date: "12 Mai",
                classes: [
                    { id: 201, name: "Pole Fitness 1", time: "17:30", instructor: "Karine B.", level: "Pole Intro", slots: 3, totalSlots: 10, type: "Pole" },
                    { id: 202, name: "Cerceau Aérien 3", time: "19:00", instructor: "Marie-Eve S.", level: "Avancé", slots: 0, totalSlots: 8, type: "Cerceau" }
                ]
            },
            {
                day: "Mardi",
                date: "13 Mai",
                classes: [
                    { id: 203, name: "Souplesse active", time: "18:00", instructor: "Jessica L.", level: "Tous niveaux", slots: 8, totalSlots: 12, type: "Conditionnement" }
                ]
            },
            {
                day: "Mercredi",
                date: "14 Mai",
                classes: [
                    { id: 204, name: "Tissus Aériens 2", time: "17:00", instructor: "David R.", level: "Intermédiaire", slots: 1, totalSlots: 8, type: "Tissus" }
                ]
            },
            {
                day: "Jeudi",
                date: "15 Mai",
                classes: [
                    { id: 205, name: "Hamac Aérien", time: "19:30", instructor: "Karine B.", level: "Intro", slots: 5, totalSlots: 10, type: "Hamac" }
                ]
            },
            {
                day: "Vendredi",
                date: "16 Mai",
                classes: []
            },
            {
                day: "Samedi",
                date: "17 Mai",
                classes: [
                    { id: 206, name: "Chorégraphie Pole", time: "10:00", instructor: "Marie-Eve S.", level: "Atelier", slots: 10, totalSlots: 12, type: "Pole" }
                ]
            },
            {
                day: "Dimanche",
                date: "18 Mai",
                classes: []
            }
        ];
    },

    // Simulation of booking a class
    bookClass: (classId) => {
        return new Promise((resolve, reject) => {
            console.log(`Booking class ${classId}...`);
            setTimeout(() => {
                // Success simulation
                resolve({ success: true, message: "Réservation confirmée !" });
            }, 1000);
        });
    }
};

window.MindbodyMock = MindbodyMock;
