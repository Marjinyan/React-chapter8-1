function Book(props){
	return <div >
		<img src = {props.pic} />
		<h5>{props.title}</h5>
		<p>By {props.author}</p>
	</div>
}
export default Book