import React, { Component } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: "http://a.itying.com/"
    };
  }

  requestData = () => {
    let api = "http://a.itying.com/api/productlist";
    axios
      .get(api)
      .then(response => {
        // console.log(response);
        this.setState({
          list: response.data.result
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then();
  };

  componentDidMount() {
    this.requestData();
  }

  render() {
    return (
      <div className="home">
        <div className="list">
          {this.state.list.map((value, key) => {
            return (
              <div className="item" key={key}>
                <h3 className="item_cate">{value.title}</h3>
                <ul className="item_list">
                  {value.list.map((value, key) => {
                    return (
                      <li key={key}>
                        <Link to={`/pcontent/${value.id}`}>
                          <div className="inner">
                            <img
                              src={`${this.state.domain}${value.img_url}`}
                              alt=""
                            />
                            <p className="title">{value.title}</p>
                            <p className="price">{value.price}元</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
