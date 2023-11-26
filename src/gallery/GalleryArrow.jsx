import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const GalleryArrow = ({ next, prev}) => {
    return (
        <p className="arrow">
           <i onClick={prev}><FaCircleChevronLeft /></i>
           <i onClick={next}><FaCircleChevronRight /></i>
        </p>
    );
};

export default GalleryArrow;