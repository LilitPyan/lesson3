import React, {Fragment, useState} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import VectorMapsBasic from './Basic';

const VectorMapsExample=()=> {
  const [content, setContent] = useState("");

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
};

export default VectorMapsExample;
