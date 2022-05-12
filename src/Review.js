import React,{useState} from 'react'
import datas from "./data";
import arrow_r from './arrow-right.png'

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
        <article className='article_class'>

        
        <div className='image-container'>
            <img src={image} className='person-img'/>
        </div>
        <div className='name--job'>
        <h4 className='name'>{name}</h4>
        <h4 className='job-name'>{job}</h4>
        </div>
        

        <p className='description'>{text}</p>

        <div className='btns'>
        <button  onClick={clickPrev}>
        <img className='arrow-left' src={require('./arrow-right.png')}/>
        </button>
        
        <button onClick={clickNext}>
        <img className='arrow-right'  src={arrow_r}/>
        </button>
        </div>

        
        </article>
        </>
    )
}

export default Review;