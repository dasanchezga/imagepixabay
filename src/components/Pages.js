import React from "react";

const Pages = (props) =>{
    return(
        <div className="py-3">
            <button onClick={props.prevPage} type="button" className="btn btn-lg btn-danger mr-1"> Anterior &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-lg btn-danger "> Siguiente &rarr;</button>
        </div>
    )
}

export default Pages;