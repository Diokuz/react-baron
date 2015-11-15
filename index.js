'use strict';

var React = require('react');
var baron = require('baron');

function getDOMNode(ref) {
    if (ref && ref.getDOMNode) {
        return ref.getDOMNode();
    }

    return ref;
};

var Baron = React.createClass({
    displayName: 'baron',

    componentDidMount: function() {
        var clipper = getDOMNode(this.refs.clipper);
        var scroller = getDOMNode(this.refs.scroller);
        var track = getDOMNode(this.refs.track);
        var bar = getDOMNode(this.refs.bar);
        var $ = this.props.$;

        if (!$) {
            $ = require('jquery') || window.jQuery;
        }

        this.baron = baron({
            $: $,
            root: clipper,
            scroller: scroller,
            barOnCls: 'baron',
            direction: 'v',
            track: track,
            bar: bar
        });
    },

    componentDidUpdate: function() {
        this.baron.update();
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: this.props.clipperCls, ref: 'clipper' },
            React.createElement(
                'div',
                { className: this.props.scrollerCls, ref: 'scroller' },
                this.props.children
            ),
            React.createElement(
                'div',
                { className: this.props.trackCls, ref: 'track' },
                React.createElement('div', { className: this.props.barCls, ref: 'bar' })
            )
        );
    }
});

Baron.propTypes = {
    clipperCls: React.PropTypes.string,
    scrollerCls: React.PropTypes.string,
    trackCls: React.PropTypes.string,
    barCls: React.PropTypes.string,
    barOnCls: React.PropTypes.string,
    $: React.PropTypes.object
};

Baron.defaultProps = {
    clipperCls: 'clipper',
    scrollerCls: 'scroller',
    trackCls: 'track',
    barCls: 'bar',
    barOnCls: 'baron'
};

module.exports = Baron;
