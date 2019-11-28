import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import VectorMapsBasic from './Basic'

class VectorMapsExample extends React.Component {
  render() {
    return (
      <Fragment>
        <Card className="main-card mb-2">
          <CardBody>
            <CardTitle>
              RSMS
            </CardTitle>
            <VectorMapsBasic/>
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}

export default VectorMapsExample;
