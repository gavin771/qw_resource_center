import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Projects from '../Projects'
import Tasks from '../Tasks'
import Images from '../Images'
import LetterTemplates from '../LetterTemplates'
import Story from '../Story'
import Request from '../Request'
import Tutorial from '../Tutorial'
import NotFound from '../NotFound'
import './App.css'
import FixedMenu from '../FixedMenu'
import FixedFooter from '../FixedFooter'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <FixedMenu />

        <Container className='App-content' style={{ marginTop: '9em' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/images' component={Images} />
            <Route exact path='/letter-templates' component={LetterTemplates} />
            <Route exact path='/share-story' component={Story} />
            <Route exact path='/submit-request' component={Request} />
            <Route exact path='/tutorial' component={Tutorial} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <FixedFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
