import { useState } from "react";
import ComponentB from "./ComponentB";
function ComponentA(){
    const [user , setUsers] = useState("SoyuzCode");
return(
    <>
    <div className="box">
    <h1>Component-A</h1>
    <h2>{`Hello ${user}`}</h2>
    <ComponentB user = {user}/>
    </div>
    </>
);
}

export default ComponentA;