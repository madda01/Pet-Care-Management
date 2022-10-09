import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

    render() {
        return (
            <footer class="footer-section">
                <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                    <div class="footer-content pt-1 pb-1">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-3"style={{marginTop:30}} >
                                <div class="footer-widget">
                                    <div class="footer-text">
                                        <p>
                                            Welcome to pet system. We're here to help you to
                                            find pet accessories, Veterinaries and boarding places for your pet.
                                            By offering a variety of services, the Pet Care Management System aids in taking care of your adorable pets. 🐶
                                        </p>
                                    </div>
                                </div>
                            </div >
                            <div class="col-xl-4 col-lg-4 mb-3" style={{ marginLeft: 300, marginTop:30}}>
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h5>Our Services</h5>
                                    </div>
                                    <ul>
                                        <li><a href="#">Pet Accessory</a></li>
                                        <li><a href="#">Pet Details</a></li>
                                        <li><a href="#">Veterinary Services</a></li>
                                        <li><a href="#">Pet Boardings</a></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                <div class="copyright-area">
                    <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>
                                        Copyright &copy; 2022 SPM | All Rights Reserved
                                        <a href="https://github.com/dinushka114/PetCareManagementSystem"> Pet Care</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >

        );
    }
}