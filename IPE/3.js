function f(props){
    function a(){
        alert("all set!!!!");
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}   </h3>
            <button onClick={a}>click me</button>
        </div>
    );
}
export default f;