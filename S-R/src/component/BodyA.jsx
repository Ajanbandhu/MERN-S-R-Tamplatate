import Carousel from 'react-bootstrap/Carousel';



function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: 630,  filter: 'brightness(0.5)' }} 
          src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className=' text-6xl text-white'>First slide label</h5>
          <p className=' text-3xl text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 630 , filter: 'brightness(0.5)',}} 
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className=' text-6xl text-white' >Second slide label</h5>
          <p className=' text-3xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height:630,  filter: 'brightness(0.5)' }} 
          src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className=' text-6xl text-lime-400'>Third slide label</h5>
          <p className=' text-3xl text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;