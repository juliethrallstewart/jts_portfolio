import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import welldone_2 from '../assets/images/welldone_2.png';
import mud_game from '../assets/images/mud_game.png';
import one_line_a_day from '../assets/images/one_line_a_day.png';
import replate from '../assets/images/replate.png';
import bubl from '../assets/images/bubl.png';


import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
      
        <header className="major">
        <ul className="icons major">
          {/* <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li> */}
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
          <h2>
            Recent team projects
          </h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p> */}
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <a href="https://well-done-h9vshme77.now.sh/"><img src={welldone_2} alt="" /></a>
        </div>
        <div className="content">
          <h2>
          <a href="https://well-done-h9vshme77.now.sh/">WellDone</a>
          </h2>
          <p>WellDone International is an existing non-profit working to improve global access to clean water by providing reports on well activity that may facilitate technical assistance
            to malfunctioning wells.</p>
          <p>Full-Stack Software Engineer on a 6 person development team.</p>
          <p>Refactored and built onto an existing frontend utilizing React.</p>
          <p>Key contributor in successful deployment of a data persisting backend utilizing Node, Express, PostgreSQL.</p>

          <p><a href="https://github.com/labs17-WellDone/backend">Link to github backend</a></p>

        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://trusting-pare-363667.netlify.com/"><img src={replate} alt="" /></a>
        </div>
        <div className="content">
          <h2>
          <a href="https://trusting-pare-363667.netlify.com/">Replate</a>
          </h2>
          <p>Replate, working to eliminate food waste by connecting non-profits to excess food in restaurants to disperse to families in need.</p>
          <p>Frontend Engineer on a 6 person development team.</p>
          <p>React, Context API, Token Authentication, Formik, Yup</p>
          <p><a href="https://github.com/labs17-WellDone/backend">Link to github</a></p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
        <a href="https://one-line-a-day-app.netlify.com/"><img src={one_line_a_day} alt="" /></a>
        </div>
        <div className="content">
          <h2>
          <a href="https://one-line-a-day-app.netlify.com/">One Line A day</a>
          </h2>
          <p>Daily journaling app.</p>
          <p>Frontend Engineer on a 5 person development team.</p>
          <p>React, Token Authentication</p>
					<p><a href="https://github.com/build-one-line-a-day/one-line-a-day-FE">Link to github</a></p>

        </div>
      </section>
      <section className="spotlight">
        <div className="image">
        <a href="https://boring-liskov-58c04c.netlify.com/"><img src={mud_game} alt="" /></a>
        </div>
        <div className="content">
          <h2>
          <a href="https://boring-liskov-58c04c.netlify.com/">Mud Game</a>
          </h2>
          <p>Mud adventure game traversing a map.</p>
          <p>Full-Stack Software Engineer on a 5 person development team.</p>
          <p>Django (backend), React (frontend)</p>
					<p><a href="https://github.com/CS24-Build-Week-1">Link to github</a></p>

        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://jetsbubl.netlify.com/"><img src={bubl} alt="" /></a>
        </div>
        <div className="content">
          <h2>
            <a href="https://jetsbubl.netlify.com/">Bubl</a>
          </h2>
          <p>Connecting highschool students who share similar interests creating healthy social "bubbles".</p>
          <p>Designed and built landing page on a 5 person development team.</p>
          <p>Fundamental JavaScript, LESS, Class Components</p>
					<p><a href="https://github.com/team-bubl/bubl-ui-julie">Link to github</a></p>

        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Experience</h2>

        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Frontend</h3>
            <p>
              JavaScript, React, Redux, Token Authentication, HTML, CSS, SCSS, LESS
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Backend</h3>
            <p>
              Node, Express, Knex, RESTful APIs, SQL, PostGresQl, DataBase Architecture, Authentication & Validation, Heroku 
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Collaboration</h3>
            <p>
              Experience on multiple Agile remote teams, communicating with stakeholders, team leadership and Git.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Test Driven Development</h3>
            <p>
              Selenium WebDriver (Python/Django), Selenium IDE
            </p>
          </li>
          <li className="icon solid fa-code" style={{textAlign: 'center'}}>
            <h3>Languages</h3>
            <p>
              Python, JavaScript
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Get in Touch</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
            <button><a href="mailto:juliethrallstewart@gmail.com" target="_blank">Contact</a></button>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

// {/* <div class="contact">
// <form method="post" action="mailto:juliethrallstewart@gmail.com">
//       <div class="input">
//         <input type="text" name="name" id="name" placeholder="Name" />
//       </div>
//       <div class="input">
//         <input type="text" name="email" id="email" placeholder="Email" />
//       </div>
//       <div class="input">
//         <input type="text" name="subject" id="subject" placeholder="Subject" />
//       </div>
//       <div class="input message">
//         <textarea name="message" id="message" placeholder="Message"></textarea>
//       </div>
//       <div class="input">
//         <input type="submit" value="Send Message"/>
//         {/* <input type="reset" value="Clear Form" class="alt" /> */}             
//       </div>
// </form>
// </div>
// </li>
// <li> */}
