import React from 'react'
import './style.scss'
import portrait from '../../images/portrait.jpg'
import TextBlock from '../TextBlock/TextBlock'
import Resume from '../../document/Resume.pdf'

const Bio = () => {
  const experiences = [
    {
      title: 'UI Freelance Designer',
      date: 'April 2021-present',
      content:
        'I have been a UI freelance designer since April 2021. My current project is designing a website for Bokacha, a coffee shop in Turku.',
    },
    {
      title: 'Content creator | Youtuber',
      date: 'October 2020-present',
      content:
        'Produce video content for my Youtube channel (youtube.com/c/bylana). In seven months, the channel has grown steadily. The most popular video has 21k+ views.',
    },
  ]
  const education = [
    {
      name: 'Bachelor of Information and Communication Technology',
      place: 'Turku University of Applied sciences, 2016-2020',
    },
    {
      name: 'UI design bootcamp',
      place: 'Schimba, July 2020',
    },
    {
      name: 'Summer school, Korea’s Culture & Arts',
      place: 'University of Seoul, June 2017',
    },
  ]
  return (
    <div id='about'>
      <div className='blur-bg-text'>
        <span className='unique-color'>#</span> about me
      </div>
      <div className='container'>
        <div className='bio__content-wrapper'>
          <div className='bio__image-section'>
            <div className='bio__image-wrapper'>
              <div className='bio__image-bg'>
                <img src={portrait} alt='portrait' />
              </div>
            </div>
          </div>
          <div className='bio__text-section'>
            <div className='bio__text-wrapper'>
              <h2>
                A freelance Designer, based in Helsinki, looking for{' '}
                <span className='unique-color'>challenges.</span>
              </h2>
              <p>
                Hi, my name is Lan Nguyen. I’m a free-minded person with bits of
                life experience and a diverse sense of aesthetics. I graduated
                from Turku University of Applied Sciences with a major in
                Information and Communication Technology.
                <br />
                <br />
                During my time at the university, I took part in several
                projects, in which I performed different roles: web designer,
                front-end developer, and project manager. Along the way, I
                realized that I was really into visual design. Currently, I'm
                pursuing further education in UI/UX design and trying to look
                for an opportunity to improve my experience.
                <br />
                {/* Some extra info: */}
              </p>
            </div>
          </div>
        </div>
        <div className='text-block__title'>Experience</div>
        {experiences.map((exp, index) => (
          <TextBlock
            key={index}
            subTitle={exp.title}
            description={exp.date}
            content={exp.content}
          />
        ))}
        <div className='text-block__title'>Education</div>
        {education.map((item, index) => (
          <TextBlock
            key={index}
            subTitle={item.name}
            description={item.place}
          />
        ))}
        <a className='resume' href={Resume} target='_blank' rel='noreferrer'>
          Download my resume.
        </a>
      </div>
    </div>
  )
}

export default Bio
