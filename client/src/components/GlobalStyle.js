import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --orange: #f1613d;
  --purple: #555eb8;
  --grey: #f3f3f3;
  --darkgrey: #87939F;
}

  * {
    box-sizing: border-box;

  } 
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    font-size: 112.5%
  }
  `
