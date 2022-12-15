import React from "react";
class Card extends React.Component {

  static defaultProps = {
    img: "https://i.imgur.com/jImRpPw.jpg",
    title: "Title",
    price: "price",
  };
  render() {
    let {plus, Minus, img, title, price, result } = this.props;
    return (
      <>
        <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">USD {price}</p>
              <div className="purchase-footer">
                <button onClick={Minus} className="sellBtn">Sell</button>
                <span>{result}</span>
                <button onClick={plus} className="buyBtn">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
