"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./companies.module.scss";
import { fetchData } from "../database-components/companies-firebase";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchData(setCompanies);
  }, []);

  return (
    <Swiper
      loop
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={styles.grid}
      slidesPerView={7}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 6 }
      }}
    >
      {companies.map((company, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <div className={styles.imageContainer}>
            <Image
              src={`/images/logos/${company.img}`}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <hr />
          <div>
            <p>{company.slug}</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
};

export default Companies;
