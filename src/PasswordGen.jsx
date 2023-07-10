import { useState } from "react";
import icon from "./assets/icons.png";
import "./PasswordGen.css";
import { ToastContainer,toast } from "react-toastify";

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersList ='0123456789'  
const symbolList = '!@#$%^&*()?'

function PasswordGen() {
  const [password, setPassword] = useState('')
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [userInput,setUserInput] = useState('')
  const [passwordLength,setPasswordLength] = useState(8)

  const generatePassword = ()=>{
    let charecterList = ''
    if(lowerCase){
      charecterList += lowerCaseLetters
    }
    if(upperCase){
      charecterList += upperCaseLetters
    }
    if(numbers){
      charecterList += numbersList
    }
    if(symbols){
      charecterList += symbolList
    }
 
    let tempPassword = '';
    const charecterListLength = charecterList.length
    for(let i =0;i<passwordLength;i++){
        const charecterIndex = Math.round(Math.random() * charecterListLength)
        tempPassword += charecterList.charAt(charecterIndex)
    }
    setPassword(tempPassword)
    
  }
  const copyPassword = async()=>{
       await navigator.clipboard.readText()
      
       if(password.length){
        navigator.clipboard.writeText(password)
       }
  }

  return (
    <>
       <div className='container md:w-1/2'>
                <h2 className='title text-2xl font-extrabold'>Password Generator</h2>
                <div className="password-wrapper">
                    <div className="password-area">
                        <div className="password">
                            <input type="text" value={password} disabled placeholder='Click on the Generate Password' />
                            <img src={icon} alt="copyicon" className='copyIcon'  />
                        </div>
                    </div>
                </div>
                <div className="setting">
                    <h3 className="font-bold">Customize your password</h3>
                    <div className="customize">
                        <div className="checkboxes">
                            <div className="left">
                                <div className="checkbox-field">
                                    <input type="checkbox" name="lower" id="lower" checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}   />
                                    <label htmlFor="lower">Include LowerCase(a-z)</label>
                                </div>
                                <div className="checkbox-field">
                                    <input type="checkbox" name="upper" id="upper" checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
                                    <label htmlFor="upper">Include UpperCase(A-Z)</label>
                                </div>
                            </div>
                            <div className="right">
                                <div className="checkbox-field">
                                    <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={()=>setNumbers(!numbers)} />
                                    <label htmlFor="numbers">Include Numbers(0-9)</label>
                                </div>
                                <div className="checkbox-field">
                                    <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={()=>setSymbols(!symbols)} />
                                    <label htmlFor="symbols">Include Symbols(&-#)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input">
                            <input type="text"  placeholder='User Input (Optional)' />
                        </div>
                <div className="mt-5 password-length ">
                    <h3 className="font-bold">Password Length :</h3>
                    <div className="slider">
                        <p className="rangeValue">{passwordLength}</p>
                        <div className="range">
                            <input type="range" min={8} max={40} defaultValue={passwordLength} onChange={(e)=>setPasswordLength(e.currentTarget.value)}  />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button type='button' onClick={copyPassword} >Copy Password</button>
                    <button type='button' onClick={generatePassword}>Generate Password</button>
                </div>
            </div>
    </>
  );
}

export default PasswordGen;
