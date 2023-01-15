import { useState } from "react";

function NameCard(props) {

    const [count, setCount] = useState(0);

    return(
        <div className="name-card">
            <img src={props.image}
                className="name-card-image"
                alt="Person"></img>
            <p>{count} Likes</p>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setCount(count + 1)}>Like This Person</button>
        </div>
    );
}

export default NameCard;