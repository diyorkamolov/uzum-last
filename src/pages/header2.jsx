import React from 'react';
import { Box, Stack, Typography, BottomNavigation, BottomNavigationAction, Paper, Button, IconButton } from '@mui/material';


const Media = () => {
  return (
    <Box>
      <Box bgcolor={'gray'} padding={2} width={'100%'}>
        {/* Header */}
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack bgcolor={'blue'} width={'50px'} height={'50px'} borderRadius={'100%'} />
          <Stack display={{ xs: 'none', sm: 'none', md: 'flex' }} direction={'row'} gap={2} alignItems={'center'}>
            <Typography>About</Typography>
            <Typography>Location</Typography>
            <Typography>Careers</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Button variant="contained" color="primary">Get Started</Button>
          </Stack>
        </Stack>
      </Box>

      {/* Poster */}
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' }, bgcolor: 'lightgray', padding: 2 }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0MK91kybQXB19OWuT16Zgs5dGKGKoJErEg&s" alt="" style={{ width: '100%', maxHeight: '700px', objectFit: 'cover' }} />
      </Box>

      {/* Random Blocks */}
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', padding: '20px' }}>
        <Paper sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6">Block 1</Typography>
        </Paper>
        <Paper sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6">Block 2</Typography>
        </Paper>
      </Box>
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', padding: '20px' }}>
        <Paper sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6">Block 1</Typography>
        </Paper>
        <Paper sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6">Block 2</Typography>
        </Paper>
      </Box>


      {/* Bottom navigation */}
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block' } }}>
        <BottomNavigation style={{ backgroundColor: '#000', position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center', color: 'white' }}>
          <BottomNavigationAction label="Scoop" />
          <Typography>About</Typography>
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default Media;
