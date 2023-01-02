import './Contact.css'
import { ColorModeContext, tokens } from '../../theme'
import { useContext } from 'react'


const Contact = () => {

    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    return (
        <div className='main_cover' style={{ backgroundColor: theme.palette.background.default }}>

        </div>
    );
}

export default Contact;