interface PlaceProps{
    placeDescription:string;
    location:string;
    content:string;
}

function PlaceEntry(props: PlaceProps): JSX.Element{
    return(
        <>
        <h2>{props.placeDescription}</h2>
        <h3>{props.location}</h3>
        <p>{props.content}</p>
        </>
    )
}

export default PlaceEntry;