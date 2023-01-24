import Pump from "./Pump"

const Station = (props) => {
  return ( 
    <>
    <h1>This is {props.brandName}.</h1>
    <div>
      <Pump pumpNum = '1' fuelTypes = {["diesel"]}/>
    </div>
    <div>
      <Pump pumpNum = '2' fuelTypes = {["diesel"]}/>
    </div>
    <div>
      <Pump pumpNum = '3' fuelTypes = {["87","89","91"]}/>
    </div>
    <div>
      <Pump pumpNum = '4' fuelTypes = {["87","89","91"]}/>
    </div>
    <div>
      <Pump pumpNum = '5' fuelTypes = {["87","89","91"]}/>
    </div>
    <div>
      <Pump pumpNum = '6' fuelTypes = {["87","89","91","94"]}/>
    </div>
    </>
  )
}

export default Station