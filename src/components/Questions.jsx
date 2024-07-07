// src/components/Pricing.js
import React, { useState } from 'react';
import "./Questions.css"

const Questions = () => {
   
    const faqData = [
        {
            question: '¿Cómo puedo inscribirme en una charla?',
            answer: 'Puedes inscribirte en nuestras charlas completando el formulario de inscripción en nuestro sitio web. Selecciona la charla de tu interés y proporciona la información requerida para asegurar tu lugar.',
        }, 
        {
            question: '¿Dónde se llevan a cabo las charlas?',
            answer: 'Nuestras charlas se realizan en diversos lugares, incluidos hoteles y centros comunitarios. Puedes consultar la ubicación específica de cada charla en nuestro calendario de eventos en el sitio web.',
        }, 
        {
            question: '¿Las charlas tienen algún costo?',
            answer: 'Algunas de nuestras charlas son gratuitas, mientras que otras pueden tener un costo de inscripción para cubrir los gastos del evento. La información sobre los costos está disponible en la descripción de cada charla en nuestro sitio web.',
        }, 
        {
            question: '¿Puedo sugerir un tema para una futura charla?',
            answer: '¡Por supuesto! Valoramos las sugerencias de nuestra comunidad. Puedes enviar tus ideas y propuestas de temas a través de nuestro formulario de contacto o directamente a nuestro correo electrónico.',
        },
        {
            question: '¿Quién está detrás de este programa?',
            answer: 'Este programa es organizado por la Iglesia La Cumbre, una comunidad dedicada a promover el bienestar social y espiritual a través de eventos educativos y de apoyo a la comunidad.',
        }
    ];


    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    return (
        <div id='faq' className='faq'>
            <div className="faq-container">
            <h1>Sección de Preguntas Frecuentes</h1>
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                        <h3>{item.question}</h3>
                        <p className="answer">{item.answer}</p>
                    </div>
                ))}
            </div></div>
    );
};

export default Questions;
// MI CSS