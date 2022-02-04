import PropTypes from 'prop-types'
import s from './statistics.module.css'

export default function Statistics({title, stats}){
  return  <section  className={s.statistics}>
  {title && <h2 className={s.title}>{title}</h2>}
 {<ul   className={s.list}>
{stats.map(elem =>(
  <li key = {elem.id} style={{backgroundColor : getRandomHexColor() }} className={s.item}>
    <span className="label">{elem.label}</span>
    <span className="percentage">{elem.percentage}%</span>
  </li>
 ))}
  </ul>}
</section>
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistics.propTypes = {
  title : PropTypes.string,
  stats : PropTypes.array,
}