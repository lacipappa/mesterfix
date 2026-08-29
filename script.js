document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Automatikusan beállítja az aktuális évet a footerben (ha van benne évszám)
    const footerYear = document.querySelector(".footer p");
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} MesterFix – Vízvezeték-szerelés`;
    }

    // 2. Opcionális: Finomabb kattintás visszajelzés a szolgáltatás kártyákon
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            // Enyhe vizuális visszajelzés kattintásra
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "";
            }, 150);
        });
    });

    console.log("MesterFix script sikeresen betöltve!");
});
