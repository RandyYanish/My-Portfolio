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

  const linkedInUrl = () => {
    window.open('https://www.linkedin.com/in/randalltaylor98/', '_blank');
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
                While you are checking out my portfolio, make sure to add me on <span className='text-blue-500 dark:text-teal-300 font-serif text-xl sm:text-3xl cursor-pointer hover:text-teal-400 dark:hover:text-yellow-400 duration-200' onClick={linkedInUrl}>LinkedIn.</span> I am a versatile and accomplished Full Stack Developer, with a strong foundation in both front-end and back-end development. I hold a Full Stack Web Development Certificate from the University of Minnesota, and am continuing my education while pursuing a BS in Computer Science at Colorado State University, demonstrating my commitment to continuous learning and growth in the field.
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
              As a Full Stack Developer at A Buying Center, I built and implemented an AWS DynamoDB backend and hosted the site on AWS Console using CloudFront, allowing customers to enter information and schedule appointments. I also created authorized access pages for employees to access and sort through customer data. My technical skills encompass a wide range of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, SQL, MongoDB, and many more.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Throughout my career, I have successfully translated my technical expertise into practical application. In recent, as a Full-Stack Developer/Project Manager, I worked on projects like
              <span className='text-blue-500 dark:text-teal-300 font-serif text-xl sm:text-3xl cursor-pointer hover:text-teal-400 dark:hover:text-yellow-400 duration-200' onClick={shopUrl}>
                {' '}
                "123-Shop!"
              </span>{' '}
              and
              <span className='text-blue-500 dark:text-teal-300 font-serif text-xl sm:text-3xl cursor-pointer hover:text-teal-400 dark:hover:text-yellow-400 duration-200' onClick={eventHorizonUrl}>
                {' '}
                "Event-Planner,"
              </span>{' '}
              showcasing my ability to collaborate, innovate, and deliver
              high-quality web applications. My problem-solving skills and meticulous approach to development have consistently produced consistent and outstanding results.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Beyond software engineering, I have a diverse professional background, displaying my organizational, interpersonal, and problem-solving abilities in different roles and industries. I have designed and implemented efficient back-room storage solutions for Target, reducing lost items and increasing productivity. I also served as the Head Lighting Designer and Production Manager at Purple Hat Productions, managing a team of freelance stagehands and delivering high-quality lighting and sound for over 40 productions and concerts.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              I am known for my adaptability, dedication, and innovation, as well as my ability to build strong customer relationships and exceed performance goals. I received the President's Award in 2019 for my exceptional sales leadership at a Corwin Honda, and I have generously contributed my time to the community, volunteering extensively with the Fargo-Moorhead Community Theatre. My journey as a Full Stack Developer is marked by continuous learning, collaboration, and excellence.
            </p>
            <p className='text-ice-dark dark:text-ice-light dark:text-opacity-85 font-sans text-lg sm:text-2xl p-1 py-4'>
              Thank you all for stopping by! go check out my projects below and send me a message on <span className='text-blue-500 dark:text-teal-300 font-serif text-xl sm:text-3xl cursor-pointer hover:text-teal-400 dark:hover:text-yellow-400 duration-200' onClick={linkedInUrl}>LinkedIn</span> if you want to connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
