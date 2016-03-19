var React = require('react');

var WatchButton = React.createClass ({
  handleClick: function (e) {
    e.preventDefault();
    $("#video-modal").removeClass("hidden");
  }

  render: function () {
    return (<button onClick={this.handleClick}>Watch</button>);
  }
});

module.exports = WatchButton;
