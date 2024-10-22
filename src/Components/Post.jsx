import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Post() {
  const [title, settitle] = useState();
  const [body, setBody] = useState();
  const nav = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
    })
      .then(() => {
        nav('/')
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <label>Write Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label>write body here </label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />{" "}
        <br />
        <br />
        <br />
        <input type="submit" value="Post" />
      </form>
    </>
  );
}
