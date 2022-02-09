import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default function Create() {
  return (
    <Container size="sm"> 
    {/* Container wraps children widgets into a container with padding in the margins*/}
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit" 
        color="secondary" 
        variant="contained">
        Submit
      </Button>

      <Button type="submit" color="secondary" variant="outlined">Submit</Button>
      <Button type="submit" color="default">Submit</Button>
      
      <ButtonGroup color="secondary" variant="contained" disableElevation>
        {/* ButtonGroup groups buttons into a row or column */}
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  )
}
