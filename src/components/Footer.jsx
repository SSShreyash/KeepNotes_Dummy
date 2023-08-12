import React from "react";

const date = new Date();
const year = date.getFullYear();

function footer(){
    return <footer className="footer">
            <p>Copyright {year}</p>
           </footer>
}

export default footer;