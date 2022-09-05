
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/car-item.css'

const CarItem = (props) => {
     

   const { id,img, displayName, Price, address ,phone} = props.item;

   console.log(phone);
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={img} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{displayName}</h4>
          <h6 className="rent__price text-center mt-">
            Rs {Price}.00 / Day <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">

              <i class="ri-tools-line"></i> {displayName}
              {/* <i class="ri-car-line"></i> {phone}   */}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {address}
         
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span> */}
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/equipments/${id}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/equipments/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
