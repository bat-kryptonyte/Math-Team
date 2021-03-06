import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: '#fff6f6' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Cabinet</h1>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/matthew.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Matthew Lee"
                    description="Captain"
                  />
                  </Card>
                </Col>
                
                <Col xs={12} sm={8} md={8} lg={8}>
                   <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/jeffrey.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Jeffrey Deng"
                    description="President"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/michael.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Michael Wang"
                    description="Event Coordinator"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/Angel.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Angel Yang"
                    description="Vice President"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/Leo.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Leo Zhang"
                    description="Co-Captain"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={true}
                    cover={<img alt="example" src="images/LeoL.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Leo Li"
                    description="Treasurer"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}