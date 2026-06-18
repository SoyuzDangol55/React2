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
    <div>
        <h2>List of Car Objects</h2>
        <ul>
        {cars.map((car,index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} /><br />
        <input type="text" value={carMake} onChange={handleMakeChange}/><br />
        <input type="text" value={carModel} onChange={handleModelChange}/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>
    </>
);
}
export default MyComponent