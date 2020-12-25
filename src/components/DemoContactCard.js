import React from 'react';

function DemoContactCard({title,text,key}) {

  return (
    <div className="demo-contact-card" id={(title[0] === "C" && "faded") || (title[0] === "N" && "top")}>
       <h1>{title}</h1>
       <p>{text}</p>
       <p>{key}</p>
       <div className="demo-contact">Contact</div>
    </div>
  );
}

export default DemoContactCard;
