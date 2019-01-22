import { withStyles } from '@material-ui/core/styles'
import { FaWordpress, FaAngleDoubleRight } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import red from '@material-ui/core/colors/red'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const styles = {
    outerDiv: {
        marginLeft: '30%',
        marginTop: '50px',
        width: '40%',
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
}

const Blog = ({ classes }) => (
    <div className={classes.outerDiv} id="blog">
        <Fade bottom>
            <div>
                <FaWordpress
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
                    Blog
                </a>
            </div>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    action={
                        <a href="https://krarvindblog.wordpress.com/2014/03/14/robot-basics/">
                            <IconButton>
                                <FaAngleDoubleRight />
                            </IconButton>
                        </a>
                    }
                    title="Robot Basics"
                    subheader="Mar 14, 2014"
                />
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    action={
                        <a href="https://krarvindblog.wordpress.com/2014/01/21/opportunity-rover/">
                            <IconButton>
                                <FaAngleDoubleRight />
                            </IconButton>
                        </a>
                    }
                    title="Opportunity Rover"
                    subheader="Jan 21, 2014"
                />
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    action={
                        <a href="https://krarvindblog.wordpress.com/2014/05/06/why-choose-engineering/">
                            <IconButton>
                                <FaAngleDoubleRight />
                            </IconButton>
                        </a>
                    }
                    title="Why choose Engineering?"
                    subheader="May 06, 2014"
                />
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.body,
                        subheader: classes.subheader,
                    }}
                    action={
                        <a href="https://krarvindblog.wordpress.com/2014/06/16/difference-between-div-and-span-tag/">
                            <IconButton>
                                <FaAngleDoubleRight />
                            </IconButton>
                        </a>
                    }
                    title="Difference between Div and Span Tag"
                    subheader="June 16, 2014"
                />
            </Card>
        </Fade>
    </div>
)

export default withStyles(styles)(Blog)
