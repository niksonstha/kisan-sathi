import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Items from './Items'

import allData from '../Hooks/fetchData';

const ItemListing = () => {
 
    const { data }  = allData();

    console.log(data);
  
  return (
    <Helmet title="Equipments">
      <CommonSection title="Equipments List" />
      
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> ALL AVAILABLE EQUIPMENTS LIST
                </span>
              </div>
            </Col>

              {data.map((item) => (
              <Items item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ItemListing;
