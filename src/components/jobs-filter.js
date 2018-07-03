import React, { Component } from 'react';
import { Row, Col, Select, Dropdown, Button, Icon, Menu, Checkbox, Slider } from 'antd';

class JobsFilter extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">Recent</Menu.Item>
        <Menu.Item key="2">Top MNC</Menu.Item>
        <Menu.Item key="3">Startup</Menu.Item>
      </Menu>
    );
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return (
      <div> 
        <Row className="filters">
        <Col span={16} ><p className="sub-title">FILTERS</p></Col>
            <Col span={8} style={{ display: "flex" }}>
              <a href="#">Clear all filters</a>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Skills</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
            >
              {children}
            </Select>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Availability</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col span={16}>
            <Checkbox>Hourly</Checkbox><br/>
            <Checkbox>Part Time</Checkbox><br/>
            <Checkbox>Full Time</Checkbox>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Job type</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col span={24}>
            <Dropdown overlay={menu}>
                <Button>
                  Select a job type <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Pay rate / hr ($)</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col span={24}>
              <Slider range step={10} defaultValue={[20, 50]}/>
              <p style={{ float: "left" }}>1</p>
              <p style={{ float: "right" }}>40+</p><br/>
            </Col>
            <Col span={24}>
            <Checkbox>Include profiles without pay rates</Checkbox>
            </Col>
        </Row>
        
        <Col span={16} ><p className="sub-title">Experience level</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col><Row style={{paddingTop:"20px"}}>
            <Col span={24}>
            <Dropdown overlay={menu}>
                <Button>
                  Select your experience level <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Country</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col span={24}>
            <Dropdown overlay={menu}>
                <Button>
                  Enter state,province or country <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
        </Row>
        <Row style={{paddingTop:"20px"}}>
        <Col span={16} ><p className="sub-title">Language</p></Col>
            <Col span={8}>
              <a href="#" style={{ float: "right" }}>Clear</a>
            </Col>
            <Col span={24}>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
            >
              {children}
            </Select>
            </Col>
        </Row>
      </div>
    );
  }
}

export default JobsFilter;