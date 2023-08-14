import React from 'react'

const Modal = ({el ,setshow} ) => {
  return (
    <div className='bigModal'>
    <div className='Modal'>
        <button onClick={()=>setshow(false)}>X</button>
        <div className='sth'>
            <img src={el.poster} alt="" />
            <div className='boom'>
                <h1>{el.name}</h1>
                <div className='boomm'>
                    <h2>{el.element}</h2>
                    <img src={el.elmage} alt="" />
                </div>
                <h3>{el.region}</h3>
            </div>
        </div>
        
     </div>

    </div>
  )
}

export default Modal
