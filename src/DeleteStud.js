import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const DeleteStud = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://6444ee43914c816083c23999.mockapi.io/students/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/delete-student"));
  }, []);

  return <div></div>;
};

export default DeleteStud;
