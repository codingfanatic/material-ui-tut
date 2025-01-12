import React from 'react'
import { Typography, Button } from '@material-ui/core'

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button type="submit">Submit</Button>
    </div>
  )
}
