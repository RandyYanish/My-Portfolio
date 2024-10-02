import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className='flex-col h-auto p-2'>
      <h2 className='font-serif text-metal-dark dark:text-violet-400 md:text-5xl duration-500 flex-nowrap text-4xl p-2 md:px-8 lg:px-24 xl:px-52 2xl:px-72 font-bold'>
        Resume:
      </h2>
      <ol className='flex flex-col'>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Full-Stack Developer'
            className='flex flex-row dark:hover:bg-opacity-20 dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-10 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Oct. 2023 - Current
              </h3>
            </li>
            <li className='w-7/8 text-left p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Project Manager/Full-Stack Developer • <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    A Buying Center and Detail-City
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    •	Developed a Dealer Management System on AWS servers for managing dealership inventory with React, Tailwind, DynamoDB, EC2, Route 53, and Node.js using a mobile-first design strategy.
                  </li>
                  <li>
                    •	Wrote a CRUD application for managing and handling database logic and storing customer information.
                  </li>
                  <li>
                    •	Maintained the site and continued development using marketing sources; improved web-flow and increased lead generation by 20%.
                  </li>
                  <li>
                    •	Coordinated implementation of Google Workspace, Google Voice, and Google Business.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Production Manager and Lighting Designer at Purple Hat Productions'
            className='flex flex-row dark:hover:bg-opacity-20 dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-10 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Jul. 2016 - Oct. 2022
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Lighting Designer/Production Manager •
                  <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Purple Hat Productions, Other
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    •	Directed the lighting design for over 40 productions and concerts.
                  </li>
                  <li>
                    •	Managed teams of 8-10 stagehands and developed an efficient plot design which led to a 20% reduction in setup time.
                  </li>
                  <li>
                    •	Coordinated the loading, shipping, and setup of professional lighting equipment to production sites.
                  </li>
                  <li>
                    •	Designed a base plot on the lighting board to decrease the amount of programming by 2 hours.
                  </li>
                  <li>
                    •	Optimized the setup of lighting equipment to be easily repeatable with the stagehands that I lead.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Mortgage Banker at Network Capital'
            className='flex flex-row dark:hover:bg-opacity-20 dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-10 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Mar. 2022 - Jun. 2022
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Mortgage Banker • <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Network Capital
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    •	Maintained daily goals of 5 applications and 5 hours of call time
                  </li>
                  <li>
                    •	Increased weekly loan submissions by 30%.
                  </li>
                  <li>
                    •	Analyzed customer financial liabilities and crafted customized refinance packages.
                  </li>
                  <li>
                    •	Developed a call script that decreased time spent on each call by 15%.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Sales Professional and Leasing Consultant at Corwin Honda'
            className='flex flex-row dark:hover:bg-opacity-20 dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-10 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100 mb-8'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Oct. 2018 - Jan. 2020
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Sales Professional & Leasing Consultant • 
                  <span id='spacer'> </span>
                  <span className='inline-block whitespace-nowrap'>
                    Corwin Honda
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    •	Consistently maintained a closing rate above 65% on first presentation of deals and 90% on final offers.
                  </li>
                  <li>
                    •	Increased personal customer engagement and gross profits from sales by 15% by improving product knowledge and communication skills.
                  </li>
                  <li>
                    •	Ranked in the top 20% of total sales per month between all dealerships in the region.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
      </ol>
    </div>
  );
}

export default Resume;
