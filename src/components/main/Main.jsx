import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';



const Main = () => {

 const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>ConvoMaster.AI</p>
            <img src={assets.user_icon} alt="" />
            
        </div>

      


        <div className="main-container">

        {
        !showResult ? <>
        <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How can I help you today ?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Suggest some beautiful places for upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this topic :The Urban planning </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of following code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div>
        </> 
        :
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />

 
                 {
                    loading ? <div className='loader'>
                     <hr />
                     <hr />
                     <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>

                 }
            </div>
        </div>
      }
            
           

            <div className="main-bottom">
                <div className="search-box">
                    <input 
                    type="text" 
                    placeholder='Enter a prompt here..'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <div className="bottom-info">
                    <p>ConvoMaster.AI may display inacurate info, so double check its responeses. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
