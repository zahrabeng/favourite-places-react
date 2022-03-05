import PlaceEntry from "./PlaceEntry";

function ChosenPlaces(): JSX.Element{
    return(
        <section>
        <div>
            <img src = "images/tunisia.jpg" width={800} height={500} />
            <PlaceEntry
                placeDescription={"A Beautiful Sunny Beach"}
                location={"Tunisia"}
                content={"a really lovely place to calm down, enjoy a swim and have fun"}
            />
        </div>

        <div>
            <img src = "images/forest.png" width={800} height={500} />
            <PlaceEntry
                placeDescription={"Serene Forest"}
                location={"Delamere Forest"}
                content={"Be at one with nature in this serene forest"}
            />
        </div>

        <div>
            <img src = "images/paris.jpg" width={800} height={500} />
            <PlaceEntry
                placeDescription={"A stroll by the Eiffel Tower"}
                location={"Paris"}
                content={"Live your Parisian fantasy, such a magical place"}
            />
        </div>

        <div>
            <img src = "images/greenwich.jpg" width={800} height={500} />
            <PlaceEntry
                placeDescription={"Picnic at Greenwich park"}
                location={"London"}
                content={"My favourite place in the whole of London. Many cute doggos to watch."}
            />
        </div>

        </section>
    )
}

export default ChosenPlaces