// Or for ES2015 module
import Flickity from "react-flickity-component";
import './Carousel'

const flickityOptions = {
  initialIndex: 2,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="https://picsum.photos/id/1/200/300" />
    </Flickity>
  );
}

export default Carousel
