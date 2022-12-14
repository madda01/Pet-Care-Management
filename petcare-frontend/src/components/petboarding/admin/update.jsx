import React, { useState, useEffect } from 'react'
import './insert.css';
import image from '../../../images/update.jpg';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'
import validator from 'validator'

const UpdateBoardingPlaces = () =>{

    const { id } = useParams();
    const [boarding, setBoarding] = useState({
        boardingName: "",
        boardingImage: "",
        boardingemail: "",
        boardingaddress: "",
        boardingphone: "",
        openHoursStart: "",
        openHoursEnd: ""
    });

    const [boardingName,setboardingName] = useState("");
    const [boardingImage,setboardingImage] = useState("");
    const [boardingemail,setboardingemail] = useState("");
    const [boardingaddress, setboardingaddress] = useState("");
    const [boardingphone,setboardingphone] = useState("");
    const [openHoursStart,setopenHoursStart] = useState("");
    const [openHoursEnd,setopenHoursEnd] = useState("");
    const [selectedImage , setSelectedImage] = useState();

    const navigate = useNavigate();

    const handleImageSelect = (event)=>{
        setSelectedImage(event.target.files[0])
    }

    const getBoardingData = async(id) =>{
        await axios.get("http://localhost:3000/pet-boarding/get/"+id)
        .then(res=>{
            // setBoarding({
            //     boardingName: res.data.result.boardingName,
            //     boardingImage: res.data.result.boardingImage,
            //     boardingemail: res.data.result.boardingemail,
            //     boardingaddress: res.data.result.boardingaddress,
            //     boardingphone: res.data.result.boardingphone,
            //     openHoursStart: res.data.result.openHoursStart,
            //     openHoursEnd: res.data.result.openHoursEnd
            // })
            setboardingName(res.data.result.boardingName);
            setboardingImage(res.data.result.boardingImage);
            setboardingemail(res.data.result.boardingemail);
            setboardingaddress(res.data.result.boardingaddress);
            setboardingphone(res.data.result.boardingphone);
            setopenHoursStart(res.data.result.openHoursStart);
            setopenHoursEnd(res.data.result.openHoursEnd);
        })
    }

    useEffect(()=> {
        if(id){
            getBoardingData(id);
        }
    },[]);

    const updateBoarding = async(e) =>{
        e.preventDefault();

        // console.log()

        const formData = new FormData()
        formData.append("boardingName", boardingName)
        formData.append("boardingaddress", boardingaddress)
        formData.append("boardingImage", selectedImage)
        formData.append("boardingemail", boardingemail)
        formData.append("boardingphone", boardingphone)
        formData.append("openHoursStart", openHoursStart)
        formData.append("openHoursEnd", openHoursEnd)

            await axios.put("http://localhost:3000/pet-boarding/update/"+id,
            formData)
            .then(() => {
                Swal.fire("Boarding updated");
                navigate('/pet-boarding');
            }).catch((err)=>{
                alert(err);
                console.log(err);
            })    
        }

        const cancelBoarding = () =>{
            document.getElementById("boardingForm").reset();
        }
        const [emailError, setEmailError] = useState('')
    
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)');
        setboardingemail(email);
        } else {
        setEmailError('Enter valid Email :(')
        }
    }

    const [phoneError, setPhoneError] = useState('')
    
    const validatePhone = (e) => {
        var phone = e.target.value

        if( !(phone.match('[0][0-9]{9}')) ){
            setPhoneError('Enter valid Phone-No :(')
        }else{
        setPhoneError('Valid Phone-No :)');
        setboardingphone(phone);
       }
    }

        return (
            <div className="home" style={{float:'right',width: '95%', marginLeft: '10px'}}>
            <div className="homeContainer">
                <h1>Update Pet Boarding Place</h1>
                
                    <form className='border border-secondary rounded' id="boardingForm">
                
                        <div className='p-4'>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingname">Pet boarding place name</label>
                                    <input  name="boardingName" id="boardingName"  cols="10" rows="4" className='form-control'
                                    defaultValue={id ? boardingName : ""}
                                    type="text" required
                                    onChange={e=>setboardingName(e.target.value)}/>
                                </div>
                            </div>
                            
                            <img src={image} alt='update' style={{width:'45%',float:'right', borderRadius: '10px'}}></img>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="boardingimage">Pet boarding place image</label><br/>
                                        <img src={id ? boardingImage: null} style={{ width: '150px', height: '20%'}} alt='boarding'/> <br/><br/>
                                        <input type='file' name="boardingimage" id=""  cols="10" rows="4" className='form-control'
                                        onChange={handleImageSelect}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingemail">Pet boarding place email</label>
                                    <input  name="boardingemail" id="boardingemail"  cols="10" rows="4" className='form-control' 
                                    type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    defaultValue={id ? boardingemail : null}
                                    onChange={(e)=>{
                                        validateEmail(e);
                                    }}></input>
                                    <p style={{color: 'red'}}>{emailError}</p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingaddress">Pet boarding place city</label>
                                    <input  name="boardingaddress" id="boardingaddress"  cols="10" rows="4" className='form-control'
                                        type="text" required 
                                        defaultValue={id ? boardingaddress : null}
                                    onChange={(e)=>{
                                        setboardingaddress(e.target.value);
                                    }}></input>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="contactno">Pet boarding place phone no</label>
                                    <input type="text" name="boardingphone" id="boardingphone" cols="10" rows="4" className='form-control'
                                    pattern="[0][0-9]{9}" required 
                                    defaultValue={id ? boardingphone : null}
                                    onChange={(e)=>{
                                        validatePhone(e);
                                    }}/>
                                    <p style={{color: 'red'}}>{phoneError}</p>
                                </div>
                            </div>
                            <div className='row'>
                                    <div className='col-sm-2'>
                                        <div className="form-group">
                                            <label htmlFor="openHours">Open hours</label>
                                            <input type='time' name="openHoursStart" id="openHoursStart" cols="10" rows="4" className='form-control' placeholder='Start Time'
                                            defaultValue={id ? openHoursStart : null}
                                            onChange={(e)=>{
                                                setopenHoursStart(e.target.value);
                                            }} />
                                        </div>
                                    </div> 
                                    <div className='col-sm-2'>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1"></label>
                                            <input type='time' name="openHoursEnd" id="openHoursEnd" cols="10" rows="4" className='form-control' placeholder='End Time'
                                            defaultValue={id ? openHoursEnd : null}
                                            onChange={(e)=>{
                                                setopenHoursEnd(e.target.value);
                                            }} />
                                        </div>
                                    </div>              
                                    </div>  
                            <br/>
                            <div className='row'>
                                        <div className='col-sm-1'>
                                            <input type="submit" name='Save' value='Update' className='btn btn-success'
                                            onClick={updateBoarding}></input> 
                                        </div>
                                        <div className='col-sm-2'>
                                            <input type="submit" name='Save' value='Clear' className='btn btn-danger'
                                            onClick={cancelBoarding}></input>
                                        </div>
                                </div>
                        </div>
                    </form>
                    <br/>
            </div>
        </div>
        
        )
}

export default UpdateBoardingPlaces;