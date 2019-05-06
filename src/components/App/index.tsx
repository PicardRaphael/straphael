/*
 * Package Import
 */
import React, { FunctionComponent,  } from 'react'
import { Switch, Route } from 'react-router-dom';

/*
 * Local Import
 */
import Layout from 'components/Layout';
import {defaultRoutes} from 'configs/route'


/*
 * Styles
 */

const App: FunctionComponent = () => {
  const routesDefault = defaultRoutes()
  return (
    <Layout>
      <Switch>
        {
          routesDefault.map(({ exact, path, component: Component }) => (
            <Route key={path} exact={exact} path={path} component={Component} />
        ))}
      </Switch>
    </Layout>
  )
}

export default App