import React from 'react';

function DemoContactCard({title,text}) {

  return (
    <div className="demo-contact-card">
       <h1>{title}</h1>
       <p>{text}</p>
       <div className="demo-contact">Contact</div>
    </div>
  );
}

export default DemoContactCard;
