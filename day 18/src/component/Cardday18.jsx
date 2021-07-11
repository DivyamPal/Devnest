const Card=(props) =>{
    return (
        <div className="check" style={{backgroundColor: ( props.title === "black" ? 'black' : 'white' )}}></div>
    );
};


export default Card;