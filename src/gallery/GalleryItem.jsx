

const GalleryItem = ({ item , onView }) => {
    const { id, imgurl , title, isClass } = item 
    return (
        <li className={ isClass ? "on":"" } onClick={() => onView(id)}>
           <img src={imgurl} alt={title} /> 
        </li>
    );
};

export default GalleryItem;