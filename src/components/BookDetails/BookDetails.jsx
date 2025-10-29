import React, { useEffect, useState } from 'react'
import Loading from "../Loader/Loader";
import coverImg from "../../images/no_cover.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';


const URL = "https://openlibrary.org/works/";


function BookDetails() {

  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setbook] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    async function getBookDetails() {
      try {
        const res = await fetch(`${URL}${id}.json`);
        const data = await res.json();

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;

          const newBook = {
            description: description ? description.value : " No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", "): "No Subject places found",
            sunject_times : subject_times ? subject_times.join(", ") : "No Subject times found",
            subjects: subjects ? subjects.join(", ") : "No Subject found",
          };
          setbook(newBook);
        }else{
          setbook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        
      }
    }
    getBookDetails();
  },[id]);

  if(loading) return <Loading />

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={()=> navigate("/book")}>
          <FaArrowLeft size={22}/>
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book ?.cover_img} alt="cover" />
          </div>

          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>

             <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>

             <div className='book-details-item'>
               <span className='fw-6'>Subject Places:</span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>

            <div className='book-details-item'>
               <span className='fw-6'>Subject times:</span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>

            <div className='book-details-item'>
               <span className='fw-6'>Subjects:</span>
              <span className='text-italic'>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BookDetails