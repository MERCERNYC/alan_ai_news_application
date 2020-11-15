import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey ='ad4bb94e517f8bda76ffd2932516814d2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    useEffect (()=> {
        alanBtn({
            key: alanKey,
            onCommand: ({command}) => {
                if(command ==   'testCommand'){
                    alert('This code was executed')
                }
            }
        })
    }, [])
    
    return ( 
        <div>
            <h1>Alan Ai News Application</h1>
        </div>
    )
}

export default App;