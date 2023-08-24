import React, { useState } from "react";
import axios from "axios";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import {
  TextField,
  Button,
  IconButton,
  Tooltip,
  Snackbar,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { green, red } from "@mui/material/colors";
import MuiAlert from "@mui/lab/Alert";
import "./ContactForm.css";

function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/contact", formData);

      // Handle successful response from the server
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.msg); // Use the server message for success too, if provided.
    } catch (error) {
      // Check if the error response contains a custom message, if not use a generic one
      const serverMessage =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "An error occurred while sending the message.";

      setSnackbarSeverity("error");
      setSnackbarMessage(serverMessage);
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadein.subscribe(
    fadeInScreenHandler
  );

  return (
    <div className="contact-me-container fade-in" id={props.id || ""}>
      <ScreenHeading
        className="contact-me-heading"
        title={"Contact Me"}
        subHeading={"Thanks for coming"}
      />
      <div className="glass-card">
        <span className="contact-me-title">Contact Me</span>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <div className="button-right">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <Tooltip title="Scroll to Top" enterDelay={500}>
        <IconButton
          className="scroll-to-top-button"
          color="primary"
          onClick={() => ScrollService.scrollHandler.scrollToHeader()}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            backgroundColor:
              snackbarSeverity === "success" ? green[600] : red[600],
          }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default ContactForm;
