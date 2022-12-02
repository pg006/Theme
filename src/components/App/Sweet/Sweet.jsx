import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import PageHeader from '../../../commonComponents/PageHeader/PageHeader'
import { CongratulationAlert, SimpleAlert,WarningAlert, DangerAlert, InfoAlert, TitlewithAlert, ImagewithAlert, TimmerwithAlert } from '../../../Data/App/DataSweetAlert'
import './Sweet.scss'

const Sweet = () => {
  return (
    <React.Fragment>
    <div>
        <PageHeader titles="Sweet Alert" active="Sweet Alert" items={['Apps']} />
        {/* <!-- Row --> */}
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Sample Sweet Alerts</Card.Title>
              </Card.Header>
              <Card.Body>
                <CongratulationAlert />
                <WarningAlert />
                <DangerAlert />
                <InfoAlert />

              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Forms Sweet-alert</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="form-group">
                  <label>Title</label>
                  <input type='text' className="form-control" placeholder='Title text' id='title' />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <input type='text' className="form-control" placeholder='Your message' id='message' />
                </div>
                <SimpleAlert />
                <TitlewithAlert />
                <ImagewithAlert />
                <TimmerwithAlert />
              </Card.Body>
            </Card>
          </Col>
        </Row >
        {/* <!-- End Row --> */}
      </div >
    </React.Fragment>
  )
}

export default Sweet