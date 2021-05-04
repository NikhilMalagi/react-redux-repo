import React,{useState} from 'react';
import Styles from './PlayerSection.module.css';
import {AppConstants} from '../constants/Constants'

const PlayerSection = (props) => {
    const {players} = props;
    const [team,updateTeam] = useState([]);
    const [totalPoints,updatePoints] = useState(0);

    const checkSelctionCriteria = (plr) => {
        const isAlreaySelected = team.find(p => p.id === plr.id)
        if(isAlreaySelected) return false;

        let canBeAdded = true;
        if(totalPoints > AppConstants.MAX_TEAM_POINTS){
            canBeAdded = false
        }
        if(totalPoints + parseInt(plr.points) > AppConstants.MAX_TEAM_POINTS){
            canBeAdded = false
        }

        if(plr.role === "Batsman"){
            const bats = team.filter((p) => p.role === "Batsman");
            if(bats.length >= AppConstants.NO_BAT){
                canBeAdded = false
            }
        }
        if(plr.role === "Bowler"){
            const bowl = team.filter((p) => p.role === "Bowler");
            if(bowl.length >= AppConstants.NO_BOWL){
                canBeAdded = false
            }
        }
        if(plr.role === "All-Rounder"){
            const allR = team.filter((p) => p.role === "All-Rounder");
            if(allR.length >= AppConstants.NO_ALLR){
                canBeAdded = false
            }
        }
        return canBeAdded;
    }
    const handleDelete = (e) => {
        if(e){
        const idSelected = e.target.dataset.id;
        
        const plr = players && players.find((pl) => pl.id === idSelected);
        if(plr){
            const t = [...team];
            updateTeam(t.filter(p => p.id !== idSelected))
            updatePoints(prevS => prevS - parseInt(plr.points))
        }
        }
        
    }
    const handleSelection = (e) => {
        if(e){
        const idSelected = e.target.dataset.id;
        
        const plr = players && players.find((pl) => pl.id === idSelected);
        if(plr && checkSelctionCriteria(plr)){
            const t = [...team];
            t.push(plr)
            updateTeam(t)
            updatePoints(prevS => prevS + parseInt(plr.points))
        }else{
            alert("CANNOT SELECT")
        }
        }
        
    }

    const isSelected = (plr) => {
        const isAlreaySelected = team.find(p => p.id === plr.id)
        if(isAlreaySelected)return true;
        else return false;
    }

    return <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
    <h2>PlayerSelection</h2>
    {players && players.map((player) => {
        return (
            <div style={{display:"flex"}}>
        <div className={isSelected(player) ? Styles.selectedPlayerCard : Styles.playerCard} data-id={player.id} onClick={handleSelection}>
            <div className={Styles.playerData} data-id={player.id} onClick={handleSelection}>Name : {player.name}</div>
            <div className={Styles.playerData} data-id={player.id} onClick={handleSelection}>Role : {player.role}</div>
            <div className={Styles.playerData} data-id={player.id} onClick={handleSelection}>Points : {player.points}</div>
            
        </div>
        {isSelected(player) && <div className={Styles.delete} data-id={player.id} onClick={handleDelete}>Unselect</div>}
        </div>)

    })}
    </div>
    <div>
    <h2>Team</h2>
    <h3>TotalPoints : {totalPoints}</h3>
    <div className={Styles.teamCard}>
    {team && team.map((player) => {
        return (
        <div className={Styles.teamEntry}>
            <div className={Styles.playerData} >Name : {player.name}</div>
            <div className={Styles.playerData}>Role : {player.role}</div>
            <div className={Styles.playerData}>Points : {player.points}</div>
        </div>)
     })}
     </div>
    </div>
    </div>
}

export default PlayerSection;
