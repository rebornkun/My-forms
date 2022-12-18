import './Signin.css'
import { ColorModeContext, tokens } from "../../theme";
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GoogleBtn = ({text}) => {

    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)
    
    return (
        <Link className='text-link' to={name} >
            <div className='btn' style={{ 
                backgroundColor: theme.palette.neutral.dark}} >
                {/* google logo svg */}
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
                    <path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853"/>
                    <path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05"/>
                    <path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335"/>
                </svg>
                <p style={{color: colors.grey[100]}}>{text}</p>
            </div>
        </Link>
    );
}
const Btn = ({name, text}) => {

    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)
    
    return (
        <Link className='text-link' to={name} >
            <div className='btn' style={{ 
                backgroundColor: colors.greenAccent[600]}} >
                <p style={{color: colors.grey[100]}}>{text}</p>
            </div>
        </Link>
    );
}

const Signin = () => {
    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    const [passwordShow, setPasswordShow] = useState(false)
    const location = useLocation()
    const togglePasswordShow = () => {
        const passwordfield = document.querySelector('#signin_password');

        if(passwordfield.getAttribute('type') === 'password'){
            passwordfield.setAttribute('type', 'text');
            setPasswordShow(true)
        }else{
            passwordfield.setAttribute('type', 'password');
            setPasswordShow(false)
        }
    }

    useEffect(()=>{
        checkRouteForSwap()
    },[location])

    const checkRouteForSwap = () => {
        
        if(location.pathname === "/signin"){
            document.querySelector('.login_block').classList.add('active')
            document.querySelector('.register_block').classList.remove('active')
        }else if(location.pathname === "/signup"){
            document.querySelector('.login_block').classList.remove('active')
            document.querySelector('.register_block').classList.add('active')
        }

    }

    const handleSignInBtn = (values) => {
        console.log(values)
    }

    return (
        <div className='main_cover' style={{ backgroundColor: theme.palette.background.default }}>
            
            {/* login block */}
            <div className='outer_container login_block'  style={{ 
                backgroundColor: theme.palette.background.default, 
                boxShadow: `0px 0px 10px 1px ${colors.grey[800]}`}}>
                <div className='inner_container' style={{ 
                backgroundColor: theme.palette.background.default, 
                boxShadow: `0px 0px 10px 1px ${colors.grey[800]}`}}>

                    {/* login form */}

                    <div className='login_form form_container'>
                        <h2 className='header' style={{ color: theme.palette.secondary.main}}>My Forms</h2>
                        <GoogleBtn text={'Sign In with Google'} />
                        <div className="or">
                            <div style={{ backgroundColor: colors.grey[300]}}></div>
                            <p>or</p>
                            <div style={{ backgroundColor: colors.grey[300]}}></div>
                        </div>

                        <div className="inputs">
                            <div className="emailfield inputfield">
                                <label htmlFor="Email"
                                    style={{color: theme.palette.secondary.main}}>Email</label>
                                <input 
                                type='email'
                                id="Email"
                                name="Email"
                                placeholder="e.g abc@gmail.com"
                                autoComplete="email"
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                            </div>
                            <div className="passwordfield inputfield">
                                <label htmlFor="Password"
                                style={{color: theme.palette.secondary.main}}>Password</label>
                                <input 
                                id="signin_password"
                                name="Password"
                                type='password'
                                autocomplete="current-password"
                                autoCorrect={false}
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                                {
                                !passwordShow ? 
                                <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                :
                                <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.76057 14.3668C9.18557 13.7928 8.83557 13.0128 8.83557 12.1378C8.83557 10.3848 10.2476 8.9718 11.9996 8.9718C12.8666 8.9718 13.6646 9.3228 14.2296 9.8968" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.1047 12.6989C14.8727 13.9889 13.8567 15.0069 12.5677 15.2409" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.65451 17.4723C5.06751 16.2263 3.72351 14.4063 2.74951 12.1373C3.73351 9.85829 5.08651 8.02829 6.68351 6.77229C8.27051 5.51629 10.1015 4.83429 11.9995 4.83429C13.9085 4.83429 15.7385 5.52629 17.3355 6.79129" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.4475 8.99078C20.1355 9.90478 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.8868 4.24957L4.11279 20.0236" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                }

                            </div>
                            <div className="remeber_forget">
                            <div className="remeberme_check">
                                <input
                                type='checkbox'
                                />
                                <p>Remeber me for 30 days</p>
                            </div>
                            <p className="forgot_password">Forgot password?</p>
                            </div>
                        </div>
                        <Btn text='Sign In' />
                        <div className="form_field_lastpart">
                            <p>Don't have an account? <Link style={{color: theme.palette.secondary.main}} to='/signup'>Sign up for free</Link></p>
                        </div>
                    </div>


                </div>
            </div>
            
            {/* register block */}
            <div className='outer_container register_block'  style={{ 
                backgroundColor: theme.palette.background.default, 
                boxShadow: `0px 0px 10px 1px ${colors.grey[800]}`}}>
                <div className='inner_container' style={{ 
                backgroundColor: theme.palette.background.default, 
                boxShadow: `0px 0px 10px 1px ${colors.grey[800]}`}}>

                    {/* resgister form */}

                    <div className='resgister_form form_container'>
                        <h2 className='header' style={{ color: theme.palette.secondary.main}}>My Forms</h2>
                        <GoogleBtn text={'Sign Up with Google'}/>
                        <div className="or">
                            <div style={{ backgroundColor: colors.grey[300]}}></div>
                            <p>or</p>
                            <div style={{ backgroundColor: colors.grey[300]}}></div>
                        </div>

                        <div className="inputs">
                            <div className="email_field inputfield">
                                <label htmlFor="Email"
                                    style={{color: theme.palette.secondary.main}}>Email</label>
                                <input 
                                type='email'
                                id="Email"
                                name="Email"
                                placeholder="e.g abc@gmail.com"
                                autoComplete="email"
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                            </div>
                            <div className="confirm_email_field inputfield">
                                <label htmlFor="ConfirmEmail"
                                    style={{color: theme.palette.secondary.main}}>Confirm Email</label>
                                <input 
                                type='email'
                                id="ConfirmEmail"
                                name="ConfirmEmail"
                                placeholder="e.g abc@gmail.com"
                                autoComplete="email"
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                            </div>
                            <div className="passwordfield inputfield">
                                <label htmlFor="Password"
                                style={{color: theme.palette.secondary.main}}>Password</label>
                                <input 
                                id="signin_password"
                                name="Password"
                                type='password'
                                autocomplete="current-password"
                                autoCorrect={false}
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                                {
                                !passwordShow ? 
                                <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                :
                                <svg onClick={togglePasswordShow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.76057 14.3668C9.18557 13.7928 8.83557 13.0128 8.83557 12.1378C8.83557 10.3848 10.2476 8.9718 11.9996 8.9718C12.8666 8.9718 13.6646 9.3228 14.2296 9.8968" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.1047 12.6989C14.8727 13.9889 13.8567 15.0069 12.5677 15.2409" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.65451 17.4723C5.06751 16.2263 3.72351 14.4063 2.74951 12.1373C3.73351 9.85829 5.08651 8.02829 6.68351 6.77229C8.27051 5.51629 10.1015 4.83429 11.9995 4.83429C13.9085 4.83429 15.7385 5.52629 17.3355 6.79129" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.4475 8.99078C20.1355 9.90478 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.8868 4.24957L4.11279 20.0236" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                }

                            </div>
                            <div className="user_name inputfield">
                                <label htmlFor="UserName"
                                    style={{color: theme.palette.secondary.main}}>What should we call you?</label>
                                <input 
                                type='text'
                                id="UserName"
                                name="UserName"
                                placeholder="e.g dey_play4"
                                autoComplete={false}
                                autoCorrect={false}
                                style={{
                                    borderBottom: `1px solid ${colors.grey[300]}`
                                }}
                                />
                            </div>
                            <div className="d_o_b inputfield">
                                <label htmlFor="Dob" 
                                style={{color: theme.palette.secondary.main}}>What's your date of birth?</label>
                                <input 
                                type='date'
                                id="Dob"
                                name="Dob"
                                autoComplete={false}
                                style={{color: colors.redAccent[500]}}
                                />
                            </div>
                            <div className="gender inputfield">
                                <label style={{color: theme.palette.secondary.main}}>
                                    <input
                                    type="radio"
                                    value="Male"
                                    name="gender"
                                    className="gender_radio"
                                    // checked={this.state.selectedOption === "Male"}
                                    // onChange={this.onValueChange}
                                    />
                                    Male
                                </label>
                                <label style={{color: theme.palette.secondary.main}}>
                                    <input
                                    type="radio"
                                    value="Female"
                                    name="gender"
                                    className="gender_radio"
                                    // checked={this.state.selectedOption === "Female"}
                                    // onChange={this.onValueChange}
                                    />
                                    Female
                                </label>
                                <label style={{color: theme.palette.secondary.main}}>
                                    <input
                                    type="radio"
                                    value="Prefer Not to say"
                                    name="gender"
                                    className="gender_radio"
                                    // checked={this.state.selectedOption === "Prefer Not to say"}
                                    // onChange={this.onValueChange}
                                    />
                                    Prefer Not to say
                                </label>
                            </div>
                            <div className="terms_conditions">
                                <p style={{color: colors.redAccent[300]}}>By clicking on sign-up, you agree to the Musica <a>Terms and Conditions</a> and <a>Privacy Policy</a>.</p>
                            </div>
                        </div>
                        <Btn text='Sign Up' />
                        <div className="form_field_lastpart">
                            <p>Already have an account? <Link style={{color: theme.palette.secondary.main}} to='/signin'>Sign in now!</Link></p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Signin;