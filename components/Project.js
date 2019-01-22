import { withStyles } from '@material-ui/core/styles'
import { FaGitlab, FaAngleDoubleRight } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
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

const Project = ({ classes }) => (
    <div className={classes.outerDiv} id="projects">
        <Fade bottom>
            <div>
                <FaGitlab
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
                    Projects
                </a>
            </div>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    title="Foodie - Recommendation System"
                    subheader="Nov 2015 to May 2016"
                />
                <CardContent>
                    <Typography variant="h5" className={classes.body}>
                        Web based recommendation system for local restaurants
                        and eateries based on the user preference.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    title="Retail Price Analytic"
                    subheader="Jun 2016 to Feb 2017"
                />
                <CardContent>
                    <Typography variant="h5" className={classes.body}>
                        Developed a system to predict and analyze market price
                        of the product based on characteristics. It was built
                        with technologies such as back propagation neural
                        network algorithm and sentimental analysis.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    title="LogBot"
                    subheader="Jul 2017 to Oct 2017"
                />
                <CardContent>
                    <Typography variant="h5" className={classes.body}>
                        Worked on a Automated chat bot using Google Puppeteer,
                        which would fetch out user requested logs, once the
                        given auth credentials.
                    </Typography>
                </CardContent>
            </Card>
        </Fade>
    </div>
)

export default withStyles(styles)(Project)
