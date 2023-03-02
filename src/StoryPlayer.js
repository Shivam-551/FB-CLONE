import ReactDOM  from 'react-dom';
import React from 'react';
import ReactPlayer from 'react-player';
import './StoryPlayer.css'
function BackDrop(){
    return <div className='storyPlayerBackground' />;
}

function OverLay({closeModal}){
    return(
        <div className="storyPlayercontainer">
            <button onClick={()=>closeModal(false)}>X</button>
            <ReactPlayer width='75vw' height='57vh' controls  url='https://www.youtube.com/watch?v=9boMnm5X9ak' />
        </div>
    )
}

function StoryPlayer({closeModal}) {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<OverLay closeModal={closeModal}/>,document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default StoryPlayer