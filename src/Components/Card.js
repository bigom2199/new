import{react} from"./domutils.js";


const render = ({ target, title, description, image, contact }) => {
    const mainDiv = createElementHelper("div", "", ["col", "mb-4"]);
    const cardDiv = createElementHelper("div", "", ["card"]);
    mainDiv.appendChild(cardDiv);
    const img = createElementHelper("img");
    img.src = image;
    img.alt = title;
    cardDiv.appendChild(img);

    const cardBodyDiv = createElementHelper("div", "", ["card-body"]);
    const cardTitle = createElementHelper("h5", title, ["card-title", "fw-bold"]);
    cardBodyDiv.appendChild(cardTitle);
    const cardText = createElementHelper("p", description, ["card-text"]);
    cardBodyDiv.appendChild(cardText);
    const cardButton = createElementHelper("button", "Details", ["btn", "btn-info", "shadow", "w-100"]);
    const contactDetails = createElementHelper("p", "Contact: ***", ["card-text"]);
    contactDetails.addEventListener('click', (e) => {
        if (e.target.innerText.includes("***")) {
            e.target.innerText = `Contact: ${contact}`;
        } else {
            e.target.innerText = "Contact: ***";
        }
    });
    cardBodyDiv.appendChild(contactDetails);

    cardButton.addEventListener('click', () => alert("Contact: " + contact));
    cardBodyDiv.appendChild(cardButton);

    cardDiv.appendChild(cardBodyDiv);
    target.appendChild(mainDiv)
}
export default Card;