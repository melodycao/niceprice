import './App.css';
import React, { useState } from 'react';
import Webcam from "react-webcam";

function App() {
    const [image, setImage] = useState( null );

    const videoConstraints = {
        width: 1920,
        height: 1080,
        facingMode: "user"
    };
    const webcamRef = React.useRef( null );

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot( { width: 1920, height: 1080 } );
            ;
            setImage( imageSrc );
        },
        [webcamRef]
    );

    return (
        <div className="App">
            <div
                className="hello">
                hello i'm very  cool
            </div>
            <Webcam
                audio={ false }
                ref={ webcamRef }
                width={ 1280 }
                height={ 720 }
                videoConstraints={ videoConstraints }
            />
            <div>
                <button
                    onClick={ capture }
                    style={ {
                        backgroundColor: 'pink',
                        fontSize: '50px'
                    } }
                >Capture
                </button>
                { image !== null ? (
                    <img
                        style={ {
                            float: 'left'
                        } }
                        src={ image } alt="capture"/>
                ) : null }
            </div>
        </div>
    );
}

export default App;