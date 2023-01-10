import React from "react";
import "./SimpleMaps.scss";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import { Card, Col, Row } from "react-bootstrap";
import {
  MapChart,
  MapChartTexture,
  USState,
  WorldMap,
} from "../../../Data/DataMaps/DataWorldMap";

const SimpleMaps = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Maps" active="Maps" items={["Home"]} />
        {/* <!-- Row --> */}
        <Row>
          <Col lg={6}>
            <Card className="m-b-20">
              <Card.Header>
                <Card.Title as="h3">USA Map</Card.Title>
              </Card.Header>
              <Card.Body>
                <div id="vmap4" className="stateh h-400">
                  <USState />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- end col --> */}

          {/* <!-- End row --> */}

          {/* <!-- Row --> */}

          <Col lg={6}>
            <Card className="m-b-20">
              <Card.Header>
                <Card.Title as="h3">SouthAmerica Map</Card.Title>
              </Card.Header>
              <Card.Body>
                <div id="vmap2" className="stateh h-400">
                  <MapChart />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- end col --> */}
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Mapchart with texture</Card.Title>
              </Card.Header>
              <Card.Body>
                <div id="vmap3" className="stateh h-400">
                  {/* <EuropeMap /> */}
                  <MapChartTexture />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* <!-- end col --> */}

          {/* <!-- End Row --> */}
          <Col lg={6}>
            <Card className="m-b-20">
              <Card.Header>
                <Card.Title as="h3">World Map</Card.Title>
              </Card.Header>
              <Card.Body>
                <div id="vmap1" className="stateh world_map h-400">
                  <WorldMap />
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- end col --> */}
        </Row>
        {/* <!-- End Row --> */}
      </div>
    </React.Fragment>
  );
};

export default SimpleMaps;
