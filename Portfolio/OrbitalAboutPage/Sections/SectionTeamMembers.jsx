import { Link } from "react-router-dom";
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CardFooter from "Components/Card/CardFooter.jsx";
import Muted from "Components/Typography/Muted.jsx";
import Button from "Components/CustomButtons/Button.jsx";

const cardProfile1Square =
  "https://orbital-clients.s3.amazonaws.com/card-profile1-square.jpg";
const cardProfile2Square =
  "https://orbital-clients.s3.amazonaws.com/card-profile2-square.jpg";
const cardProfile4Square =
  "https://orbital-clients.s3.amazonaws.com/card-profile4-square.jpg";
const cardProfile6Square =
  "https://orbital-clients.s3.amazonaws.com/card-profile6-square.jpg";
const TeamMembers = props => (
  <>
    <GridItem xs={12} sm={6} md={6}>
      <Card profile plain className={classes.card3}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={5}>
            <CardHeader image plain>
              <Link to="#pablo" onClick={e => e.preventDefault()}>
                <img src={cardProfile1Square} alt="..." />
              </Link>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${cardProfile1Square})`,
                  opacity: "1"
                }}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Sam Alghanmi</h4>
              <Muted>
                <h6 className={classes.cardCategory}>FOUNDER</h6>
              </Muted>
              <p className={classes.description}>10 years of experience</p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentCenter}>
              <Button justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button justIcon simple color="facebook">
                <i className="fab fa-facebook-square" />
              </Button>
              <Button justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </GridItem>
        </GridContainer>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={6}>
      <Card profile plain className={classes.card3}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={5}>
            <CardHeader image plain>
              <Link to="#pablo" onClick={e => e.preventDefault()}>
                <img src={cardProfile6Square} alt="..." />
              </Link>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${cardProfile6Square})`,
                  opacity: "1"
                }}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Zee Drakhshandeh</h4>
              <Muted>
                <h6 className={classes.cardCategory}>Marketing and Product</h6>
              </Muted>
              <p className={classes.description}>the mind behind our product</p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentCenter}>
              <Button justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
              <Button justIcon simple color="facebook">
                <i className="fab fa-facebook-square" />
              </Button>
              <Button justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </GridItem>
        </GridContainer>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={6}>
      <Card profile plain className={classes.card3}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={5}>
            <CardHeader image plain>
              <Link to="#pablo" onClick={e => e.preventDefault()}>
                <img src={cardProfile4Square} alt="..." />
              </Link>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${cardProfile4Square})`,
                  opacity: "1"
                }}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Rebecca Sable</h4>
              <Muted>
                <h6 className={classes.cardCategory}>UI/UX DESIGNER</h6>
              </Muted>
              <p className={classes.description}>
                I make you not want to throw your computer across the room
              </p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentCenter}>
              <Button justIcon simple color="youtube">
                <i className="fab fa-youtube" />
              </Button>
              <Button justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button justIcon simple color="instagram">
                <i className="fab fa-instagram" />
              </Button>
            </CardFooter>
          </GridItem>
        </GridContainer>
      </Card>
    </GridItem>
  </>
);
