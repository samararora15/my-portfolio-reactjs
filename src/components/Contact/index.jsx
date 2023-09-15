import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() =>{
        setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'default_service',
                'template_onlmr7k',
                refForm.current,
                'UGI2B_Dlnr8gxKEVA'
            )
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        letterClass={letterClass }
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'> <input type="text" name='name' placeholder='Name' required /></li>
                                <li className='email'> <input type="email" name='email' placeholder='Email' required /></li>
                                <li><input type="text" placeholder="Subject" name="subject" required></input></li>
                                <li> <textarea name="message" placeholder='Message' required></textarea> </li>
                                <li><input type="submit" className='flat-button' value="SEND" /></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Samar Arora
                    <br />
                    27 Street Alambagh, 226005
                    <br />
                    Lucknow
                    <br />
                    India
                    <br />
                    <span>samararora1020@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[26.821859, 80.910583]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                        <Marker position={[26.821859, 80.910583]}>
                            <Popup>Samar lives here, come over for a cup of coffee\./</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact