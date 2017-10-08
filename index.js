'use strict';

var React = require('react');
var createClass = require('create-react-class');
var PropTypes = require('prop-types');
var baron = require('baron');

function getDOMNode(ref) {
    if (React.version < '0.14.0' && ref && ref.getDOMNode) {
        return ref.getDOMNode();
    }

    return ref;
};

function on(eventNames, handler) {
    eventNames = eventNames.split(' ');

    eventNames.forEach(function(eventName) {
        this[0].addEventListener(eventName, handler);
    }, this);
}

function off(eventNames, handler) {
    eventNames = eventNames.split(' ');

    eventNames.forEach(function(eventName) {
        this[0].removeEventListener(eventName, handler);
    }, this);
}

function addClass(cls) {
    this[0].classList.add(cls);
}

function removeClass(cls) {
    this[0].classList.remove(cls);
}

function hasClass(cls) {
    return this[0].classList.contains(cls);
}

function css(key, value) {
    var obj = key;

    if (typeof key == 'string') {
        if (value) {
            this[0].style[key] = value;
        }

        return this[0].style[key];
    } else {
        for (var lkey in obj) {
            this[0].style[lkey] = obj[lkey];
        }
    }

}

var jQueryLike = function(selector, context) {
    var element;
    var rootElement = document;

    if (context && context.querySelectorAll) {
        rootElement = context;
    }

    if (typeof selector == 'string') {
        element = rootElement.querySelectorAll(selector);
    } else {
        if (selector[0]) {
            // If it already wrapped, dont wrap again
            element = selector;
            return element;
        } else {
            // But if it HTMLElement, wrap it
        }

        element = selector;
    }

    return {
        '0': element,
        length: 1,
        on: on,
        off: off,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        css: css
    };
};

var Baron = createClass({
    displayName: 'baron',

    componentDidMount: function() {
        var clipper = getDOMNode(this.refs.clipper);
        var scroller = getDOMNode(this.refs.scroller);
        var track = getDOMNode(this.refs.track);
        var bar = getDOMNode(this.refs.bar);

        this.baron = baron({
            $: this.props.$ || window.jQuery,
            root: clipper,
            scroller: scroller,
            barOnCls: this.props.barOnCls,
            direction: this.props.direction,
            track: track,
            bar: bar,
            impact: this.props.impact,
            cssGuru: this.props.cssGuru
        });
    },

    componentDidUpdate: function() {
        this.baron.update();
    },

    scrollToLast: function() {
        var scroll = this.props.direction === 'v' ? 'scrollTop' : 'scrollLeft';
        var size = this.props.direction === 'v' ? 'scrollHeight' : 'scrollWidth';
        var node = getDOMNode(this.refs.scroller);

        node[scroll] = node[size];
    },

    getScroller: function() {
        return getDOMNode(this.refs.scroller);
    },

    getClipper: function() {
        return getDOMNode(this.refs.clipper);
    },

    componentWillUnmount: function() {
        this.baron.dispose();
    },

    render: function render() {
        var barCls = this.props.barCls;
        var trackCls = this.props.trackCls;

        if (this.props.direction === 'h') {
            barCls += ' ' + this.props.hModifier;
            trackCls += ' ' + this.props.hModifier;
        }

        return React.createElement(
            'div',
            { className: this.props.clipperCls, ref: 'clipper' },
            React.createElement(
                'div',
                {
                    className: this.props.scrollerCls,
                    ref: 'scroller',
                    onScroll: this.props.onScroll
                },
                this.props.children
            ),
            React.createElement(
                'div',
                { className: trackCls, ref: 'track' },
                React.createElement('div', { className: barCls, ref: 'bar' })
            )
        );
    }
});

Baron.propTypes = {
    clipperCls: PropTypes.string,
    scrollerCls: PropTypes.string,
    trackCls: PropTypes.string,
    barCls: PropTypes.string,
    barOnCls: PropTypes.string,
    onScroll: PropTypes.func,
    $: PropTypes.func
};

Baron.defaultProps = {
    clipperCls: 'clipper',
    scrollerCls: 'scroller',
    trackCls: 'track',
    barCls: 'bar',
    barOnCls: 'baron',
    direction: 'v',
    hModifier: '_h',
    impact: undefined,
    $: jQueryLike
};

module.exports = Baron;
