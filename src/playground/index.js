
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'
import { useState } from 'react'

export default function PlayGround() {
    const [userName, setUserName] = useState('Mary')
    const [displayClassComp, setDisplayClassComp] = useState(false)
    const [displayFuncComp, setDisplayFuncComp] = useState(false)

    const handleUserNameChange = () => {
        setUserName('John')
    }


    console.log("Playground rendered")

    return (
        <>

            <h1>Playground</h1>
            <button onClick={handleUserNameChange}>Change user name</button>


            <hr />
            <h2>Counter Class</h2>
            <label>
                <input
                    type="checkbox"
                    checked={displayClassComp}
                    onChange={(e) => setDisplayClassComp(e.target.checked)} />
                Display Counter class
            </label>
            {displayClassComp &&
                <CounterClass userName={userName} />
            }
            <hr />
            <h2>Counter Function</h2>
            <label>
                <input type='checkbox'
                    checked={displayFuncComp}
                    onChange={(e) => setDisplayFuncComp(e.target.checked)}></input>
                Display function component
            </label>
            {displayFuncComp && (

                <CounterFunction userName={userName} />
            )}


        </>
    )
}