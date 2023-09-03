import { useTranslation } from "react-i18next";

import icon from "../assets/icon.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";

const Data = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("step1"),
      icon: icon,
      iconBg: "#E03131",
      num: "Step -1-",
    },
    {
      title: t("step2"),
      icon: icon2,
      iconBg: "#FFDB77",
      num: "Step -2-",
    },
    {
      title: t("step3"),
      icon: icon3,
      iconBg: "#649D54",
      num: "Step -3-",
    },
    {
      title: t("step4"),
      icon: icon4,
      iconBg: "#6BBFF6",
      num: "Step -4-",
    },
    {
      title: t("step5"),
      icon: icon5,
      iconBg: "#D0558F",
      num: "Step -5-",
    },
    {
      title: t("step6"),
      icon: icon6,
      iconBg: "#FD8758",
      num: "Step -6-",
    },
  ];

  return data;
};

export default Data;
