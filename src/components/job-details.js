import React, { Component } from 'react';
import { Row, Col, Dropdown, Button, Icon, Menu, Tag } from 'antd';

class JobDetails extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">Recent</Menu.Item>
        <Menu.Item key="2">Top MNC</Menu.Item>
        <Menu.Item key="3">Startup</Menu.Item>
      </Menu>
    );
    return (
      <div>
      <div>
        <Row >
          <Col span={16}><p className="sub-title">Results (24)</p></Col>
          <Col span={8} style={{ display: "flex" }}><p>Sort by</p>
            <Dropdown overlay={menu}>
              <Button style={{ marginLeft: 8 }}>
                Relevance <Icon type="down" />
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <div className="job-list">
        <Row>
          <Col span={20}><p className="sub-title">Senior Java Developer</p></Col>
          <Col span={4}><p className="sub-title">$44 / hr</p></Col>
        </Row>
        <Row gutter={10}>
          <Col span={5}>Epic Coders</Col>
          <Col span={5}>Location</Col>
        </Row>
        <Row>
          <Col span={10} style={{ display: "flex" }}>Reply rate : <p className="sub-title">78%</p></Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}>
          <Tag>UI</Tag>
          <Tag>UX</Tag>
          <Tag>android</Tag>
          <Tag>javascript</Tag>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default JobDetails;