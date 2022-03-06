import PlaceEntry from "./PlaceEntry";

function ChosenPlaces(): JSX.Element {
  return (
    <section>
      <div className="placeEntry">
        <img
          src="images/tunisia.jpg"
          className="image"
          alt="sunny beach in tunis"
        />
        <PlaceEntry
          placeDescription={"A Beautiful Sunny Beach"}
          location={"Tunisia"}
          content={
            "a really lovely place to calm down, enjoy a swim and have fun"
          }
        />
      </div>

      <div className="placeEntry">
        <img
          src="images/forest.png"
          className="image"
          alt="misty looking forest in Cheshire"
        />
        <PlaceEntry
          placeDescription={"Serene Forest"}
          location={"Delamere Forest"}
          content={"Be at one with nature in this serene forest"}
        />
      </div>

      <div className="placeEntry">
        <img
          src="images/paris.jpg"
          className="image"
          alt="Eiffel tower at sunset"
        />
        <PlaceEntry
          placeDescription={"A stroll by the Eiffel Tower"}
          location={"Paris"}
          content={"Live your Parisian fantasy, such a magical place"}
        />
      </div>

      <div className="placeEntry">
        <img
          src="images/greenwich.jpg"
          className="image"
          alt="greenwich park at night"
        />
        <PlaceEntry
          placeDescription={"Picnic at Greenwich park"}
          location={"London"}
          content={
            "My favourite place in the whole of London. Many cute doggos to watch."
          }
        />
      </div>
    </section>
  );
}

export default ChosenPlaces;
