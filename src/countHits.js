import React, { Component } from "react";

const countHits = WrappedComponent => {
  class CountHits extends Component {
    state = {
      hits: 0
    };
    handleIncriment = () => {
      this.setState({
        hits: this.state.hits + 1
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state !== prevState) {
        const componenetName = WrappedComponent.name;
        this.props.reduceHndler(componenetName);
      }
    }
    render() {
      return (
        <WrappedComponent
          addonehit={this.handleIncriment}
          hocState={this.state}
          {...this.props}
        />
      );
    }
  }
  return CountHits;
};

export default countHits;
