import React , { useState } from 'react';
function MyComponent(){
    const[car , setCar] = useState({ year:2024 , make:"Ford" , model: "Mustang"});

    function handleYearChange(event){
        setCar({...car , year:event.target.value}); // ...car -> year:2024 , make:"Ford" , model:"Mustang" , year:2025
    }
    function handleMakeChange(event){
        setCar({...car , make:event.target.value});
    }
    function handleModelChange(event){
        setCar({...car , model:event.target.value});
    }
    return(

        <div className='main-div'>
            <p>Your Favorite Car is: {car.year} | {car.make} | {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>

        );
}
export default MyComponent;