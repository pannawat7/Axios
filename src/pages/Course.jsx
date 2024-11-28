import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;
    setData(data_format);
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-8 mb-8 text-rose-300">Course</h1>
      <div className="flex justify-center">
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6">
      {data.map((course) => (
        <CourseCard key={course.id} {...course}/>
      ))}
    </div>
    </div>

    </>
  );
};

const CourseCard = (props) => {
    return (
      <div style={{ border: "1px solid black", padding: 20, marginBottom: 10 }}>
        <div>
          <img src={props.picture} alt="" style={{ width: 100 }}/>
        </div>
        <div>{props.title}</div>
        <div>{props.detail}</div>
        <div className="text-red-600">
            <NavLink to={"/course/" + props.id}>เนื้อหาในหลักสูตร</NavLink>
        </div>
      </div>
    );
  }
export default Course;
