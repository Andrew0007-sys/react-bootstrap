import React from 'react';
import './Footer.sass';
import logo1 from './logo1.svg';


function Footer() {
    return(
        <div className='Footer'>
            <div className='container justify-content-between'>    
                <div className='row otstup justify-content-between'>
                        <img className='item-left col-lg-2 col-md-3 col-sm-2' src={logo1} alt='itCluster-logo' /> 
                    <div className='item-left col-lg-3 col-md-6 col-sm-10'>
                        ICON1 ICON2 ICON3 
                    </div>
                </div>
                <div className='row  otstup justify-content-between'>            
                    <div className='item-left size-ft col-lg-4 col-md-6 col-sm-10'>
                        IT Cluster Academy<br />
                        Телефон: <span className='violet-text'>+38 (063) 674 12 19</span><br/>
                        Пошта: <span className='violet-text'>recruitacademyit@gmail.com</span><br/>
                    </div>
                    <div className='item-left size-ft col-lg-4 col-md-6 col-sm-10'>
                        IT Cluster Academy online<br />
                        Телефон: <span className='violet-text'>+38 (098) 655 45 29</span><br />
                        Пошта: <span className='violet-text'>itcaedu.online@gmail.com</span><br />

                    </div>
                </div>
            </div>
            <div className='container-fluid violet-back'>
                <p>© 2020 | Copyright | All rights reserved</p>
            </div>
        </div>
    )
}


export default Footer;