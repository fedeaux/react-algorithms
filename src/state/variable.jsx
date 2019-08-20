import React from 'react';

export default function Variable(props) {
  return (
    <div className='state-variable'>
      <div className='state-variable-name'>
        { props.name }
      </div>
      <div className='state-variable-value'>
        { props.value }
      </div>
    </div>
  );
}
