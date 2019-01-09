import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import Navigation from './Nav'
import globalTheme from '../static/theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'alexana';
    src: url('/static/Alexana.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'garamond-light';
    src: url('/static/GARA.TTF');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'garamond-bold';
    src: url('/static/GARABD.TTF');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    ${'' /* font-family: 'radnika_next'; */}
  }

  a {
    text-decoration: none;
  }

  button {  
    font-family: 'radnika_next'; 
  }
`

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={globalTheme}>
                <div>
                    <Meta />
                    <Navigation />
                    <GlobalStyle />
                    {this.props.children}
                </div>
            </ThemeProvider>
        )
    }
}

export default Page
