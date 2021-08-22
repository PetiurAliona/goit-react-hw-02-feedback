import PropTypes from "prop-types"


const Statistics = ({ good, neutral, bad, total}) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    {/* <li >Positive feedback: {positivePercentage}%</li>     */}
  </ul>   
 
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;

// import StatsItem from '../StatsItem/StatsItem'
// const Statistics = ({ this.state }) => {
//    const statsArr = Object.keys(this.state);

//     return (
//         <ul>
//           {statsArr.map((e) => (
//           <StatsItem title={e[0]} value={e[1]} key={e[1]} />
//         ))}
//         </ul>
//     );
// }

// export default Statistics;