import { useState } from "react";

function MyComponent(){
    const [foods , setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFoods(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value= "" ;
        setFoods([...foods,newFood]);
    }
    function handleRemoveFoods(index){
        setFoods(foods.filter((_,i) => i !==index));
    }
    return(
        <>
        <div className="main-div">
            <h2>List of Foods</h2>
            <p>Click on the List to remove the List Item</p>
            <ul>
                {foods.map((foods,index)=><li key={index} onClick={()=>handleRemoveFoods(index)}>{foods}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food name" />
            <button onClick={handleAddFoods}>Add Food</button>
        </div>
        </>
    );
}

export default MyComponent