'use strict';

var React = require('react');
var createClass = require('create-react-class');
var baron = require('baron');

var defaultBaronParams = {
  barOnCls: 'baron',
  direction: 'v'
};

var Baron = createClass({
  displayName: 'Baron',

  baronParams: {},

  componentDidMount: function() {
    this.baronParams = {
      root: this.clipper,
      scroller: this.scroller,
      track: this.track,
      bar: this.bar
    };

    for (var key in this.props.params) {
      // You cant pass dom nodes params, defined above as refs
      if (!this.baronParams[key]) {
        this.baronParams[key] = this.props.params[key]
      }
    }

    for (var key2 in defaultBaronParams) {
      if (!this.baronParams.hasOwnProperty(key2)) {
        this.baronParams[key2] = defaultBaronParams[key]
      }
    }

    this.baron = baron(this.baronParams);
  },

  componentDidUpdate: function() {
    this.baron.update();
  },

  componentWillUnmount: function() {
    this.baron.dispose();
  },

  render: function render() {
    var barCls = this.props.barCls;
    var trackCls = this.props.trackCls;
    var that = this

    if (this.props.params && this.props.params.direction === 'h') {
      barCls += ' ' + this.props.hModifier;
      trackCls += ' ' + this.props.hModifier;
    }

    return React.createElement(
      'div',
      {
        className: this.props.clipperCls,
        ref: function(r) {
          that.clipper = r;
        }
      },
      React.createElement(
        'div',
        {
          className: this.props.scrollerCls,
          ref: function(r) {
            that.scroller = r;
          },
          onScroll: this.props.onScroll
        },
        this.props.children
      ),
      React.createElement(
        'div',
        {
          className: trackCls,
          ref: function(r) {
            that.track = r;
          }
        },
        React.createElement('div', {
          className: barCls,
          ref: function(r) {
            that.bar = r;
          }
        })
      )
    );
  },

  // External API

  scrollToLast: function() {
    var scroll = this.baronParams.direction === 'v' ? 'scrollTop' : 'scrollLeft';
    var size = this.baronParams.direction === 'v' ? 'scrollHeight' : 'scrollWidth';

    this.scroller[scroll] = this.scroller[size];
  },

  getScroller: function() {
    return this.scroller;
  },

  getClipper: function() {
    return this.clipper;
  }
});

Baron.defaultProps = {
  clipperCls: 'clipper',
  scrollerCls: 'scroller',
  trackCls: 'track',
  barCls: 'bar',
  hModifier: '_h'
};

module.exports = Baron;
