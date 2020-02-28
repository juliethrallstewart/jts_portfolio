import React from 'react';

import Layout from '../components/Layout';
import profile_pic from '../assets/images/profile-pic.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Me</h2>
        <p>I bring a track record of taking on challenges, helping others, learning new technologies, leadership, and experience collaborating on teams.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Background</h3>
          <p>
          
          My professional career began as a 911 Operator. During that career, I sought out additional training on mental health due to the stress of the job on myself and my coworkers, as a result my employer placed me into courses that certified me in supporting individuals in a higher stress job. The result was the development of Crisis and Peer Support Teams requiring hours spent writing the program guidelines, and a leadership role. After our success in our workplace, I was requested to speak at a regional conference presenting to Directors and Supervisors from other agencies. 
          <img id="profile" src={profile_pic} />
          </p>

          <p>
          Towards the end of my 911 Career, I was privileged to witness software engineering when I had an opportunity to be part of a small team that was developing an app. I stepped into the role of aggregating data and I loved working as an integral part of a small team. But what also stood out to me, was the potential positive impact the app could result in because someone could engineer it. 

          </p>

          {/* <hr /> */}

          {/* <h4>Feugiat aliquam</h4> */}
          <p>
          I left my job at 911 to learn HTML, CSS, and JavaScript. Shortly after I was offered an opportunity to engineer software tests for a large application that would be built using the Django framework.  I  quickly ramped up learning the required language skills and responsibilities of the position.  Over the next 18 months, I would write the end-to-end tests, unit tests, and take on additional roles including writing technical documents, incorporating translations, implementing email templates, and traveling to facilitate User Acceptance Testing at headquarters.

          </p>

          <p>
          At  this time I knew for sure that I wanted to further develop myself as a software engineer. I completed a 9-month course at Lambda School building and deploying websites using Javascript, Single-page applications using React, databases, and backends using Node/Express and completing the Computer Science curriculum using Python. I even spent two months building a data persisting backend using Postgres and Heroku for the non-profit organization, WellDone.

          </p>
          <p>
          If I'm not programming, I'm likely studying nutrition, cooking something delicious, or spending time in nature. If you’d like to know more, feel free to get in touch!

          </p>
          <p>
          My specialties include Javascript, React, Node, Express, Python, Selenium WebDriver Python, HTML & CSS.

          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
