import React, { FC, useState } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react'

import Logo from '@booksbridge/assets/images/MainLogo.png'

import { SignInParam } from './const'
import styles from './SignInPage.module.scss'

type SignInPageProps = {
  onLogin: (user: SignInParam) => void
}

const SignInPage: FC<SignInPageProps> = ({ onLogin }) => {
  
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [autoLogin,] = useState<boolean>(false)

  const handleSubmit = () => {
    const user = { username, password, autoLogin }
    onLogin(user)
  }
  
  return (
    <div className={styles.loginPage}>
      <img className={styles.logo} src={Logo} />
      <Segment placeholder>
        <Grid colums={2} relaxed="very" stackable>
          <Grid.Column>
            <Form className={styles.loginForm} onSubmit={handleSubmit}>
              <Form.Input 
                icon="user"
                iconPosition="left"
                label="Username"
                id="username-input"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                id="password-input"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  )
}

export default SignInPage
