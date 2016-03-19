var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var History = require('react-router').History;

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Footer />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Home } />
  </Route>
);

window.init = function () {
  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
};
