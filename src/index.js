import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'

import './Styles.css'

// Attacher mon appli à l'élément root
// Chaque component est une balise orpheline
ReactDOM.render(<Routes/>, document.getElementById('root'))
