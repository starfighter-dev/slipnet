function Post(props) {
   return (
      <>
         <div className="row">
            <div className="date-bar">Posted by {props.who}, {props.date}</div>
            <h2>
               &gt; {props.title}
            </h2>
            {props.body}
         </div>
         <div className="row">
            <div className="col-12">
               <img src="cherries.jpg" alt="cherries" className="float-end cherries" />
            </div>
         </div>
      </>
   )
}

export default Post;