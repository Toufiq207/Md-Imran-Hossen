import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import Image from "../component/Image";
import Imran from "../assets/logo/imran.png";
import { motion } from "framer-motion";
const About = () => {
  return (
  <section className="py-10" id="about">
<Container>

    {/* Heading */}
  
      <Heading
        className="mb-8 text-center md:mb-10"
        text="About"
      />
    

    <div className="flex flex-col gap-8 md:flex-row md:gap-0">

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex w-full justify-center md:w-1/2"
      >
        <div className="aspect-square w-[70%] overflow-hidden  sm:w-[60%] md:w-[75%]">
          <Image
            src={Imran}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full items-center justify-center md:w-1/2 md:justify-start"
      >
        <p className="w-[90%] text-center text-base font-normal font-pop leading-relaxed text-gray-500 sm:text-lg md:w-[75%] md:text-left md:text-xl">
         Hi, I’m MD IMRAN HOSSEN, a passionate Digital Marketing Specialist with 2 years of experience in helping businesses build their online presence and reach the right audience.

I specialize in SEO, On-Page SEO, Local SEO & Google Maps, Facebook Marketing, Google Ads, YouTube Marketing, and YouTube SEO. I focus on practical digital marketing strategies that improve visibility, engagement, and online growth.

I’m always learning new tools and strategies to stay updated with the latest trends in digital marketing and deliver professional, effective results.
        </p>
      </motion.div>

    </div>
  </Container>
</section>
  );
};

export default About;