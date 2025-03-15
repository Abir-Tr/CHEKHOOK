import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactStars from 'react-stars'

function Filter({setTitle, setRating}) {
  const ratingChanged = (newRating) => {
    console.log(newRating)
     setRating(newRating)
  }
    return (
      <>
       <InputGroup className="mb-3"style={{marginTop:'70px'}} >
       <InputGroup.Text id="inputGroup-sizing-default" style={{color:'cadetblue'}} >
         Movie Title
        </InputGroup.Text>
        <Form.Control 
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default"style={{color:'cadetblue'}} >
      Movie Rating
        </InputGroup.Text>
        {/* <Form.Control
          aria-label="Default" */}
          {/* // aria-describedby="inputGroup-sizing-default"onChange={(e)=>setRating(e.target.value)} */}
          <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  half={true}
  edit={true}
  />,
        
      </InputGroup>
      </>
    );
  }







export default Filter