import React,{useState} from 'react'
import datas from "./data";


// console.log(data)

function Review(){
    const [index ,setIndex] = useState(0)
    const {id,name,job,image,text} = datas[index]
    // console.log(index)
    const clickNext =()=>{
        // console.log(datas.length)
        if(index<datas.length-1){
            setIndex(index+1)
            console.log(index)
        }
    }
    const clickPrev =()=>{
        // console.log(datas.length)
        if(index>0){
            setIndex(index-1)
            console.log(index)
        }
    }
    return(
        <>
        
        <h3>{name}</h3>
        <h2>{job}</h2>
        <div className='image-container'>
            <img src={image} className='person-img'/>
        </div>
        
        <p>{text}</p>
        <button  onClick={clickPrev}>Prev</button>
        <button onClick={clickNext}>Next</button>
        
        </>
    )
}

export default Review;