import 'react-bootstrap';
import { Container,Row ,Col} from "react-bootstrap";
import imageSrc from "../../public/images/images.jpg";
import heartFill from "../../public/images/heart-fill.png"
import './StyleSheet/Card.css'

function BasicExample() {
  let CardDetails = [
    {
      cardTitle: "dslr",
      cardText: "discriptions",
      imageSrc: imageSrc,
      description:'very Nice '
    },
    {
      cardTitle: "dslr",
      cardText: "discriptions",
      imageSrc: imageSrc,
      description:"good"
    },
  ];
  return (
    <Row>
      {CardDetails.map((content, k) => (
        <Col key={k}>
          <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter">{content.cardTitle}</span>
              </div>
              <div className="card-title-group">
                <h5 className="card-title">{content.cardTitle}</h5>
                <div className="card-date">11.2.2001</div>
              </div>
            </div>
            <img className="card-image" src={content.imageSrc} alt="Logo" />
            <div className="card-text">{content.cardText}</div>
            <div className="card-like-bar">
              <img className="card-like-icon" src={heartFill} alt="Logo" />
              <div className="like-text">
                <b>7</b> {content.description}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default BasicExample;
