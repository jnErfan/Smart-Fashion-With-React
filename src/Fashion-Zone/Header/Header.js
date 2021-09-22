import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="text-center font-chainge">
            <h1 className="mt-3">Welcome To <span style={{color:'#0DCAEF'}}>Smart Matching Fashion</span></h1>
             <input className="mt-5 w-75 py-2 input-field" type="text" /> 
            <button className="btn btn-primary py-2 mt-1 ms-2"><i className="fas fa-search"></i> Search</button>
            <hr className="mt-5" />

</div>
    );
};

export default Header;