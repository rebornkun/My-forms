import './Newsletter.css'
import { ColorModeContext, tokens } from '../../theme'
import { useContext } from 'react'

const Newsletter = () => {
    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    return (
        <div className='main_cover' style={{ backgroundColor: theme.palette.background.default }}>
            <div className="emailfield inputfield">
                <label htmlFor="Email"
                    style={{color: theme.palette.secondary.main}}>Email</label>
                <input 
                type='email'
                id="Email"
                name="email"
                placeholder="e.g abc@gmail.com"
                autoComplete="email"
                // value={signInValues.email}
                // onChange={handleSigninChange}
                style={{
                    // borderBottom: errors.regEmail && touched.regEmail ? `1px solid ${colors.redAccent[600]}`: `1px solid ${colors.grey[300]}`
                }}
                />
                {/* {signInErrors.email && <p className='form_error_text'>{signInErrors.email}</p>} */}
            </div>
        </div>
    );
}

export default Newsletter;