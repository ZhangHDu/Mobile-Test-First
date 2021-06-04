import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import routes,{RouteType} from './config/routes'


export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route:RouteType,index)=>{
          return <Route {...route} key={index} exact />
        })}
        <Redirect to="/phoneLogin" />
      </Switch>
    </Router>
  );
}

