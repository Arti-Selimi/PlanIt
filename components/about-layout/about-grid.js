"use client";

import Image from "next/image";
import styles from "./about-grid.module.scss";
import logo from "@/public/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";

export default function AboutGrid() {
  return (
    <Swiper 
      loop
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={styles.grid}
      slidesPerView={5} 
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <div className={styles.imageContainer}>
            <Image src={logo} alt="logo" layout="responsive" />
          </div>
          <div>
            <p>Straight gay</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
