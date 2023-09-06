import { useTranslation } from "react-i18next";

// padelco img
import img1 from "../assets/padelco.png";
import cover from "../assets/pedalcoCover.png";
import img2 from "../assets/pedalco2.png";
import img3 from "../assets/pedalco3.png";
import img4 from "../assets/pedalco4.png";
import img5 from "../assets/pedalco5.png";
import img6 from "../assets/pedalco6.png";
import img7 from "../assets/pedalco7.png";

//lukka
import img21 from "../assets/lukkan.png";
import cover2 from "../assets/lukka.jpg";


//3basi
import img41 from "../assets/3basi1.png";
import cover4 from "../assets/3basi7.png";
import img42 from "../assets/3basi2.png";
import img43 from "../assets/3basi3.png";
import img44 from "../assets/3basi4.png";
import img45 from "../assets/3basi5.png";
import img46 from "../assets/3basi6.png";
import img47 from "../assets/3basi1.png";

//Fayyah
import img51 from "../assets/dabah.png";
import cover5 from "../assets/fayyahCover.jpg";

import img61 from "../assets/work7.jpg";
import cover6 from "../assets/work72.jpg";
import img62 from "../assets/work73.jpg";

import img71 from "../assets/work8.jpg";
import cover7 from "../assets/work82.jpg";
import img72 from "../assets/work83.jpg";
import img74 from "../assets/work85.jpg";
import img75 from "../assets/work86.jpg";

import img81 from "../assets/work9.jpg";
import cover8 from "../assets/work92.jpg";
import img82 from "../assets/work93.jpg";
import img83 from "../assets/work94.jpg";
import img84 from "../assets/work95.jpg";
import img85 from "../assets/work96.jpg";

import img91 from "../assets/work10.jpg";
import cover9 from "../assets/work101.jpg";
import img92 from "../assets/work102.jpg";
import img93 from "../assets/work103.jpg";

import img101 from '../assets/work11.jpg';
import cover10 from '../assets/work116.jpg';
import img102 from '../assets/work115.jpg';
import img103 from '../assets/work114.jpg';
import img104 from '../assets/work113.jpg';
import img105 from '../assets/work112.jpg';

const WorkData = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t("padelco"),
      description: t("padelcoDesc"),
      img1: img1,
      cover: cover,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      img7: img7,
    },
    {
      id: 2,
      title: t("lukka"),
      description: t("lukkaDesc"),
      img1: img21,
      cover: cover2,
    },
    {
      id: 3,
      title: t("work7"),
      description: t("work7Desc"),
      img1: img71,
      cover: cover7,
      img2: img72,
      img3: img74,
      img4: img75,
    },
    {
      id: 4,
      title: t("3basi"),
      description: t("3basiDesc"),
      img1: img41,
      cover: cover4,
      img2: img42,
      img3: img43,
      img4: img44,
      img5: img45,
      img6: img46,
      img7: img47,
    },
    {
      id: 5,
      title: t("fayyah"),
      description: t("fayyahDesc"),
      img1: img51,
      cover: cover5,
    },
    {
      id: 6,
      title: t("work6"),
      description: t("work6Desc"),
      img1: img61,
      cover: cover6,
      img2: img62,
      img3: img61,
    },
    {
      id: 8,
      title: t("work8"),
      description: t("work8Desc"),
      img1: img81,
      cover: cover8,
      img2: img82,
      img3: img83,
      img4: img84,
      img5: img85,
    },
    {
      id: 9,
      title: t("work9"),
      description: t("work9Desc"),
      img1: img91,
      cover: cover9,
      img2: img92,
      img3: img93,
    },
    {
      id: 10,
      title: t("work10"),
      description: t("work10Desc"),
      img1: img101,
      cover: cover10,
      img2: img102,
      img3: img103,
      img4: img104,
      img5: img105,
    },
  ];
  return data;
};

export default WorkData;
