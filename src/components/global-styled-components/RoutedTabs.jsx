import React from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const propTypes = {
  history: PropTypes.any,
  location: PropTypes.any,

  action: PropTypes.oneOf(["push", "replace"]).isRequired,

  // onClick: PropTypes.func,
  // active: PropTypes.bool,
  // target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  action: "push",
};

class RoutedTabs extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  // returns [activeKey, children]
  generateChildren = () => {
    let activeKey = null;

    const children = React.Children.map(this.props.children, (child) => {
      if (!child) return null;
      const [pathname] = child.props.to.split("?");
      if (this.props.location.pathname === pathname) {
        activeKey = ".$" + child.key.toString();
      }

      return React.cloneElement(child, { to: undefined });
    });
    return [activeKey, children];
  };

  onChange = (key) => {
    const childkey = key.substring(2);
    let route;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.key.toString() === childkey) route = child.props.to;
    });
    if (route) this.props.history.push(route, { resetScroll: false });
  };

  render() {
    const [activeKey, childs] = this.generateChildren();
    return (
      <Tabs activeKey={activeKey} onChange={this.onChange}>
        {childs}
      </Tabs>
    );
  }
}

export default withRouter(RoutedTabs);
