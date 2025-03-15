import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

function MovieCard({title,description,posterUrl,rating}){
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    return (
      <>
      <Card style={{ width: '18rem' ,marginBottom:'300px', marginLeft:'70px',marginTop:'20px'}}>
        <img src={posterUrl} alt="film" width={286} height={280}></img>
     <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      
        <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  half={true}
  edit={false}
  value={rating}/>,
        <Button variant="danger" style={{color:'burlywood'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    

      </>
    );
  }







export default MovieCard