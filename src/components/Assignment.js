import React from "react";
import "../styles/assignment.css";

const Assignment = () => {
  return (
    <div class="form">
      <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Your Email:</label>
        <input type="text" id="email" name="email" required />

        <label for="assignment">Assignment </label>
        <input type="file" id="assignment" name="assignment" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Assignment;
