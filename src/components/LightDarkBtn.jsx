import './LightDarkBtn.css'
import { useContext } from 'react';
import { ColorModeContext, tokens } from "../theme";

const LightDarkBtn = () => {
    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    return (
        <div className="lightDarkbtn" style={{
            backgroundColor: theme.palette.background.default,
            boxShadow: `0px 0px 10px 1px ${colors.grey[800]}`}}
            onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ?  
                <i style={{color: 'white'}} class="fa fa-moon-o" aria-hidden="true"></i>
                : 
                <i class="fa fa-sun-o" aria-hidden="true"></i>}
        </div>
    );
}

export default LightDarkBtn;