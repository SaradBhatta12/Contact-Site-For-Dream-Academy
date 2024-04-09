import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/comp/Carousel.scss";
import { motion, animate } from "framer-motion";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
const Home = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
      >
        <div className="carausal-div">
          <img
            src={
              "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
        </div>
        <div className="carausal-div">
          <img
            src={
              "https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="carausal-div">
          <img src={one} />
        </div>
      </Carousel>

      <div className="quotes-of">
        The <br /> DREAM <br /> Academy
        <button className="donate">Donate Us</button>
      </div>

      <Counter />
    </div>
  );
};

const Counter = () => {
  const student = useRef(null);
  const teacher = useRef(null);
  const course = useRef(null);
  const teacherCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate(value) {
        teacher.current.textContent = value.toFixed() + "+";
      },
    });
  };
  const courseCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate(value) {
        course.current.textContent = value.toFixed() + "+";
      },
    });
  };
  const studentCount = () => {
    animate(0, 1000, {
      duration: 1,
      onUpdate(value) {
        student.current.textContent = value.toFixed() + "+";
      },
    });
  };
  return (
    <div className="clientSec" id="about-us">
      <div className="students" id="student-heading">
        <h1>
          Our <br /> Impact
        </h1>
      </div>
      <div className="students">
        <div className="student-count">
          <motion.h1 ref={student} whileInView={studentCount}></motion.h1>
          <p>Students</p>
        </div>
      </div>
      <div className="teachers">
        <div className="teacher-count">
          <motion.h1 whileInView={teacherCount} ref={teacher}></motion.h1>
          <p>Teachers</p>
        </div>
      </div>
      <div className="courses">
        <div className="course-count">
          <motion.h1 ref={course} whileInView={courseCount}></motion.h1>
          <p>Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
