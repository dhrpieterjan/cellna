import "./formulier.scss";
import Container from "../components/container";
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';


export default function Formulier() {
    const [isSending, setIsSending] = useState(false);
    const form = useRef(null);

    function sendEmail(e) {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm('service_80rauhj', 'template_prnufqs', e.target, 'user_GRtqegUc6mohTs6lM6oTi')
            .then((result) => {
                console.log(result.text);
                document.getElementById(form.current.id).reset();
            }, (error) => {
                console.log(error.text);
            }).finally(() => {
                setIsSending(false);
            });
    }

    return (

        <div className="formulier" id="contact">

            <div
                className="bollen"
                style={{ backgroundImage: "url(../static/bollen.png)" }}>
                <h2 className="sub">Contacteer ons:</h2>
            </div>
            <Container color="#F3F5F6">
                <form className="formulierken" id="formulierken" onSubmit={sendEmail} encType="text/plain" ref={form}>
                    <div className="row">
                        <div className="element">
                            <label htmlFor="to_name">Voornaam</label>
                            <input
                                name="to_name"
                                className="child"
                                type="text"
                                placeholder="Voornaam"
                                required
                            />
                        </div>

                        <div className="element">
                            <label htmlFor="to_name_fam">Naam</label>

                            <input
                                name="to_name_fam"
                                className="child"
                                type="text"
                                placeholder="Naam"
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="element">
                            <label htmlFor="reply_to">Email</label>
                            <input
                                name="reply_to"
                                className="child"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="element">
                            <label htmlFor="phone">Telefoonnummer</label>
                            <input
                                name="phone"
                                className="child"
                                type="text"
                                placeholder="Telefoonnummer"
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="element">
                            <label htmlFor="message">Uw bericht</label>
                            <textarea type="textarea"
                                name="message"
                                className="child"
                                required
                            ></textarea>
                        </div>

                    </div>
                    <div className="row right">
                        <button type="submit" disabled={isSending} className="button"> {isSending ? "Verzonden..." : "Verzend >"} </button>
                    </div>
                </form>
            </Container>

        </div>
    )
}