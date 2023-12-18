import{createElementHelper, react} from"./model.js";


const  render = ({target,title,image,contact,description}) => {
    const mainDiv = createElementHelper('div','',['col','mb-4']);
    const cardDiv = createElementHelper('div','',['card']);

    mainDiv.apprndChild(cardDiv);
    const img= createElementHelper('img');
    img.src=image;

    img.alt=title;
    cardDiv.appendChild(img);

    const cardBodyDiv= createElementHelper('div','',['card-body']);

    const cardTitle= createElementHelper('h5',title,['card-title','fw-bold']);
    cardBodyDiv.appendChild(cardTitle);

    const cardText = createElementHelper('p',description,['card-text']);
    cardBodyDiv.appendChild(cardText);
    
    const cardButton = createElementHelper('button', 'Details', ['btn', 'btn-info', 'shadow', 'w-100']);
          const contactDetails = createElementHelper  ('p','contact:*** ',['card-trxt']);       
        

    contactDetails.addEventListener('click', (e) => {
        if (e.target.innerText.includes('')) {
            e.target.innerText = `Contact: ${contact}`;
        } else {
            e.target.innerText = 'contact: ';
        }
    });


    cardBodyDiv.appendChild(contactDetails);
    
    cardButton.addEventListener('click', () => alert('Contact: ' + contact));
    cardBodyDiv.appendChild(cardButton);

    cardDiv.appendChild(cardBodyDiv);
    target.appendChild(mainDiv)
}
export default Card;