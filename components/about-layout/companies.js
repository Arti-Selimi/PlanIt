"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./companies.module.scss";
import { fetchData } from "../database-components/companies-firebase";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchData(setCompanies).catch((error) =>
      console.error("Failed to fetch data:", error)
    );
  }, []);

  return (
    <>
      {companies && companies.length ? (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={4.5}
          spaceBetween={30}
          className={styles.grid}
          initialSlide={1}
        >
          {companies.map((company, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/logos/${company.img}`}
                alt={`${company.name} logo`}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p>{company.slug}</p>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className={styles.loading}>Loading ...</p>
      )}
    </>
  );
};

export default Companies;
