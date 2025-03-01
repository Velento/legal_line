import React, { useState } from 'react';
import './Footer.css';
import '../Main_page//Modal.css';
import phoneIcon from '../images/phone-white.png';
import telegramIcon from '../images/telegram-white.png';
import whatsappIcon from '../images/whatsapp-white.png';
import viberIcon from '../images/viber-white.png';
import instagramIcon from '../images/instagram-white.png';
import locationIcon from '../images/location-white.png';
import ContactModal from '../Main_page/ContactModal';

const Footer = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    const handleContactClick = () => {
        setShowContactModal(true);
    };

    const handleCloseModal = () => {
        setShowContactModal(false);
    };

    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-section contacts">
                    <h2>Контакты</h2>
                    <div className="icon-text">
                        <img src={phoneIcon} alt="Phone" className="contact-icon" />
                        <a href="tel:+48728279837" className="contact-link">+48728279837</a>
                    </div>
                    <div className="icon-text">
                        <img src={telegramIcon} alt="Telegram" className="contact-icon" />
                        <a href="https://t.me/katringoncharuk" className="contact-link" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </div>
                    <div className="icon-text">
                        <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
                        <a href="https://wa.me/yourwhatsapp" className="contact-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                    <div className="icon-text">
                        <img src={viberIcon} alt="Viber" className="contact-icon" />
                        <a href="viber://chat?number=%2B375295817240" className="contact-link" target="_blank" rel="noopener noreferrer">Viber</a>
                    </div>
                    <div className="icon-text">
                        <img src={instagramIcon} alt="Instagram" className="contact-icon" />
                        <a href="https://instagram.com/yourinstagram" className="contact-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-section info">
                    <h2>Информация</h2>
                    <div className="icon-text">
                        <img src={locationIcon} alt="Location" className="contact-icon" />
                        <p>Гданьск, ул. Грюнвальдская 122</p>
                    </div>
                    <p>ООО "Оминор", NIP 233455678</p>
                    <p><a href="#!">Политика конфиденциальности</a></p>
                </div>
                <div className="footer-section services">
                    <h2>Услуги</h2>
                    <p style={{ color: 'white' }}><a href="#services">Karta czasowego pobytu</a></p>
                    <p style={{ color: 'white' }}><a href="#services">Karta stałego pobytu</a></p>
                    <button onClick={handleContactClick}>Задать вопрос бесплатно</button>
                    <ContactModal show={showContactModal} onClose={handleCloseModal} />
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Все права защищены.
            </div>
        </footer>
    );
};

export default Footer;
