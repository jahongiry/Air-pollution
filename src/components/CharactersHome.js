import classes from './Characters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {actions} from '../redux/homeStore';

function CharactersHome(props) {
  const dispatch = useDispatch();

  const specificChar = () => {
  dispatch(actions.character(props));  
  }

  return <div className={classes.characterCard}>
    <Link onClick={specificChar} className={classes.link} to='/Details'> 
    <div>
    {props.image && <img className={classes.image} src={props.image} />}
    <h3 className={classes.title}>{props.name}</h3> 
    {props.actor && <span>Actor: {props.actor}</span>}
    </div>
    </Link>
  </div>
}

export default CharactersHome;