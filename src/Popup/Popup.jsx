import { useState } from 'react';
import './Popup.css'


const Popup = () => {

    const [close, setClose] = useState(true)
    const [sum, setSum] = useState(0)
    const [inputVal, setInputVal] = useState('')

    const Close = () => {
        setClose(false)

    }
    const addHundret = () => {
        setSum(sum + 100)
        setInputVal(inputVal + 100)
    }
    const addFive = () => {
        setSum(sum + 500)
        setInputVal(inputVal + 500)
    }
    const addThousand = () => {
        setSum(sum + 1000)
        setInputVal(inputVal + 1000)
    }
    const ThankYou = () => {
        alert('Thank you for ' + sum)
    }
    const Inp = (e) => {
        setInputVal(e.target.value)
    }
    return (
        <>
            {
                close && (
                    <div className='Popup'>
                        <div className="close" onClick={Close}>-</div>
                        <div className="Text">
                            <h3>Збір на ЗCY</h3>
                            <h4>Накопичено {sum}</h4>
                        </div>
                        <div className="Earn">
                            <input type="text" className='sum' value={inputVal} onChange={Inp} />
                        </div>
                        <div className="Buttons">
                            <button onClick={addHundret}>100</button>
                            <button onClick={addFive} >500</button>
                            <button onClick={addThousand}>1000</button>
                        </div>
                        <input type="text" name="" id="" placeholder='name' />
                        <button className='btn' onClick={ThankYou}>Pay</button>
                        <button className='btn'>Apple Pay</button>
                        <button className='btn'><span className='g'>G</span><span className='o'>o</span><span className='o2'>o</span><span className='g2'>g</span><span className='l'>l</span><span className='e'>e</span> Pay</button>
                    </div>

                )
            }

        </>


    )

}






export default Popup;