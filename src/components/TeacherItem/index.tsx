import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC= (props) =>{
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F56371177_1349552705196428_2957646073528582144_n.jpg%3Foh%3De5d1992b065250251414bafc4701e0f3%26oe%3D5F2CFBA8&t=l&u=555481221973%40c.us&i=1513204485&n=4SYE6QLPvLst3piSn8VkLYdFAIYmt3cNWq48SzeDNK0%3D" />
                        <div>
                            <strong>Tiago Maggioni</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <br /><br />
                    Fusce non quam orci. Sed metus urna, finibus vitae fringilla eu, luctus id urna. Etiam at lectus eget libero auctor imperdiet.
                    </p>
                    <footer>
                        <p>
                            Preço/hora: <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
 
export default TeacherItem;