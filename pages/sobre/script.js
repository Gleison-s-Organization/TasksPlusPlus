const showCard = () => {
    const cards = document.querySelectorAll(".card")
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1
        }, index * 800);
    })
}