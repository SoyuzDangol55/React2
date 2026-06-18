import { useState } from "react";

function MyComponent(){
    const [cars , setCars] = useState([]);
    const [carYear , setCarYear] = useState(new Date().getFullYear());
    const [carMake , setCarsMake] = useState("");
    const [carModel, setCarsModel] = useState("");

   function handleAddCar() {
    const newCar = {
        year: carYear,
        make: carMake,
        model: carModel
    };

    setCars(cars => [...cars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarsMake("");
    setCarsModel("");
}
    function handleRemoveCar(index){
        setCars(c => c.filter((element , i) => i !==index));
    }
    function handleYearChange(event){
      setCarYear(event.target.value);  
    }
    function handleMakeChange(event){
        setCarsMake(event.target.value);
    }
    function handleModelChange(event){
        setCarsModel(event.target.value);
    }
return(
    <>
    <div className="main-div">
        <h2>List of Car Objects</h2>
        <ul>
        {cars.map((car,index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Year of the car"/><br />
        <input type="text" value={carMake} onChange={handleMakeChange}placeholder="Enter Car Make"/><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model"/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>
    </>
);
}
export default MyComponent