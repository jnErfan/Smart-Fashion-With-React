import React from 'react';

const Details = (props) => {
    const {detail}= props



const reFreash=()=>{
    window.location.reload()
}
    return (
        <div>
        
       <div id="details" className="shadow-lg pt-5 bg-white text-center p-3 rounded-3">
        <img width="100px" height="100px" src={detail.image} alt="" />
        <h4 className="text-warning">{detail.title}</h4>
        <h5><span className="text-info">Price: </span>${detail.price}</h5>
        <p> <small><span className="text-info fw-bold">Description:</span> <br/> {detail.description}</small> </p>
        <h6><span className="text-info">Rate Count:</span> ${detail.rating.count}</h6>
        <button onClick={reFreash} className="btn btn-danger px-3y-2">Clear</button>
      </div>
        </div>
    );
};

export default Details;