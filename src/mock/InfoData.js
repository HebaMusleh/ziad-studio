import { useTranslation } from "react-i18next";
import BG1 from "../assets/q3.jpg";
import BG2 from "../assets/q2.jpg";
import BG3 from "../assets/q1.jpg";
import BG4 from "../assets/q5.jpg";
import BG5 from "../assets/q4.jpg";
import BG6 from "../assets/q6.jpg";
import BG7 from "../assets/q7.jpg";

const InfoData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      question: t("q1"),
      answer: t("a1"),
      BG: BG1,
    },
    {
      id: 2,
      question: t("q2"),
      answer: t("a2"),
      BG: BG2,
      link: "true",
    },
    {
      id: 3,
      question: t("q3"),
      answer: t("a3"),
      BG: BG3,
    },
    {
      id: 4,
      question: t("q4"),
      answer: t("a4"),
      answer1: t("opt1"),
      answer2: t("opt2"),
      answer3: t("opt3"),
      answer4: t("opt4"),
      answer5: t("opt5"),
      BG: BG4,
      right:"true"
    },
    {
      id: 5,
      question: t("q5"),
      answer: t("a5"),
      BG: BG5,
    },
    {
      id: 6,
      question: t("q6"),
      answer: t("a6"),
      BG: BG6,
    },
    {
      id: 7,
      question: t("q7"),
      answer: t("a7"),
      BG: BG7,
    },
  ];
  return data;
};

export default InfoData;
