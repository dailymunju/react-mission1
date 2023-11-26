

const GalleryBig = ( { imgItem,total }) => {
    const { imgurl , title, id } = imgItem 
    return (
        <div className="bigimg">
            <img src={imgurl} alt={title} />
            <h2> {title} </h2>
            <p>현재 {id} / 총개수 {total}</p>
        </div>
    );
};

export default GalleryBig;