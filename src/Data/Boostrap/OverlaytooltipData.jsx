import React from "react";
import { Button, Popover, OverlayTrigger, Col } from "react-bootstrap";
import { ColoredTooltipData, StaticTooltipData, popoverData } from "./Mock";

// Tooltip DefaultpopOver START
export const DefaultpopOver = () => {
  return (
    <>
      {popoverData.map((item, k) => (
        <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
          <OverlayTrigger
            trigger="click"
            placement={item.placement}
            overlay={
              <Popover
                id={`popover-positioned-${item.placement}`}
                style={{ margin: "0px" }}
              >
                <Popover.Header as="h3">{`Popover ${item.placement}`}</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant={item.variant}>Click me</Button>
          </OverlayTrigger>
        </Col>
      ))}
    </>
  );
}
//   Tooltip DefaultpopOver END

// Static TooltipPopOver START

export const StaticTooltip = () => {
  return (
    <>
      {StaticTooltipData.map((item, k) => (
        <Col sm={6} lg={3} className="mt-2 mb-2 text-center" key={k}>
          <OverlayTrigger
            trigger="click"
            placement={item.placement}
            overlay={
              <Popover
                id={`popover-positioned-${item.placement}`}
                style={{ margin: "0px" }}
              >
                <Popover.Header
                  className={item.classname}
                  as="h3"
                >{`Popover ${item.placement}`}</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant={item.variant}>Click me</Button>
          </OverlayTrigger>
        </Col>
      ))}
    </>
  );
}
// Static TooltipPopOver END

// Colored Static TooltipPopOver START

export const ColoredTooltip = () => {
  return (
    <>
      {ColoredTooltipData.map((item, k) => (
        <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
          <OverlayTrigger
            trigger="click"
            placement={item.placement}
            overlay={
              <Popover
                className={item.popoverclass}
                id={`popover-positioned-${item.placement}`}
                style={{ margin: "0px" }}
              >
                <Popover.Body className="text-white">
                  <h4
                    className={item.popheaderclass}
                  >{`Popover ${item.placement}`}</h4>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant={item.variant}>Click me</Button>
          </OverlayTrigger>
        </Col>
      ))}
    </>
  );
}

// Colored Static TooltipPopOver END
