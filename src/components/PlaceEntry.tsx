interface PlaceProps{
    placeDescription:string;
    location:string;
    content:string;
    lastVisited:number[];
}

function PlaceEntry(props: PlaceProps): JSX.Element{
    return(
        <>
        <h2>{props.placeDescription}</h2>
        <h3>{props.location}</h3>
        <p>{props.content}</p>
        <small>{props.lastVisited}</small>
        </>
    )
}

export default PlaceEntry;