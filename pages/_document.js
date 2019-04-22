import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import PropTypes from 'prop-types'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
    // static getInitialProps({ renderPage }) {
    //     const sheet = new ServerStyleSheet();
    //     const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    //     const styleTags = sheet.getStyleElement();
    //     return { ...page, styleTags };
    // }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = ctx => {
    // Render app and page and get the context of the page with collected side effects.
    let pageContext
    const page = ctx.renderPage(Component => {
        const WrappedComponent = props => {
            pageContext = props.pageContext
            return <Component {...props} />
        }

        WrappedComponent.propTypes = {
            pageContext: PropTypes.object.isRequired,
        }

        return WrappedComponent
    })

    let css
    // It might be undefined, e.g. after an error.
    if (pageContext) {
        css = pageContext.sheetsRegistry.toString()
    }

    return {
        ...page,
        pageContext,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                <style
                    id="jss-server-side"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: css }}
                />
                {flush() || null}
            </React.Fragment>
        ),
    }
}

export default MyDocument