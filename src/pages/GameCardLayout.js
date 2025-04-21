import React from "react";
import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const GameCardLayout = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ minWidth: 350, minHeight: 400, borderRadius: 3, boxShadow: 5, padding: 3 }}>
          <CardContent>
            {title && (
              <Typography variant="h5" align="center" gutterBottom>
                {title}
              </Typography>
            )}
            {children}
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

export const CustomButton = ({ children, color, onClick }) => (
  <Button
    variant="contained"
    color={color || "primary"}
    sx={{ width: "200px", borderRadius: 2 }}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default GameCardLayout;
