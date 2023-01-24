import Skimmer from "./Skimmer"

const Pump = (props) => {
  return ( 
    <>
      <h1>This is pump {props.pumpNum}</h1>
      <h2>Supplying</h2>
      <ul>
        {props.fuelTypes.map(fuel => (
          <li key={fuel}>{fuel}</li>
        ))}
      </ul>
      <div>
        <Skimmer />
      </div>
    </>
  )
}
export default Pump