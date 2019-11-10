import React from "react";
import { Layout, Menu } from "antd";
import CardShowcase from "../components/home/cardShowcase";
import ExplainationText from "../components/home/explainationText";
import LenderExplaination from "../components/home/lenderExplaination";
import WaitList from "../components/home/waitList";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const { Header, Footer, Content } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  componentWillUnmount = () => {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  };
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                lineHeight: "64px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Menu.Item key="1">
                <Link to="waitList" spy="true" smooth="true" duration={500}>
                  Apply for a Breadit Card
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CardShowcase />
            <ExplainationText />
            <LenderExplaination />
            <Element name="waitList" style={{ width: "100%" }}>
              <WaitList />
            </Element>
          </Content>
          <Footer>Breadit &copy;2019</Footer>
        </Layout>
      </div>
    );
  }
}
