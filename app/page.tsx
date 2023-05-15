'use client';

import Image from 'next/image'
import { Box, CssBaseline, Typography } from '@mui/material'
import StepperPage from './components/StepperComponent';
import { ProjectProvider } from './context/projectContex';

export default function Home() {
  return (
    <ProjectProvider>
      <CssBaseline />
      <Box
        sx={{
          background: "#101313",
          minHeight: "100vh",
        }}
      >
        <StepperPage />
      </Box>
    </ProjectProvider>
  )
}
