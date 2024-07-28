// src/components/Modal.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Modal.css';

const Modal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an7fqn8', 'template_3f8r48e', e.target, 'aCwG3r1EsKwLz0F1x')
      .then((result) => {
        console.log(result.text);
        setConfirmationMessage('Mensaje enviado con éxito');
        setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
        setTimeout(() => {
          setConfirmationMessage('');
          closeModal();
        }, 3000); // Cerrar el modal después de 3 segundos
      }, (error) => {
        console.log(error.text);
        setConfirmationMessage('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Comunícate con Nosotros</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tu Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Tu Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {confirmationMessage && (
          <div className="confirmation-message">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
