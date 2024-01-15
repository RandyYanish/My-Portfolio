import React from 'react';
import credlyBadge from '../assets/credlyBadge.png';

function AboutIntro() {
  const shopUrl = () => {
    window.open('https://shop--123-f2fa6ddf19c1.herokuapp.com/', '_blank');
  };

  const eventHorizonUrl = () => {
    window.open(
      'https://mighty-sands-41780-17537002c1ec.herokuapp.com/',
      '_blank',
    );
  };

  return (
    <div className='flex-col items-center xl:px-52 px-4 h-auto lg:px-24 2xl:mx-24 sm:mx-10'>
      <div className='text-left flex flex-col md:flex-row md:items-center sm:p-4'>
        <div className='text-justify'>
          <h1 className='font-serif text-metal-dark dark:text-violet-400 md:text-5xl duration-500 flex-nowrap text-4xl font-bold'>
            About Randall:
          </h1>
          <div className='mb-0 pb-0'>
            <div className='flex flex-col md:flex-row items-center'>
              <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4 md:w-2/3'>
                <span className='text-steel-dark dark:text-teal-400 font-serif text-xl sm:text-5xl'>
                  Hey, all!
                </span>{' '}
                I am skilled Full-Stack Developer with a strong foundation in both front-end and back-end development. I hold a Full-Stack Software Engineering Certificate from the University of Minnesota, demonstrating my commitment to continuous learning and growth in the field. Check it out by clicking on the badge to the right!
              </p>
              <div className='p-1'>
                {/* Add the link to your Credly badge here */}
                <div className='flex justify-center'>
                  <a
                    className='scale-75 sm:hover:scale-90 duration-500 w-auto h-auto my-[-50px] md:my-[0px]'
                    href='https://www.credly.com/badges/f942e08a-7310-4ffb-8d05-e23612003ed5/'
                    target='_blank' // Opens in a new tab
                    rel='noopener noreferrer' // Security best practice
                  >
                    <img
                      src={credlyBadge}
                      alt='Credly Badge for Full Stack Web Development Certificate from the University of Minnesota'
                    />
                  </a>
                </div>
              </div>
            </div>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              My technical skills include proficiency in front-end and back-end technologies, such as HTML5, CSS3, JavaScript, React, Bootstrap, Bulma, Axios, Tailwind, Handlebars, Node.js, Express, SQL, MongoDB, Mongoose, Graphql, REST-API, Heroku, Atlas, and DynamoDB. I am also well-versed in Agile methodologies and experienced in collaborative development.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Throughout my career, I have successfully translated my technical expertise into practical application. In recent, as a Full-Stack Developer/Project Manager, I worked on projects like
              <span className='text-steel-dark dark:text-teal-400 font-serif text-xl sm:text-3xl cursor-pointer' onClick={shopUrl}>
                {' '}
                "123-Shop!"
              </span>{' '}
              and
              <span className='text-steel-dark dark:text-teal-400 font-serif text-xl sm:text-3xl cursor-pointer' onClick={eventHorizonUrl}>
                {' '}
                "Event-Planner,"
              </span>{' '}
              showcasing my ability to collaborate, innovate, and deliver
              high-quality web applications. My problem-solving skills and meticulous approach to development have consistently produced consistent and outstanding results.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Beyond software engineering, I have explored a diverse
              professional background in sales, production management, and retail. During my time with Target, I developed skills in designing and implementing efficient back-room storage systems and optimizing labor utilization across multiple departments. Before my retail experience, I worked on adaptability and strong interpersonal skills, which was showcased in different roles from being the Head Lighting Designer and Production Manager at Purple Hat Productions to excelling as a Mortgage Banker at Network Capital.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Most notably in my time in sales, I received the President's Award in 2019 for exceptional sales leadership at a Honda dealership, emphasizing my ability to build strong customer relationships and exceed performance goals. I have also generously contributed time to the community, volunteering extensively with the Community Theatre.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              I am a versatile and accomplished professional, known for my technical prowess, problem-solving abilities, and dedication to both personal and community growth. My journey as a Full-Stack Software Developer is marked by continuous learning, adaptability, and a commitment to excellence.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Thank you all for stopping by, go check out my projects below!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
