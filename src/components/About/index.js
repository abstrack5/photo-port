import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
    return(
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{width:'100%'}} alt='cover' />
        <p>
            lorem ipsum dolor sit amet. Cum societes natoque penatibus et justo. Lorem ipsum dolor sit amet. Cum societes natoque penatibus et justo. Lorem ipsum dolor sit amet. Cum societes natoque penatibus et justo. Lorem ipsum dolor sit amet. Cum societes natoque penatibus et justo. Lorem ipsum dolor sit amet.
        </p>
        </section>
        
    )
}

export default About;