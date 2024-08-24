"use client";

import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { db } from "@/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./companies.module.scss";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, "Companies"));
        if (snapshot.exists()) {
          const companiesData = [];
          snapshot.forEach((childSnapshot) => {
            companiesData.push(childSnapshot.val());
          });
          setCompanies(companiesData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching companies: ", error.message);
      }
    };

    fetchData();
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
