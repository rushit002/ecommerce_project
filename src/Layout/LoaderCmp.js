import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function LoaderCmp() {
  return (
   <div>
     <div style={{position:"absolute",left:"50%",top:"50%"}}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
    </div>
   </div>
  )
}
