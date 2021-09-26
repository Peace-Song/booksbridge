import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ROUTES } from '@booksbridge/shared/routes'
import Home from '@booksbridge/component/Home'

const App: FC = () => {

  return (
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
