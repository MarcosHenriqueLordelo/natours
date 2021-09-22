import React from "react";

import { Container } from "./styles";

// Components
import { Row } from "../../components/grid";
import FeatureBox from "../../components/featureBox";

const Index: React.FC = () => {
  return (
    <Container>
      <Row>
        <div className='col _1of4'>
          <FeatureBox
            title='explore the world'
            image='https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-globe-icon-png-image_3787753.jpg'
            body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in voluptate voluptatibus'
          />
        </div>
        <div className='col _1of4'>
          <FeatureBox
            title='meet nature'
            image='https://toppng.com/uploads/preview/compass-png-11554002595xrorh65rph.png'
            body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in voluptate voluptatibus'
          />
        </div>
        <div className='col _1of4'>
          <FeatureBox
            title='find your way'
            image='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-flat-map-image_1287508.jpg'
            body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in voluptate voluptatibus'
          />
        </div>
        <div className='col _1of4'>
          <FeatureBox
            title='live a healthier life'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9cBIV2DqTZ-pdpvZBTA-rIGmkyilfEOCdA&usqp=CAU'
            body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in voluptate voluptatibus'
          />
        </div>
      </Row>
    </Container>
  );
};

export default Index;
