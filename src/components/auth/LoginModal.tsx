import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  Link,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/features/authSlice"; // Redux action to set token
import { useLoginUserMutation } from "@/store/api/apiSlice"; // RTK Query hook
import { openRegisterModal } from "@/store/features/modalSlice"; // Modal actions
import { toast } from "react-toastify";

// Define types for the props
interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password }).unwrap();
      dispatch(setToken(response.token)); // Store token in Redux
      toast.success("Login successful!");
      onClose(); // Close the modal after login
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleRegisterLink = () => {
    dispatch(openRegisterModal()); // Open Register Modal when clicking on "Sign Up"
    onClose(); // Close Login Modal
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <Typography variant="h6">Login</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
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
          <div className="mb-4 flex justify-between items-center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              }
              label="Remember me"
            />
            <Link href="#" variant="body2">
              Forgot Password
            </Link>
          </div>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ backgroundColor: "#FF6A1A" }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

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
            Don&apos;t have an account?{" "}
            <Link href="#" onClick={handleRegisterLink}>
              Sign Up
            </Link>
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default LoginModal;
