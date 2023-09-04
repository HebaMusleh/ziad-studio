
import { useTranslation } from 'react-i18next';
import BG1 from '../assets/q1.png';
import BG2 from '../assets/q2.png';
import BG3 from '../assets/q3.png';
import BG4 from '../assets/q4.png';
import BG5 from '../assets/q5.png';
import BG6 from '../assets/q6.png';
import BG7 from '../assets/q7.png';

const InfoData = () => {
    const {t} = useTranslation();
    const data =[
        {
            id:1,
            question:t('q1'),
            answer:t('a1'),
            BG:BG1
        },
        {
            id:2,
            question:t('q2'),
            answer:t('a2'),
            BG:BG2,
            link:'true'
        },
        {
            id:3,
            question:t('q3'),
            answer:t('a3'),
            BG:BG3
        },
        {
            id:4,
            question:t('q4'),
            answer:t('a4'),
            BG:BG4
        },
        {
            id:5,
            question:t('q5'),
            answer:t('a5'),
            BG:BG5
        },
        {
            id:6,
            question:t('q6'),
            answer:t('a6'),
            BG:BG6
        },
        {
            id:7,
            question:t('q7'),
            answer:t('a7'),
            BG:BG7
        },
    ]
  return (data)
}

export default InfoData