import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Budget from '../../public/images/budget7.jpg';
import '../styles/components/LoginPage.scss';

export const LoginPage = ({ startLogin }) => {
    return (
        <div className = "login-page">
            <div className="container" >
                <div className="landing-image">
                    <img  className="landing-page-image" src="https://www.mylsb.com/webres/Image/Budgeting%20Methods_Banner.png"/>
                </div>
                <div className="landing-desc">
                    <h2>gdfg</h2>
                        <button onClick={startLogin} >Login</button>
                </div>
            </div>
        </div>        
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);