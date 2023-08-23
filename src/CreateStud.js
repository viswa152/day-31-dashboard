import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateStud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teacher, setTeacher] = useState("");
  const [batch, setBatch] = useState("");
  const [marks, setMarks] = useState("");

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
          onChange={(event) => setTeacher(event.target.value)}
          label="Teacher"
          variant="standard"
        />

        <TextField
          onChange={(event) => setBatch(event.target.value)}
          label="Batch"
          variant="standard"
        />

        <TextField
          onChange={(event) => setMarks(event.target.value)}
          label="Marks"
          variant="standard"
        />
      </div>

      <Button
        className="add-button"
        onClick={() => {
          const newStudent = {
            name: name,
            email: email,
            phone: phone,
            teacher: teacher,
            batch: batch,
            marks: marks,
          };

          axios
            .post(
              "https://6444ee43914c816083c23999.mockapi.io/students",
              newStudent
            )
            .then(function (response) {
              console.log(response);
            })
            .then(() => navigate("/students"))
            .catch(function (error) {
              console.log(error);
            });
        }}
        variant="contained"
      >
        Add Student
      </Button>
    </div>
  );
};

export default CreateStud;
