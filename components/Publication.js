import { withStyles } from '@material-ui/core/styles'
import { FaAngleDoubleRight, FaScroll } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const styles = {
    outerDiv: {
        marginLeft: '25%',
        marginTop: '50px',
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

const Publication = ({ classes }) => (
    <div className={classes.outerDiv} id="publication">
        <Fade bottom>
            <div>
                <FaScroll
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
                    Publication
                </a>
            </div>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    action={
                        <a href="https://ieeexplore.ieee.org/document/8085696">
                            <IconButton>
                                <FaAngleDoubleRight />
                            </IconButton>
                        </a>
                    }
                    title="Retail Price Analytic"
                    subheader="Mar 2017"
                />
                <CardContent>
                    <Typography variant="h5" className={classes.body}>
                        Presented a paper titled “Retail price analytics using
                        back propagation neural network and sentimental
                        analysis” in the fourth international conference on
                        signal processing, communication, and networking{' '}
                        {'( ICSCN )'} at MIT, Chennai
                    </Typography>
                </CardContent>
            </Card>
        </Fade>
    </div>
)

export default withStyles(styles)(Publication)
