import React from "react";
import defaultIMG from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import { Banner } from "../components/Banner";
import StyledHero from "../components/StyledHero";
export default class SIngle_room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultIMG,
    };
  }

  static contextType = RoomContext;

  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h1>no such room found..</h1>
          <Link to={"/rooms/"} className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImages] =  images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room" key={1}>
            <div className="single-room-images">
                {defaultImages.map((item, index) => {
                    return <img src={item} alt = {name}/>
                })}
            </div>
            <div className="single-room-info">
                <article className="desc" key={1}>
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info" key={2}>
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : ${size} Sq-ft</h6>
                    <h6>max capacity : {" "}
                    {capacity >1 ? `${capacity} prople`: `1 person`}
                    </h6>
                    <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                    <h6>{breakfast?"Free Breakfast included":"" }</h6>
                    

                </article>
            </div>
        </section >
        <section className="room-extras" key={2}>
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((item, index) =>{
                    return <li key={index}>-- {item}</li>
                })}
            </ul>
        </section>
      </>
    );
  }
}
