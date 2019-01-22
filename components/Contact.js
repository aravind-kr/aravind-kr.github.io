import { withStyles } from '@material-ui/core/styles'
import {
    FaAddressBook,
    FaMapMarkedAlt,
    FaAt,
    FaTwitterSquare,
    FaLinkedin,
    FaGithub,
    FaPaperPlane,
    FaWordpress,
} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
    outerDiv: {
        marginLeft: '25%',
        marginTop: '50px',
        marginBottom: '50px',
        width: '50%',
        ['@media (max-width:780px)']: {
            width: '90%',
            marginLeft: '5%'
        },
    },
    highlight: {
        fontSize: 18,
        lineHeight: 1.1,
        fontSize: '2.35rem',
        fontFamily: 'gruppo',
        fontWeight: '700',
        color: '#783f8e',
        '&:hover': {
            color: '#783f8e',
        },
    },
    body: {
        color: '#212121',
        lineHeight: 1.1,
        margin: '0 0 1rem',
        fontSize: '2.35rem',
        fontFamily: 'gruppo',
        fontWeight: '700',
    },
    subheader: {
        color: '#212121',
        lineHeight: 1.1,
        margin: '0 0 1rem',
        fontSize: '1.75rem',
        fontFamily: 'gruppo',
    },
    card: {
        marginTop: '30px',
        maxWidth: '800px',
        fontSize: '2.35rem',
    },
}

const Contact = ({ classes }) => (
    <div className={classes.outerDiv} id="contact">
        <Fade bottom>
            <div>
                <FaAddressBook
                    size="3rem"
                    style={{
                        marginBottom: '-8px',
                    }}
                />
                <a
                    className={classes.highlight}
                    style={{
                        marginLeft: '10px',
                        marginTop: '-5px',
                    }}
                >
                    Contact
                </a>
            </div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.body}>
                        <FaMapMarkedAlt
                            style={{
                                marginBottom: '-5px',
                            }}
                        />{' '}
                        Pondicherry, India
                    </Typography>
                    <Typography variant="h5" className={classes.body}>
                        <FaAt
                            style={{
                                marginBottom: '-5px',
                            }}
                        />{' '}
                        kraravind1996
                        <span className={classes.highlight}>@</span>
                        gmail.com
                    </Typography>
                </CardContent>
                <CardActions>
                    <a
                        href="https://twitter.com/arvindsmvec"
                        style={{
                            marginRight: '10px',
                            marginLeft: '10px',
                        }}
                    >
                        <FaTwitterSquare size="3rem" />
                    </a>
                    <a
                        href="https://github.com/aravind-kr/"
                        style={{
                            marginRight: '10px',
                        }}
                    >
                        <FaGithub size="3rem" color="#333" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aravind-k-r-a1775baa/"
                        style={{
                            marginRight: '10px',
                        }}
                    >
                        <FaLinkedin size="3rem" />
                    </a>
                    <a  
                        href="#"
                        style={{
                            marginRight: '10px',
                        }}
                    >
                        <FaPaperPlane size="3rem" color="#333" />
                    </a>
                    <a
                        href="https://krarvindblog.wordpress.com/"
                        style={{
                            marginLeft: '10px',
                        }}
                    >
                        <FaWordpress size="3rem" />
                    </a>
                </CardActions>
            </Card>
        </Fade>
    </div>
)

export default withStyles(styles)(Contact)
