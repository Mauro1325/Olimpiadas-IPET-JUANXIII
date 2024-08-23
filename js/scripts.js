function expandCard(card, contentId) {
    const currentActiveContent = document.querySelector(".expanded-content.active");
    const newContent = document.getElementById(contentId);
    const referenceVideos = document.querySelector('.reference-videos');
    const cardList = document.querySelector(".card-list");

    if (currentActiveContent && currentActiveContent.id === contentId) {
        // Si la tarjeta que se clickeó es la misma que la activa, ciérrala
        collapseCard(contentId, currentActiveContent);
        return;
    }

    // Si hay una tarjeta activa, ciérrala
    if (currentActiveContent) {
        currentActiveContent.classList.remove("active");
        const prevCardId = currentActiveContent.getAttribute("id").replace("content", "");
        const prevCard = document.querySelector(
            `.interactive-card[onclick="expandCard(this, 'content${prevCardId}')"]`
        );
        if (prevCard) {
            prevCard.classList.remove("hidden");
        }
    }

    // Activa la nueva tarjeta
    newContent.classList.add("active");
    card.classList.add("hidden");

    // Asegúrate de que la lista de tarjetas se acomode verticalmente
    cardList.classList.add("vertical");

    // Ajusta el margen del contenedor de videos
    const contentHeight = newContent.scrollHeight; // Obtiene la altura del contenido expandido
    referenceVideos.style.marginTop = `${contentHeight + 40}px`; // Ajusta el margen superior del contenedor de videos
}

function collapseCard(contentId, contentElement) {
    const content = document.getElementById(contentId);
    const cardList = document.querySelector(".card-list");
    const referenceVideos = document.querySelector('.reference-videos');

    content.classList.remove("active");

    const cardId = contentId.replace("content", "");
    const card = document.querySelector(
        `.interactive-card[onclick="expandCard(this, 'content${cardId}')"]`
    );
    if (card) {
        card.classList.remove("hidden");
    }

    // Restaura la disposición horizontal de las tarjetas
    cardList.classList.remove("vertical");

    // Restablece el margen del contenedor de videos
    referenceVideos.style.marginTop = '40px'; // Valor original o ajustado
}
