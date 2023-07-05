import React from "react";

const Progress = () => {
  const [submitMessage, setSubmitMessage] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitMessage("Your progress chart will be available in 24 hours");
  };
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        marginLeft: "300px",
        marginTop: "100px",
      }}
    >
      <form
        style={{
          backgroundColor: "beige",
          margin: "5px 0 50px 0",
          padding: "30px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <label>Name:</label>
          <input type="text" placeholder="Name" required></input>
          <label>Email:</label>
          <input type="text" placeholder="Email" required></input>
          <label>Cours ID:</label>
          <input type="text" placeholder="ID" required></input>
          <label>Courses:</label>
          <select style={{ padding: "5px" }}>
            <option value="Coding">Coding</option>
            <option value="DataScience">Data Science</option>
            <option value="Devops">DevOps</option>
            <option value="UPSC">UPSC</option>
          </select>
        </div>
        <button
          style={{
            width: '30%',
            padding: "10px 20px",
            backgroundColor: "#49c54d",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginLeft: "250px",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        {submitMessage ? <div>{submitMessage}</div> : null}
      </form>
    </div>
  );
};
export default Progress;
