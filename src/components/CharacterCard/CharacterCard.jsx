
import './CharacterCard.css';

const CharacterCard = (props) => {
    const {name, price, strength, agility, img, button, handleTeam} = props;
    
    return(
        <div className='character-card'>
            <img src={img}/>
            <h4> {name} </h4>
            <h4>Price: {price} </h4>
            <h4>Strength: {strength} </h4>
            <h4>Agility: {agility} </h4>
            <button onClick={() => handleTeam(button, name)}>{button}</button>
        </div>
    )
}

export default CharacterCard;