import { useEffect } from "react";
import "./Calendary.css"
import { fetchCalendary } from "../functions/getCalendary";
import { useState } from "react";

export default function Calendary() {
    const [calendary, setCalendary] = useState([]);

    useEffect(() => {
        const getCalendaryData = async () => {
            const calendaryData = await fetchCalendary();
            setCalendary(calendaryData);
        };
        getCalendaryData();
    }, []);

    const cardStyle = {
        transform: 'translate3d(3.9992px, 0.94392px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        opacity: 1,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
    };

    return (
        <div className='calendary-end'>
            <div className="calendary-text">
                <h2>
                    <span>Para inscribirte a la próxima charla: </span>
                    por favor dirígete al formulario de Google y complétalo.
                </h2>
            </div>
            <a className='calendary' target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSd8esyDHD5cwU_8PcQVGQ4AdlYS9AWUJ3HwfYw0tbqPMiAsLg/viewform" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                    data-w-id="eae4afbb-858b-d41e-f7a4-edbad749695c"
                    style={cardStyle}
                    className="about-marketers-date-card"
                >
                    <div className="about-marketers-top">
                        <div className="about-marketers-day">{calendary.day}</div>
                        <div className="about-marketers-month">{calendary.month}</div>
                    </div>
                    <div className="divider about-marketers-card"></div>
                    <div className="about-marketers-date-text">
                        {calendary.time} hs <br /> {calendary.title}
                    </div>
                </div>
            </a>
            <div>
            </div>
        </div>
    )
}