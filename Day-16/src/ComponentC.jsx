
function ComponentC(props){
return(
    <>
    <div className="box">
    <h1>Component-C</h1>
    <h2>{`Bye ${props.user}`}</h2>
    </div>
    </>
);
}

export default ComponentC;