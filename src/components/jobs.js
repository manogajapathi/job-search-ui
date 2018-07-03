import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import JobsFilter from './jobs-filter';
import JobDetails from './job-details';
import request from 'superagent';
import { fetch_response } from './util';
import '../stylesheets/jobs.scss';

const Search = Input.Search;

class Jobs extends Component {
  constructor(props){
    super(props);
    this.state={
      isFiltered:false,
      jobsList:[],
      filteredJob:[],
    }
  }
  componentDidMount(){
    var component = this;
    request
    .get("https://job-search-backend-api.herokuapp.com/api/jobs/list")
    .end(function(err,res){
      var is_success = fetch_response(res,false);
      if(is_success){
        component.setState({
          jobsList:res.body.data
        })
      }
    })
  }

  handleSearch = (searchKey) => {
    var component = this;
    request
    .get("https://job-search-backend-api.herokuapp.com/api/jobs/filter?title="+searchKey)
    .end(function(err,res){
      var is_success = fetch_response(res,false);
      if(is_success){
        component.setState({
          filteredJob:res.body.data,
          isFiltered:true
        })
      }
    })
  }
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
            onSearch={this.handleSearch.bind(this)}
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
                  <JobDetails jobsList={this.state.isFiltered == true ? this.state.filteredJob : this.state.jobsList}/>
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
