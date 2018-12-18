import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

import logo from './assets/guerrilla-logo-dark.svg';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
let Navigation = ({ t, i18n }) => (
  <nav className="component main component-initialised nav-down" id="nav">
      <NavLink to="/" className="text-light">
        <img src={logo} alt="Guerrilla" className="logo" />
      </NavLink>
    
      <ul className="menu" id="menu-primary-menu">
        <li>
      <NavLink to="/about-us" className="p-2 text-dark">
        {t('Us')}
      </NavLink>
      </li><li>
      <NavLink to="/journal" className="p-2 text-dark">
        {t('Journal')}
      </NavLink>
      </li><li>
      <NavLink to="/connect" className="p-2 text-dark">
        {t('Connect')}
      </NavLink>
      </li>
      </ul>
    </nav>
);

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = translate()(Navigation);

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    <Navigation />

    {/* root placeholder for the app, which we add components to using route data */}
    <main>
      <section className="full overflow">
      <Placeholder name="jss-main" rendering={route} />
      </section>
    </main>
    <footer>
      <Placeholder name="jss-footer" rendering={route} />
    </footer>
  </React.Fragment>
);

export default Layout;
