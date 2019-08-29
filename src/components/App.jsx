import React, { Component } from 'react'
import {
  Router,
  Route
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import routes from './routes';
import history from '../history';

export default class App extends Component {
  render() {
    return (
      <main>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <ScrollToTop>
            <div>
              {
                routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  );
                })
              }
            </div>
          </ScrollToTop>
        </Router>
      </main>
    )
  }
}
