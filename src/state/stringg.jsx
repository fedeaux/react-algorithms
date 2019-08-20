import React from 'react';

export default function Stringg(props) {
  return (
    <div className='state-string'>
      <div className='state-string-name'>
        {props.name}
      </div>
      <div className='state-string-chars'>
        {props.value.split('').map((c) => <div className='state-string-char'> {c} </div> )}
      </div>
    </div>
  );
}
