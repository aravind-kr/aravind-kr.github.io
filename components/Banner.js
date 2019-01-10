import { withStyles } from '@material-ui/core/styles'
import {
    FaTwitterSquare,
    FaLinkedin,
    FaGithub,
    FaPaperPlane,
} from 'react-icons/fa'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
    outerDiv: {
        position: 'absolute',
        left: '30%',
        top: '35%',
        width: '40%',
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        color: '#212121',
        lineHeight: 1.1,
        margin: '0 0 1rem',
        fontSize: '3.5rem',
        fontFamily: 'gruppo',
        fontWeight: '1000',
    },
    exclam: {
        fontSize: 18,
        lineHeight: 1.1,
        fontSize: '3.5rem',
        fontFamily: 'gruppo',
        fontWeight: '1000',
        color: '#783f8e',
    },
    body: {
        color: '#212121',
        lineHeight: 1.1,
        margin: '0 0 1rem',
        fontSize: '2.35rem',
        fontFamily: 'gruppo',
        fontWeight: '700',
    },
    highlight: {
        fontSize: 18,
        lineHeight: 1.1,
        fontSize: '2.35rem',
        fontFamily: 'gruppo',
        fontWeight: '700',
        color: '#783f8e',
    },
    pos: {
        marginBottom: 12,
    },
}

const Banner = ({ classes }) => (
    <div className={classes.outerDiv}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    Hello
                    <span className={classes.exclam}>!</span>
                </Typography>
                <Typography variant="h5" className={classes.body}>
                    I am{' '}
                    <a
                        className={classes.highlight}
                        href="https://twitter.com/arvindsmvec"
                    >
                        Aravind
                    </a>
                    ,<br />I work as a Fullstack Developer at{' '}
                    <a
                        className={classes.highlight}
                        href="https://smartron.com/"
                    >
                        Smartron
                    </a>
                    . My Passion lies in Deep Learning and Natural Language
                    Processing.
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
            </CardActions>
        </Card>
    </div>
)

export default withStyles(styles)(Banner)
