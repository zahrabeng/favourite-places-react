import PlaceEntry from "./PlaceEntry";

function ChosenPlaces(): JSX.Element{
    return(
        <div>
            <PlaceEntry
                placeDescription={"A beautiful sunny beach"}
                location={"Tunisia"}
                content={"a really lovely place to calm down, relax and have fun"}
                lastVisited= {[12, 7, 200]}
            />
        </div>
    )
}

export default ChosenPlaces