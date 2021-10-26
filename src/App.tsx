import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ROUTES } from '@booksbridge/shared/routes'
import Home from '@booksbridge/components/Home'
import SignInPage from '@booksbridge/pages/SignInPage'

const App: FC = () => {

  return (
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path={ROUTES.SIGN_IN} exact component={SignInPage} />
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
