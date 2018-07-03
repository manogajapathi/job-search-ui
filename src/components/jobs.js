import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import JobsFilter from './jobs-filter';
import JobDetails from './job-details';
import '../stylesheets/jobs.scss';

const Search = Input.Search;

class Jobs extends Component {
  render() {
    return (
      <div>
        <div className="search-job">
        <Row>
        <Col span={24}>
          <div className="search">
          <Search
            placeholder="Search by keywords (UI, UX, android, javascript, etc)"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          </div>
        </Col>
        </Row>
        </div>
        <div className="main-content">
          <Row>
            <Col span={6}>
              <div className="left-panel" style={{padding:"20px"}}>
                <JobsFilter/>
              </div>
            </Col>
            <Col span={12}>
              <div className="center-panel" >
                  <JobDetails/>
              </div>
            </Col>
            <Col span={6}>
              <div className="right-panel">
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Jobs;
