import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/user.png'

import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/autoplay';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import 'swiper/swiper.min.css';

// const swiper = new Swiper('.swiper', {
//   autoplay: {
//     delay: 5000,
//   },
// });

const data = [
  {
    avatar : AVATAR,
    name : 'ABC',
    review : 'guigjkjkvjkgk'
  },
  {
    avatar : AVATAR,
    name : 'DEF',
    review : 'guigjkjkvjkgk'
  },
  {
    avatar : AVATAR,
    name : 'GHI',
    review : 'guigjkjkvjkgk'
  },
  {
    avatar : AVATAR,
    name : 'JKL',
    review : 'guigjkjkvjkgk'
  },
  {
    avatar : AVATAR,
    name : 'MNO',
    review : 'guigjkjkvjkgk'
  }
]
function Testimonials() {
  return (
    <section id='testimonials'>
       <h5>Review from Clients</h5>    
       <h2>Testimonials</h2>

       <Swiper className="container testimonials_container"
       modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{delay:1000}}
      pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                 <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
           </SwiperSlide>
              )
              
            })
          }  
       </Swiper>
    </section>
  )
}

export default Testimonials
