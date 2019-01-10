import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { FaGratipay } from 'react-icons/fa'

const styles = {
    root: {
        width: '100%',
        textAlign: 'center',
        color: '#212121',
        lineHeight: 1.1,
        fontSize: '2.35rem',
        fontFamily: 'gruppo',
        fontWeight: '700',
        paddingTop: '15px',
        borderTop: '1px solid rgba(0, 0, 0, 0.09)',
    },
}

const Footer = ({ classes }) => (
    <BottomNavigation className={classes.root}>
        <span> Made with </span>
        <FaGratipay
            size="3rem"
            style={{
                marginLeft: '10px',
                marginTop: '-3px',
                color: 'red'
            }}
        /> 
        <span style={{
            marginLeft: '5px'
        }}>  Copyright {'(c)'} 2019 Aravind K R.</span>
    </BottomNavigation>
)

export default withStyles(styles)(Footer)
