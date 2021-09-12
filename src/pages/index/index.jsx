import { Button, Text, View } from "@tarojs/components";
import { Component } from "react";
import { connect } from "react-redux";
import { add, asyncAdd, minus } from "../../actions/counter";
import "./index.scss";

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text
            style={{
              textAlign: "center",
              width: "100%",
              display: "block",
              fontFamily: "宋体",
            }}
          >
            {this.props.counter.num}
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              width: "100%",
              display: "block",
              fontFamily: "宋体",
            }}
          >
            Hello, World
          </Text>
        </View>
        <View>
          <img
            style={{ width: "100%" }}
            src="https://blog.code520.com.cn/medias/banner/categories.jpg"
          ></img>
        </View>
      </View>
    );
  }
}

export default Index;
