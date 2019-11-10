import { Layout, Menu, Typography } from "antd";
import Tilt from "react-tilt";

const { Header, Footer, Content } = Layout;

const { Title } = Typography;

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
        <Title style={{ textAlign: "center", paddingTop: "20px" }}>
          Introducing the Breadit Card
        </Title>
        <Tilt
          className="Tilt"
          options={{ max: 30 }}
          style={{
            height: 500,
            width: 500,
            display: "flex",
            justifySelf: "center"
          }}
        >
          <div className="Tilt-inner">
            <img
              style={{
                height: 500
              }}
              src="/stock4.png"
            />
          </div>
        </Tilt>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);
