import style from "./Form.module.css";
import { useState } from "react";
import contact from "../image/contact.svg";

const Form = () => {
  // useState for holding the data of input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Setting the value of name, email, password using useState

  const submit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setMessage(e.target.message.value);
  };

  return (
    // contact form of contact page
    <div className={style.contact_Container}>
      <div className={style.img_container}>
        <img src={contact} alt="" />
      </div>
      <div className={style.contact_form}>
        <form onSubmit={submit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="abc" />
          <label htmlFor="name">Email:</label>
          <input type="email" name="email" placeholder="xyz@gmail.com" />
          <label htmlFor="name">Message:</label>
          <input name="message" placeholder="Enter your message" type="text" />
          <button>Submit</button>
          <br />
          {/* Logic to show form data if available... */}
          {name ? (
            <div>
              {" "}
              <h4>Here i did access data of all input field</h4>
              <br />
              <p>Name: {name}</p>
              <p>email: {email}</p>
              <p>message: {message}</p>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
