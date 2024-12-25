 import { useState } from "react"
import { Newsitem } from "./newitem"
 import axios from "axios"
 import { useEffect } from "react";


export const Newsboard=({category})=>{
     const apikey=import.meta.env.VITE_NEWS_API
    
  const [Articles,setArticles]=useState([])
  

   const getdata=async()=>{
     try{
 const result= await axios.get("https://newsapi.org/v2/top-headlines?country=us&category="+category +"&apiKey="+ apikey)
        setArticles(result.data.articles)
        console.log(Articles)}
        catch (error){
    console.error("error fetching data",error)
}
   }
useEffect(()=>{
     getdata()  
},[category]) 
   
    return(<div className="text-center"><h1>Latest
        <span className="badge bg-danger" >News</span> </h1>
       { Articles.map((news,index)=>{
return <Newsitem key={index} title={news?.title} description={news?.description} src={news?.urlToImage} url={news?.url}/>
       })
        }
    </div>)
}