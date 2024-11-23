// src/App.jsx

import {useState} from 'react';

import CharacterCard from './components/CharacterCard/CharacterCard';
import './App.css';


const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  );

  const handleTeam = (inTeam, name) => {

    const [setFrom, setTo, changeToMoney] = inTeam === 'Remove From Team' ? [setTeam, setZombieFighters, '+'] : [setZombieFighters, setTeam, "-"];

    setFrom((pastFrom) => {
      const fighterToMove = pastFrom.find((fighter) => fighter.name === name);
      if (!fighterToMove) return pastFrom;
      if ((changeToMoney === '-' && (money - fighterToMove.price) < 0)){
        console.log('Not enough money :(');
        return pastFrom;
      }

      if (changeToMoney === '+'){
        setMoney(() => money + fighterToMove.price)
        setStrength(() => strength - fighterToMove.strength)
        setAgility(() => agility - fighterToMove.agility)
      } else {
        setMoney(() => money - fighterToMove.price)
        setStrength(() => strength + fighterToMove.strength)
        setAgility(() => agility + fighterToMove.agility)
      }

      setTo((pastTo) => [...pastTo, fighterToMove]);

      return pastFrom.filter((fighter) => fighter.name !== name);
    })
  };

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: {money} </h3>
    <h3>Team Strength: {strength} </h3>
    <h3>Team Agility: {agility} </h3>
    <h3>Team</h3>
    {team.length === 0 ? <p>Pick some team members</p> : <section>{team.map((member, idx) => <CharacterCard key={idx} handleTeam={handleTeam} button={'Remove From Team'} {...member} />)}</section>}

    <h3>Fighters</h3>
    {zombieFighters.length === 0 ? <p>Pick some team members</p> : <section>{zombieFighters.map((member, idx) => <CharacterCard key={idx} handleTeam={handleTeam} button={'Add to Team'} {...member} />)}</section>}
    </>
  );
};

export default App;
