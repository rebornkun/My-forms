import { useContext } from 'react';
import { ColorModeContext, tokens } from "../../theme";
import { Link } from 'react-router-dom';
import './Dashboard.css'

const NavBtn = ({name}) => {

    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)
    
    return (
        <Link className='text-link' to={name} >
            <div className='navbtn' style={{ 
                backgroundColor: theme.palette.neutral.main, 
                border: `4px solid ${theme.palette.neutral.dark}`}} >
                <p style={{color: colors.grey[100]}}>{name}</p>
            </div>
        </Link>
    );
}

const Dashboard = () => {

    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    return (
        <div className='dashboard' style={{ backgroundColor: theme.palette.background.default}}>
            <h1 className='header' style={{ color: theme.palette.secondary.main}}>My Forms</h1>
            <NavBtn name='signin' />
            <NavBtn name='newsletter' />
            <NavBtn name='signin' />
            <NavBtn name='signin' />
        </div>
    );
}

export default Dashboard;