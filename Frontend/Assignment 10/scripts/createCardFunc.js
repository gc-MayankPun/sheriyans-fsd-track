let container = document.querySelector(".container");

const createCard = (username, occupation, bio, pfp) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${pfp}" alt="${username | occupation} pfp" />
    <div id="card-bottom">
        <p>${username}</p>
        <p>${occupation}</p>
        <p>${bio}</p>
    </div>
  `;

  container.append(card);
};

export default createCard;
