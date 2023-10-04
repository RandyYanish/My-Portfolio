import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="py-3">
      <h2 className="font-serif text-metal-dark dark:text-purple-light md:text-5xl duration-500 flex-nowrap text-4xl py-2">
        Resume:
      </h2>
      <ol className="flex flex-col  overflow-hidden">
        <div
          aria-label="Freelance Web-Developer"
          className="flex flex-row dark:hover:bg-blue-light dark:bg-blue-light bg-blue-dark md:bg-transparent dark:hover:bg-opacity-10 dark:bg-opacity-10 bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg dark:hover:shadow-metal-dark hover:shadow-metal dark:shadow-metal-dark shadow-metal md:shadow-none"
        >
          <li className="w-1/3 text-right p-2 mt-1">
            <h3 className="text-sm dark:md:text-steel md:text-steel-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta-dark font-bold duration-300">
              Aug. 2023 - Current
            </h3>
          </li>
          <li className="w-2/3 text-left duration-300 p-2">
            <h3 className="text-lg dark:md:text-purple-light md:text-magenta dark:group-hover:text-teal-300 dark:text-teal-300 text-magenta duration-300">
              <a href="/">
                <span>
                  Full-Stack Developer • <span id="spacer"></span>
                  <span className="inline-block whitespace-nowrap">
                    Freelance
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-5 px-1"
                      aria-hidden="true"
                      data-darkreader-inline-fill=""
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <div className="dark:md:text-steel dark:group-hover:text-ice-light dark:text-ice-light duration-300">
              <ul>
                <li>
                  • Design and implement fullstack websites with tools like
                  GraphQL, SQL, and MongoDB, React, Tailwind, JavaScript, etc.
                </li>
                <li>
                  • Collaborated on projects while using Agile methodology for
                  efficient development for seamless integration.
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div
          aria-label="Specialty Sales at Target"
          className="flex flex-row hover:bg-blue-light hover:bg-opacity-10 overflow-hidden rounded-xl my-4 group duration-300  hover:shadow-lg hover:shadow-metal-dark"
        >
          <li className="w-1/3 text-right p-2 mt-1">
            <h3 className="text-sm text-steel group-hover:text-teal-500 duration-300">
              Oct. 2022 - Current
            </h3>
          </li>
          <li className="w-2/3 text-left duration-300 p-2">
            <h3 className="text-lg text-purple-light group-hover:text-teal-300 duration-300">
              <a href="/">
                <span>
                  Specialty Sales • <span id="spacer"></span>
                  <span className="inline-block whitespace-nowrap">
                    Target
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-5 px-1"
                      aria-hidden="true"
                      data-darkreader-inline-fill=""
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <div className="text-steel group-hover:text-ice-light duration-300">
              <ul>
                <li>
                  • Designed and implemented the back-room storage for both the
                  Electronics department and the Beauty department.
                </li>
                <li>
                  • Worked across multiple departments to ensure efficient
                  maximum output of labor use.
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div
          aria-label="Production Manager and Lighting Designer at Purple Hat Productions"
          className="flex flex-row hover:bg-blue-light hover:bg-opacity-10 overflow-hidden rounded-xl my-4 group duration-300  hover:shadow-lg hover:shadow-metal-dark"
        >
          <li className="w-1/3 text-right p-2 mt-1">
            <h3 className="text-sm text-steel group-hover:text-teal-500 duration-300">
              Jul. 2016 - Oct. 2022
            </h3>
          </li>
          <li className="w-2/3 text-left duration-300 p-2">
            <h3 className="text-lg text-purple-light group-hover:text-teal-300 duration-300">
              <a href="/">
                <span>
                  Production Manager & Lighting Designer •{" "}
                  <span id="spacer"></span>
                  <span className="inline-block whitespace-nowrap">
                    Purple Hat Productions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-5 px-1"
                      aria-hidden="true"
                      data-darkreader-inline-fill=""
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <div className="text-steel group-hover:text-ice-light duration-300">
              <ul>
                <li>
                  • Head Lighting Designer for over 40 productions and concerts.
                  Managed a group of 8-10 freelance stagehands.
                </li>
                <li>
                  • Facilitated the shipping and delivery/setup of professional
                  lighting equipment and established relationships with touring
                  companies to program and run concerts and events.
                </li>
                <li>
                  • Multi tasked objective completion and timeline
                  follow-through while working with several different production
                  groups (i.e., Sound, Lighting, Props).
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div
          aria-label="Mortgage Banker at Network Capital"
          className="flex flex-row hover:bg-blue-light hover:bg-opacity-10 overflow-hidden rounded-xl my-4 group duration-300  hover:shadow-lg hover:shadow-metal-dark"
        >
          <li className="w-1/3 text-right p-2 mt-1">
            <h3 className="text-sm text-steel group-hover:text-teal-500 duration-300">
              Mar. 2022 - Jun. 2022
            </h3>
          </li>
          <li className="w-2/3 text-left duration-300 p-2">
            <h3 className="text-lg text-purple-light group-hover:text-teal-300 duration-300">
              <a href="/">
                <span>
                  Mortgage Banker • <span id="spacer"></span>
                  <span className="inline-block whitespace-nowrap">
                    Network Capital
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-5 px-1"
                      aria-hidden="true"
                      data-darkreader-inline-fill=""
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <div className="text-steel group-hover:text-ice-light duration-300">
              <ul>
                <li>
                  • Continued to hit and surpass goals of 5 hours of talk time,
                  5 applications, and 3+ submissions for loans every week;
                  reached out to 200+ people daily
                </li>
                <li>
                  • Collected and assessed customer information and liabilities
                  to build out a custom refinance package that suits their needs
                  best, and effectively communicated this information with
                  customers.
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div
          aria-label="Production Manager and Lighting Designer at Purple Hat Productions"
          className="flex flex-row hover:bg-blue-light hover:bg-opacity-10 overflow-hidden rounded-xl my-4 group duration-300  hover:shadow-lg hover:shadow-metal-dark"
        >
          <li className="w-1/3 text-right p-2 mt-1">
            <h3 className="text-sm text-steel group-hover:text-teal-500 duration-300">
              Jul. 2016 - Oct. 2022
            </h3>
          </li>
          <li className="w-2/3 text-left duration-300 p-2">
            <h3 className="text-lg text-purple-light group-hover:text-teal-300 duration-300">
              <a href="/">
                <span>
                  Sales Professional & Leasing Consultant •{" "}
                  <span id="spacer"></span>
                  <span className="inline-block whitespace-nowrap">
                    Corwin Honda
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-5 px-1"
                      aria-hidden="true"
                      data-darkreader-inline-fill=""
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <div className="text-steel group-hover:text-ice-light duration-300">
              <ul>
                <li>
                  • Interacted with 50-100+ people every day, building a strong
                  customer basis through resolving issues, following up on
                  purchases, and guiding people through financing or leasing
                  their vehicles.
                </li>
                <li>
                  • Provided deep knowledge and personalized product guidance
                  tailored to individual needs in a timely manner, whether it is
                  over the phone, by email, or in person.
                </li>
              </ul>
            </div>
          </li>
        </div>
      </ol>
    </div>
  );
}

export default Resume;
