export default function Card(props){
    return (
        <div className="card">
            <img src = {props.item.imageUrl} alt = "card-img" className="card-img"/>
            <p className="card-location">{props.item.location}</p>
            <h1 className="card-title">{props.item.title}</h1>
            <h2 className="date">{props.item.startDate} - {props.item.endDate}</h2>
            <p className="card-description">{props.item.description}</p>
        </div>
    )
}