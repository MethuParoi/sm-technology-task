import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/features/authSlice";
import { useRegisterUserMutation } from "@/store/api/apiSlice";
import { openLoginModal } from "@/store/features/modalSlice";
import { toast } from "react-toastify";

// Define types for the props
interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleRegister = async () => {
    try {
      const response = await registerUser({
        fullName,
        email,
        password,
      }).unwrap();
      dispatch(setToken(response.token));
      toast.success("Registration successful!");
      onClose(); // Close the modal after registration
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleLoginLink = () => {
    dispatch(openLoginModal());
    onClose(); // Close Register Modal
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <Typography variant="h6">Register</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ backgroundColor: "#FF6A1A", marginTop: "16px" }}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>

          <div className="my-4 flex gap-2 items-center">
            <hr className="flex-1" />
            <p>Or Sign In with</p>
            <hr className="flex-1" />
          </div>

          <div className="w-full flex items-center justify-between">
            <Button
              variant="outlined"
              sx={{
                width: "48.5%",
                border: "1px solid gray",
                color: "gray",
                textTransform: "capitalize",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <GoogleIcon /> Google
            </Button>

            <Button
              variant="outlined"
              sx={{
                width: "48.5%",
                border: "1px solid gray",
                color: "gray",
                textTransform: "capitalize",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <FacebookIcon /> Facebook
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Typography variant="body2" color="textSecondary">
              Already have an account?{" "}
              <Link href="#" onClick={handleLoginLink}>
                Sign In
              </Link>
            </Typography>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
