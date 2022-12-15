import React from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      remaining: 217000000000,
      spent: 0,
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }
  handlePlus() {
    this.setState({
      result: this.state.result + 1,
      remaining: this.state.remaining - 499,
      spent: 100- ((this.state.remaining - this.state.result * 499)/217000000000)*100
    });
  }

  handleMinus() {
    if (this.state.result > 0) {
      this.setState({
        result: this.state.result - 1,
        remaining: this.state.remaining + 499,
      spent: ((this.state.remaining - this.state.result * 499)/217000000000)
      });
    }
  }

  render() {
    return (
      <>
        <Homepage />
        <Nav
         remaining={this.state.remaining}
         spent={this.state.spent}
         />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/jImRpPw.jpg"
            title="AirPods Pro"
            price="499"
            result={this.state.result}
            plus={this.handlePlus}
            Minus={this.handleMinus}
          />
          <Card
            img="https://i.imgur.com/LUyQhmF.jpg"
            title="Nintendo Switch"
            price="499"
          />
          <Card img="https://i.imgur.com/CugpEfY.jpg" title="PS5" price="499" />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/HgPROm3.jpg"
            title="Xbox Series X"
            price="499"
          />
          <Card
            img="https://i.imgur.com/SH7FrjV.jpg"
            title="Iphone 14 Pro Max - 1TB"
            price="1.599"
          />
          <Card
            img="https://i.imgur.com/1Vf4DWy.jpg"
            title="Samsung S22 Ultra - 1TB"
            price="1.399"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/69V42nb.jpg"
            title="MacBook Pro 14' M1 Max (64GB RAM | 4TB)"
            price="4.699"
          />
          <Card
            img="https://i.imgur.com/TaO01Rv.jpg"
            title="2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"
            price="6.999"
          />
          <Card
            img="https://i.imgur.com/PXJj7z0.jpg"
            title="Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"
            price="4.950"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/XrStrbb.jpg"
            title="Razer Blade 14 Top spec (2022)"
            price="2.799"
          />
          <Card
            img="https://i.imgur.com/Kx4cEmk.jpg"
            title="Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)"
            price="53.799"
          />
          <Card
            img="https://i.imgur.com/2fWckgJ.jpg"
            title="Ipad Air M1 Chip (2022) (256GB)"
            price="749"
          />
        </div>
      </>
    );
  }
}

export default App;

// import, export

// 1. export
// --Một file chỉ có thể export default 1 lần

// --Một file có thể export nhiều lần nếu không phải là default

// 2. import
// --Khi import 1 file không được export default, phải có dấu { }
// --Khi import 1 file được export default, không cần dấu { }
