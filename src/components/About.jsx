import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >


       <br /> I wear many hats in the digital space. <br />
       I currently work as an Ecommerce Operations Associate and Digital Marketer at 6IXSENSES, Canada, 
       Where I develop, design and manage E-commerce web stores and websites as well as follow a data-driven approach in creating effective marketing strategies to drive sales and engagement. 
       But that's not all! I also work as the Head of Designing at AllegroGrafix Design Lab, managing a team of designers and developing design strategies. Additionally I freelance as a UI/UX Designer, 3D Graphic Artist, Animation Creator, and Web Developer. 
       My experience in these roles allows me to create engaging digital experiences while pushing the boundaries of what is possible in the digital space. 


      </motion.p>

 

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

<motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      <br /> When I am doing none of this you can find me : <br />
      <br /> - Live streaming God of War or Valorant on Twitch <a href="https://www.twitch.tv">(click here to view my stream) </a>  
      <br /> - Sticking my nose in a book <a href="https://literal.club/kavyalokuge">(click here to view the books I read) </a>  
      <br /> - Hanging out with peepz at Discord <a href="https://discord.com/channels/@me">(click here to have a chat) </a>  
      <br /> or just chilling out with Spotify <a href="https://open.spotify.com/user/31lb7i7cdvasoh6p6otl4cwafnh4">(click here to listen with me together) </a>  


      </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
