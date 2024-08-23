function expandCard(card, contentId) {
    card.classList.add("hidden");
  
    const activeContent = document.querySelector(".expanded-content.active");
    if (activeContent) {
      activeContent.classList.remove("active");
  
      const prevCardId = activeContent
        .getAttribute("id")
        .replace("content", "");
      const prevCard = document.querySelector(
        `.interactive-card[onclick="expandCard(this, 'content${prevCardId}')"]`
      );
      if (prevCard) {
        prevCard.classList.remove("hidden");
      }
    }
  
    const newContent = document.getElementById(contentId);
    newContent.classList.add("active");
  
    const cardList = document.querySelector(".card-list");
    cardList.classList.add("vertical");
  }
  
  function collapseCard(contentId, contentElement) {
    const content = document.getElementById(contentId);
    content.classList.remove("active");
  
    const cardId = contentId.replace("content", "");
    const card = document.querySelector(
      `.interactive-card[onclick="expandCard(this, 'content${cardId}')"]`
    );
    if (card) {
      card.classList.remove("hidden");
    }
  
    const cardList = document.querySelector(".card-list");
    cardList.classList.remove("vertical");
  }
  