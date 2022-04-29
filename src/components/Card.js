export default function Card(props){
    return (
        <div className="card">
            <div className="card-div-img">
                <img src = {props.item.imageUrl} alt = "card-img" className="card-img"/>
            </div>
            <div className="card-div-text">
            <div className="card-map">
                 
                <p className="card-location">
                    {props.item.location}
                    <a href={props.item.googleMapsUrl}> view on google map</a>
                </p>
            </div>
                <h1 className="card-title">{props.item.title}</h1>
                <h2 className="date">{props.item.startDate} - {props.item.endDate}</h2>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}