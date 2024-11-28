import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapters = () => {
  const params = useParams();
  const id = params.id;
  // ยิง api ไป get chapter ยังไง?
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    // เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);
  return (
    <>
    <h1 className="text-5xl font-bold text-center mt-16 text-rose-300">Chapters</h1>
      <div className="flex justify-center">
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6">
      {data.map((c) => (
        <ChapterCourse Key={c.ch_id} {...c}/>
      ))}
    </div>
    </div>
  
    </>
    );
  };
  const ChapterCourse = (props) =>{
    return (
    
      <div className="mt-16 bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
      <div className="relative pb-56 mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src={`https://www.youtube.com/embed/${props.ch_url}`}
          title="Course Video"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-gray-700">
        <p className="font-medium text-lg mb-2 flex justify-between item-center space-x-6">
          <span className="font-bold text-gray-900">Views: </span>{props.ch_view}
          <span className="font-bold text-gray-900 flex justify-between item-center space-x-6">Total Time: </span>{props.ch_timetotal}
        </p>
      </div>
    </div>
  
    );
};

export default Chapters;
