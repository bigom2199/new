import AdCard from "../AdCard";

function AdList({ advertisements }) {
    const handleButtonClick = (input) => {
      alert("Contact:" + input);
    };
    return (
      <div id="advertisements" className="row m-5">
        <div className="m-2">
          <h3>Advertisement List</h3>
        </div>
        {advertisements.map((advertisement) => (
          <AdCard
            key={advertisement.title}
            advertisement={advertisement}
            buttonClickHandler={handleButtonClick}
          />
        ))}
      </div>
    );
  }
  
  export default AdList;