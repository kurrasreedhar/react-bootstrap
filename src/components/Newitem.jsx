import img from "../assets/img.png";



export const Newsitem=({title, description, src, url})=>{
    return(
         <div  className="card d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px" }}>
  <img src={src?src:img} style={{height:"200px",width:"300px"}}  className="card-img-top" alt="..."/>
  <div  className="card-body">
  <h5 className="card-title">{title?.length > 40 ? title?.slice(0, 40) + '...' : "NFL Week 17 picks and score predictions"}</h5>
        <p className="card-text">{description?.length > 90 ? description?.slice(0, 90) + '...' : "Lorem ipsum dolor sit amet,  Excepteur sint occaecat  deserunt mollit anim id est laborum. Curabitur pretium tincidunt"}</p>
    <a href={url}  className="btn btn-primary">read more</a>
  </div>
</div>
    )
}