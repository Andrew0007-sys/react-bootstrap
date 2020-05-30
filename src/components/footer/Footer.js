import React from 'react';
import './Footer.sass';
import logo1 from './logo1.svg';


function Footer() {
    return(
        <div className='Footer'>
            <div className='container justify-content-between'>    
                <div className='row'>
                    
                    <div className='col-lg-3 col-md-6 col-sm-10'>
                        <img className='item-right' src={logo1} alt='itCluster-logo' /> 
                    </div>
                    
                    <div className='item-right col-lg-3 col-md-6 col-sm-10'>
                        ICON1 ICON2 ICON3 
                    </div>
                </div>
                <div className='row'>
                    
                    <div className='item-right col-lg-3 col-md-6 col-sm-10'>
                        IT Cluster Academy<br />
                        Телефон: <span>+38 (063) 674 12 19</span><br/>
                        Пошта: <span>recruitacademyit@gmail.com</span><br/>
                    </div>
                    <div className='item-right col-lg-3 col-md-6 col-sm-10'>
                        <p>IT Cluster Academy online</p>
                        <p>Телефон: <span>+38 (098) 655 45 29</span></p>
                        <p>Пошта: <span>itcaedu.online@gmail.com</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;