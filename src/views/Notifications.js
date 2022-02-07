import React from "react";

import {
  UncontrolledAlert,
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Notifications() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Notifications</CardTitle>
                <p className="card-category">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notifications Style</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Alert color="info">
                          <span>This is a plain notification</span>
                        </Alert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>This is a notification with close button.</span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-bell-55"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon.
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-chart-pie-36"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon
                            and have many lines. You can see that the icon and
                            the close button are always vertically aligned. This
                            is a beautiful notification. So you don't have to
                            worry about the style.
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notification states</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <UncontrolledAlert color="primary" fade={false}>
                          <span>
                            <b>Primary - </b>
                            This is a regular notification made with
                            color="primary"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>
                            <b>Info - </b>
                            This is a regular notification made with
                            color="info"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="success" fade={false}>
                          <span>
                            <b>Success - </b>
                            This is a regular notification made with
                            color="success"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" fade={false}>
                          <span>
                            <b>Warning - </b>
                            This is a regular notification made with
                            color="warning"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger" fade={false}>
                          <span>
                            <b>Danger - </b>
                            This is a regular notification made with
                            color="danger"
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
