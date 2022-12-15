import React from "react";

class Nav extends React.Component {
  static defaultProps = {};
  render() {
    let {remaining, spent} = this.props
    return (
      <>
        <h2 className="Nav">
          <div>Remaining: ${remaining.toLocaleString("en-US")}</div>
          {spent == 0 ? (
              <div>You haven't spent a single dollar! start buying!</div>
            ) : (
              <div>You only spent {spent.toFixed(5)} % of the total!</div>
            )}
        </h2>
      </>
    );
  }
}

export default Nav;
