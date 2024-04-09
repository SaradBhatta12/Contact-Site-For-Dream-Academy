import React, { useState } from "react";
import "../scss/comp/Contact.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

const ContactForm = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting

    try {
      await axios.post("https://server-ten-bay.vercel.app/", {
        name,
        email,
        message,
      });

      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false); // Reset loading state to false regardless of success or failure
      setFullName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Us</h2>
      {loading ? (
        <TailSpin color="#00BFFF" height={80} width={80} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? (
              <TailSpin type="ThreeDots" color="#fff" height={20} width={20} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
      <div className="quotes-container">
        <p className="quote">
          "The only limit to our realization of tomorrow will be our doubts of
          today." - Franklin D. Roosevelt
        </p>
        <p className="quote">
          "Innovation distinguishes between a leader and a follower." - Steve
          Jobs
        </p>
        <p className="quote">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts." - Winston Churchill
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactForm;
