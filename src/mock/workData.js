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

//sedra
import img31 from "../assets/sedra.png";

//3basi
import img41 from "../assets/3basi1.png";

//Fayyah
import img51 from "../assets/dabah.png";

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
      title: t("sedra"),
      description: t("sedraDesc"),
      img1: img31,
      cover: cover2,
    },
    {
      id: 4,
      title: t("lukka"),
      description: t("lukkaDesc"),
      img1: img41,
      cover: cover2,
    },
    {
      id: 5,
      title: t("lukka"),
      description: t("lukkaDesc"),
      img1: img51,
      cover: cover2,
    },
  ];
  return data;
};

export default WorkData;
