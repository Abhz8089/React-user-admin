import 'react-bootstrap';
import { Container,Row ,Col} from "react-bootstrap";
import imageSrc from "../../public/images/images.jpg";
import heartFill from "../../public/images/heart-fill.png"
import './StyleSheet/Card.css'

function BasicExample() {
  let CardDetails = [
    {
      cardTitle: "Boulevard du Temple",
      cardText: "Louis Daguerre",
      imageSrc: "../../public/images/1838_daguerre_boulevard-color.webp",
      description: "*****",
      year: 1838,
    },
    {
      cardTitle: "The Valley of the Shadow of Death",
      cardText: " Roger Fenton",
      imageSrc: "../../public/images/1855_fenton_shadowdeath_canons-color.webp",
      description: "*****",
      year: 1855,
    },
    {
      cardTitle: "Fort Peck Dam ",
      cardText: "Margaret Bourke-White",
      imageSrc: "../../public/images/1936_bourke-white_fortpeck-color.webp",
      description: "*****",
      year: 1936,
    },
    {
      cardTitle: "The Dead of Antietam",
      cardText: "Alexander Gardner",
      imageSrc: "../../public/images/1862_antietam_brady-color.jpg",
      description: "*****",
      year: 1862,
    },
    {
      cardTitle: "Bandit's Roost, 59½ Mulberry Street ",
      cardText: "Jacob Riis",
      imageSrc: "../../public/images/1888_riis_roost-color.webp",
      description: "*****",
      year: 1888,
    },
    {
      cardTitle: "The Steerage",
      cardText: "Alfred Stieglitz",
      imageSrc: "../../public/images/1907_steiglitz_steerage-color.webp",
      description: "*****",
      year: 1907,
    },
    {
      cardTitle: "Girl Worker in Carolina Cotton Mill ",
      cardText: "Lewis Hine",
      imageSrc: "../../public/images/1908_hine_cotton_mill-color.webp",
      description: "*****",
      year: 1908,
    },
  ];
  return (
    <Row className='row'>
      {CardDetails.map((content, k) => (
        <Col className='col' key={k}>
          <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter">{content.cardTitle}</span>
              </div>
              <div className="card-title-group">
                <h5 className="card-title">{content.cardTitle}</h5>
                <div className="card-date">{content.year}</div>
              </div>
            </div>
            
              <img className="images" src={content.imageSrc} alt="Logo" />
           
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
