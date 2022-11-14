import 'components/styles/About.scss';

const About = () => {
  return (
    <div className='about-us'>
      <h1>https://plan-ahead.herokuapp.com</h1>
      <br />
      <h2>Meet Plan Ahead Team Members</h2>
      <div className='member_container'>
        <div className='member'>
          <img src="https://avatars.githubusercontent.com/u/24639525?v=4" alt="jordan's cool pose" />
          <h3 className='name'>Jordan Ciurcovich</h3>
          <div className='links'>
            <h4><a href='https://github.com/symphony' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-xl"></i></a></h4>
            <h4><a href='https://www.linkedin.com/in/jordan-ciurcovich/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-xl"></i></a></h4>
            <h4><a href='https://symphony.bitverse.io/resume.pdf' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file fa-xl"></i></a></h4>
          </div>
        </div>

        <div className='member'>
          <img src="https://avatars.githubusercontent.com/u/84283804?v=4" alt="ben's beautiful face" />
          <h3 className='name'>Ben Finlay</h3>
          <div className='links'>
            <h4><a href='https://github.com/Ben-Finlay' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-xl"></i></a></h4>
            <h4><a href='https://www.linkedin.com/in/ben-finlay/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-xl"></i></a></h4>
            <h4><a href='https://resume.creddle.io/resume/2p8fmq2vvlg' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file fa-xl"></i></a></h4>
          </div>

        </div>
        <div className='member'>
          <img src="https://i.imgur.com/w2Asa7t.jpg" alt="Yuri's lovely selfie" />
          <h3 className='name'>Yuri Yang</h3>
          <div className='links'>
            <h4><a href='https://github.com/itsyurika' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-xl"></i></a></h4>
            <h4><a href='https://www.linkedin.com/in/07yuri/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-xl"></i></a></h4>
            <h4><a href='https://resume.creddle.io/resume/hvzh510ulxq' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file fa-xl"></i></a></h4>
          </div>

        </div>
      </div>
      <div className='story'>
        <h3 className='sub-header'>Our Story</h3>
        <p>We are graduates of Lighthouse Labs Full Stack Web Development program. We created planAhead as our final group project.</p>
        <h4 className='sub-header'>Why Plan Ahead?</h4>
        <p> The quality of education was severely impacted by COVID, especially for students with learning disabilities - ADHD, Autism Spectrum Disorder, dyslexia, to name a few.  These students often have a hard time keeping up with the school work because they lack organizational skills. Sometimes they’re not even aware they’ve been assigned a homework, especially now that the learning platform has shifted to online, such as google classroom.
    <br/>
          Teachers, who often have to give alternative due dates or completely different sets of assignments to these students, also have a very hard time keeping track of who has turned in an assignment, or if the students are aware of it at all.
          So we wanted to create an app that can help. </p>
        <h4 className='sub-header'>What Plan Ahead Can Do</h4>
        <p> For students, it organizes all the assignments they have to complete for the day in a much simpler interface, and motivates them to do homework with collectible stickers. <br/>For teachers, it offers an organized view of students' homework status and a reminder to complete an assignment through sms message to students. </p>
        <h4 className='sub-header'>Interested?</h4>
          <p>We believe that PlanAhead can help our perspective users to find schoolwork more manageable, and we hope this small step can help students find learning more fun! If you have any cool ideas that you think can improve PlanAhead, or are interested in working with us, please don't hesitate to contact us! We'd love to hear from you ❤︎</p>

      </div>
      
    </div>
  );
};

export default About;
