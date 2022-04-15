import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

function Contact() {
  const [state, handleSubmit] = useForm("meqnrrlj");
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2> Contact Me.</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Feel free to email me about any freelance projects or job
            opportunities.
          </label>
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          {state.succeeded && <span>Thank you! I will reply soon!</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
