import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Box } from '@mui/material';

export default function GameModeSelection({ onSelectMode }) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #8e44ad, #3498db)',
      }}
    >
      <Card sx={{ minWidth: 300, borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom align="center">
            בחר מצב משחק
          </Typography>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSelectMode('bot')}
              sx={{ borderRadius: 2 }}
            >
              משחק מול בוט
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onSelectMode('online')}
              sx={{ borderRadius: 2 }}
            >
              משחק מול שחקן ברשת
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => onSelectMode('local')}
              sx={{ borderRadius: 2 }}
            >
              משחק מול שחקן לוקאלי
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
