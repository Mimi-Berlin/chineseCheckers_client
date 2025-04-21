


import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [isNewPlayer, setIsNewPlayer] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      console.log("Logging in as:", username);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-400">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: 3,
            padding: 4,
            backgroundColor: "white",
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h4" color="primary" gutterBottom>
              כניסה למשחק דמקה סינית
            </Typography>
            <Box mb={3}>
              <TextField
                label="שם משתמש"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#f9f9f9",
                  },
                }}
              />
            </Box>
            <Button
              onClick={handleLogin}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                borderRadius: 2,
                padding: "12px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              {isNewPlayer ? "צור שחקן חדש" : "היכנס למשחק"}
            </Button>
            <Box mt={3}>
              <Button
                onClick={() => setIsNewPlayer(!isNewPlayer)}
                variant="text"
                color="secondary"
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                {isNewPlayer ? "יש לי כבר משתמש" : "אני שחקן חדש"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
