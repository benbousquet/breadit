import { Layout, Menu } from "antd";
import CardShowcase from "../components/home/cardShowcase";
import ExplainationText from "../components/home/explainationText";
import LenderExplaination from "../components/home/lenderExplaination";
import WaitList from "../components/home/waitList";

const { Header, Footer, Content } = Layout;

export default () => (
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
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Apply for a Breadit Card</Menu.Item>
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
        <WaitList id="waitList" />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);
