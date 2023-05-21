import { useState } from 'react';
import './Popup.css'

import { useSelector, useDispatch } from 'react-redux'
import { addHundret, addFiveHundret, addThoustand } from './PopupSlice';


const Popup = () => {

    const [close, setClose] = useState(true)


    const [inpName, setInpName] = useState('')
    const popupcount = useSelector(state => state.Popupcount.value)
    const dispatch = useDispatch()


    const Close = () => {
        setClose(false)

    }
    const Pay = () => {
        alert('Thank you ' + inpName + " for " + popupcount)
    }

    return (
        <>
            {
                close && (
                    <div className='Popup'>
                        <div className="close" onClick={Close}>-</div>
                        <div className="Text">
                            <h3>Збір на ЗCY</h3>
                            <h4>Накопичено {popupcount}</h4>
                        </div>
                        <div className="Earn">
                            <p className='sum'  >{popupcount}</p>
                        </div>
                        <div className="Buttons">
                            <button onClick={() => dispatch(addHundret())}>100</button>
                            <button onClick={() => dispatch(addFiveHundret())} >500</button>
                            <button onClick={() => dispatch(addThoustand())}>1000</button>
                        </div>
                        <input type="text" placeholder="Enter your name" value={inpName} onChange={(e) => setInpName(e.target.value)} />

                        <button className='btn' onClick={Pay} >Pay</button>
                        <button className='btn'>Apple Pay</button>
                        <button className='btn'><span className='g'>G</span><span className='o'>o</span><span className='o2'>o</span><span className='g2'>g</span><span className='l'>l</span><span className='e'>e</span> Pay</button>
                    </div>

                )
            }

        </>


    )

}






export default Popup;