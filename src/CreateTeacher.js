import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [batches, setBatches] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-user">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard"
        />

        <TextField
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="standard"
        />

        <TextField
          onChange={(event) => setPhone(event.target.value)}
          label="Phone"
          variant="standard"
        />

        <TextField
          onChange={(event) => setBatches(event.target.value)}
          label="Batches"
          variant="standard"
        />
      </div>

      <Button
        className="add-button"
        onClick={() => {
          const newTeacher = {
            name: name,
            email: email,
            phone: phone,
            batches: batches,
          };

          axios
            .post(
              "https://6444ee43914c816083c23999.mockapi.io/teachers",
              newTeacher
            )
            .then(function (response) {
              console.log(response);
            })
            .then(() => navigate("/teachers"))
            .catch(function (error) {
              console.log(error);
            });
        }}
        variant="contained"
      >
        Add Teacher
      </Button>
    </div>
  );
};

export default CreateTeacher;
