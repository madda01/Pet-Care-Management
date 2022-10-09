import React from "react";
import {useNavigate} from 'react-router-dom';
import Footer from './Footer.js';

    const BoardingHome = () =>{

        const navigate = useNavigate();

        const adminChange = () =>{
            navigate('/pet-boarding');
        }

        const clientChange = () =>{
            navigate('/boarding');
        }
        return (
            <>
                {/*<Header/>*/}
                <br/><br/><br/>
                <div className="square border border-primary" style={{width: "60%",marginLeft:"20%"}}>

                    <h1 style={{justifyContent: "center"}}>Pet Boarding Places Home</h1>

                    <div className='row' style={{justifyContent: "center"}}>
                        <div className='col-sm-3'>
                            <input type="submit" name='Admin View' value='Admin View' className='btn btn-success'
                                   onClick={adminChange}></input>
                        </div>
                        <div className='col-sm-2'>
                            <input type="submit" name='Client View' value='Client View' className='btn btn-danger'
                                   onClick={clientChange}></input>
                        </div>
                    </div> <br/>
                </div>

                <br/><br/><br/>
                <Footer/>
            </>
        );

    }

    export default BoardingHome;