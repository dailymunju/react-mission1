import { useEffect, useState } from "react";
import galleryData from "../assets/api/galleryData";
import './style.scss'
import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";
import GalleryArrow from "./GalleryArrow";

const Gallery = () => {
    const [ data , setData ] = useState( galleryData )
    const [ imgItem , setImgItem ] = useState( data[0] )
    const [cnt, setCnt] = useState(0)

    const total = data.length 

    const onView = ( id )  => {    
        setImgItem( data.find( item => item.id === id ) )
        setData( data.map( item => item.id === id ? {...item, isClass:true } : {...item, isClass:false } ))
    }
    const next = () => {
        console.log(cnt)
        if(cnt < total-1){
            setCnt(cnt + 1)
        }else{
            setCnt(0)
            setImgItem(data[0])
        }
    }
    const prev = () => {
        console.log(cnt)
        if(cnt <= 0){
            setCnt(total -1)
            setImgItem(data[total-1])
        }else {
            setCnt(cnt - 1)
        }
    }

    useEffect(()=>{
        setData( data.map( item => item.id === cnt + 1? {...item, isClass:true } : {...item, isClass:false } ))
        setImgItem(data[cnt])
        const timer = setInterval(() => {
            next()
        }, 1000);
        
        return() => {
            clearTimeout(timer)
        }
    },[cnt])

    return (
        <div className="wrap">
            <h1> React Gallery </h1>
            <GalleryBig imgItem={imgItem} total={total}/>
            <GalleryList data={data} onView={onView} />
            <GalleryArrow next={next} prev={prev}/> 
        </div>
    );
};

export default Gallery;