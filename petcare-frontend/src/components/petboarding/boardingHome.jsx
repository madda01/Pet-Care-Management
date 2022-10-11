import React from "react";
// import {useNavigate} from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header';
import image from '../../images/home.jpg';

    const BoardingHome = () =>{

        // const navigate = useNavigate();

        // const adminChange = () =>{
        //     navigate('/pet-boarding');
        // }

        // const clientChange = () =>{
        //     navigate('/boarding');
        // }
        return (
            <>
                <Header/>
                <div className='row' style={{justifyContent: "center"}}>

                    <img src={image} alt='add' style={{width:'40%'}}></img>

                    {/* <div className='row' style={{justifyContent: "center"}}>
                        <div className='col-sm-3'>
                            <input type="submit" name='Admin View' value='Admin View' className='btn btn-success'
                                   onClick={adminChange}></input>
                        </div>
                        <div className='col-sm-2'>
                            <input type="submit" name='Client View' value='Client View' className='btn btn-danger'
                                   onClick={clientChange}></input>
                        </div>
                    </div> <br/> */}
                </div>

                <br/><br/><br/>
                <Footer/>
            </>
        );

    }

    export default BoardingHome;