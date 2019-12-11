import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './components/banner.jsx';
import Home from './components/home.jsx';
import Blog from './components/blog.jsx';
import About from './components/about.jsx';
import Resources from './components/resources.jsx';
import Transit from './components/transit.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/transit" component={Transit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
