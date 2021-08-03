import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [prev, setPrev] = useState();
  const [split, setSplit] = useState();
  const [total, setTotal] = useState();

  function handleBill(e) {
    setBill(parseInt(e.target.value));
  }
  function handleTip(e) {
    setTip(parseInt(e.target.value) / 100);
  }
  function handleSplit(e) {
    setSplit(parseInt(e.target.value));
  }
  useEffect(() => {
    if (bill || tip || split != 0) {
      setPrev(bill * tip);
      setTotal((bill + prev) / split);
    } else console.log("please fill all fomr");
  }, [split, tip]);

  console.log(tip);

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center main-class">
        <div className="split-bill">
          <Row className="left-main-row">
            <Col className="left-section" md={6}>
              <div>
                <p>Bill</p>
                <i class="fas fa-dollar-sign"></i>
                <input
                  className="custom-input"
                  onChange={handleBill}
                  type="text"
                />
              </div>
              <div className="tip-section">
                <p>Select Tip</p>
                <Row>
                  <Col md={4}>
                    <Button
                      value={"5%"}
                      onClick={handleTip}
                      className="tip-button"
                    >
                      5%
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      value={"10%"}
                      onClick={handleTip}
                      className="tip-button"
                    >
                      10%
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      value={"15%"}
                      onClick={handleTip}
                      className="tip-button"
                    >
                      15%
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      value={"20%"}
                      onClick={handleTip}
                      className="tip-button"
                    >
                      20%
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      value={"25%"}
                      onClick={handleTip}
                      className="tip-button"
                    >
                      25%
                    </Button>
                  </Col>
                  <Col className="custom-tip">
                    <input
                      onChange={handleTip}
                      placeholder="Custom"
                      type="text"
                      className='custom-tip-input'
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <p>number of people</p>
                <i class="fas fa-user-alt"></i>
                <input
                  className="custom-input"
                  onChange={handleSplit}
                  type="text"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="right-section">
                <Row className="tip-amount">
                  <Col md={6}>
                    <p>tip amount</p>
                  </Col>
                  <Col md={6}>
                    <p placeholder="amount">{prev}</p>
                  </Col>
                </Row>
                <Row className="total-amount">
                  <Col md={6}>
                    <p>Total amount</p>
                  </Col>
                  <Col md={6}>
                    <p placeholder="amount">{total}</p>
                  </Col>
                </Row>
                <Button>Reset</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default App;
