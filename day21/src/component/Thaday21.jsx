const Card = (props) => {
    return (
        <div className="card">
            <h1 className="title">{props.tittle}</h1>
            <p className="anime">Anime have {props.anime} episodes</p>
        </div>
        
    );
};

export default Card;