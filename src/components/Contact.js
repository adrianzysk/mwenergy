import React, { useRef } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import phone from '../png/phone.png';
import mark from '../png/mark.png';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_asx4t9d', 'contact_form', form.current, 'user_name_for_service_')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('someForm').reset();
    alert('You have sent email.');
  };
  return (
    <section className="section-padding margin" id="contact">
      <h1 className="heading">KONTAKT</h1>
      <div className="contact">
        <div className="flexBox half-width">
          <form id="someForm" className="width" ref={form} onSubmit={sendEmail}>
            <div className="flexBox">
              <label>IMIĘ I NAZWISKO (WYMAGANE)</label>
              <input type="text" required name="user_name" />
              <label>ADRES EMAIL (WYMAGANE)</label>
              <input type="email" required name="from_name" />
              <label>TEMAT</label>
              <input type="text" name="user_subject" />
              <label>WIADOMOŚĆ</label>
              <textarea name="message" rows={10} />
              <input type="submit" value="WYŚLIJ" />
            </div>
          </form>
        </div>
        <div className="map">
          <div className="map-width">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.892885467878!2d21.340461417443848!3d53.38096599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e0f50d15549b7%3A0xe90574746e576fb7!2sKurpiowska%201%2C%2007-430%20Myszyniec!5e0!3m2!1spl!2spl!4v1646248759669!5m2!1spl!2spl"
              className="iframe"
            />
            <div className="contact-box">
              <h3 className="heading-bottom">MWENERGY Adrian Wiśniewski</h3>
              <p>
                <a className="contact-text" href="tel:+48666666666">
                  <img src={phone} />
                  <p className="number">+ 48 88 888 88 88</p>
                </a>
              </p>
              <p>
                <div className="contact-text">
                  <img src={mark} />
                  <p className="number">11-010 Olsztyn ul. Tropikalna 9</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
