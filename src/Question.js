import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [show,hide]=useState(false);
  return (
    <article className='question '>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => hide(!show)}>
          {show  ? <AiOutlineMinus />  : <AiOutlinePlus />}
          {/* {show ? {info}: {}} */}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
