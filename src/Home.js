import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ drinks, snacks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <br></br>
            <p>We currently have {snacks.length} snack options and {drinks.length} drink options!</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
