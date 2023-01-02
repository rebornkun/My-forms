import './Home.css'
import { ColorModeContext, tokens } from '../../theme'
import { useContext } from 'react'

const Home = () => {
    const { theme, colorMode } = useContext(ColorModeContext)
    const colors = tokens(theme.palette.mode)

    return (
        <div className="home" style={{ backgroundColor: theme.palette.background.default }}>
            <h1 style={{color: colors.blueAccent[100]}}>Home</h1>
            <p style={{color: colors.greenAccent[300]}}>Welcome name</p>
        </div>
    );
}

export default Home;