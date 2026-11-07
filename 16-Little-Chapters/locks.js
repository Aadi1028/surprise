
// const chapters = [
//     { name: "Happiness", date: "2026-10-31", password: "elephant31" },
//     { name: "Sadness", date: "2026-11-01", password: "bluecloud01" },
//     { name: "Surprise", date: "2026-11-02", password: "squirrel02" },
//     { name: "Anger", date: "2026-11-03", password: "tiger03" },
//     { name: "Hope", date: "2026-11-04", password: "butterfly04" },
//     { name: "Fear", date: "2026-11-05", password: "deer05" },
//     { name: "Longing", date: "2026-11-06", password: "swan06" },
//     { name: "Frustration", date: "2026-11-07", password: "bear07" },
//     { name: "Appreciation", date: "2026-11-08", password: "peacock08" },
//     { name: "Vulnerability", date: "2026-11-09", password: "rabbit09" },
//     { name: "Peacefulness", date: "2026-11-10", password: "turtle10" },
//     { name: "Regret", date: "2026-11-11", password: "dog11" },
//     { name: "Gratitude", date: "2026-11-12", password: "dolphin12" },
//     { name: "Irritation", date: "2026-11-13", password: "bee13" },
//     { name: "Relief", date: "2026-11-14", password: "fish14" },
//     { name: "Curiosity", date: "2026-11-15", password: "fox15" }
// ];

// const STORAGE_KEY = "littleChaptersUnlocked";

// function getTodayIndia() {
//     const parts = new Intl.DateTimeFormat("en-CA", {
//         timeZone: "Asia/Kolkata",
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit"
//     }).formatToParts(new Date());

//     const values = {};
//     parts.forEach(part => values[part.type] = part.value);

//     return `${values.year}-${values.month}-${values.day}`;
// }

// function getUnlocked() {
//     try {
//         const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
//         return Array.isArray(saved) ? saved : [];
//     } catch {
//         return [];
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".emotion-card");

//     console.log("Password locks loaded. Cards detected:", cards.length);

//     cards.forEach(function (card, index) {
//         const chapter = chapters[index];
//         if (!chapter) return;

//         const destination = card.getAttribute("href");

//         card.addEventListener("click", function (event) {
//             event.preventDefault();

//             const unlocked = getUnlocked();

//             if (unlocked.includes(index)) {
//                 if (destination) window.location.href = destination;
//                 return;
//             }

//             if (getTodayIndia() < chapter.date) {
//                 alert(`${chapter.name} opens on ${chapter.date}.`);
//                 return;
//             }

//             const entered = prompt(`Enter the password for ${chapter.name}:`);

//             if (entered === null) return;

//             if (entered.trim() !== chapter.password) {
//                 alert("That password isn't correct. Try again.");
//                 return;
//             }

//             unlocked.push(index);
//             localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));

//             alert(`${chapter.name} unlocked!`);
//             if (destination) window.location.href = destination;
//         });
//     });
// });
