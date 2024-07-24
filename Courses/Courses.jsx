import React from 'react';
import { Card } from 'react-bootstrap';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import DanceClubImg from '../../utils/images/1.jpg';
import ArtCraftImg from '../../utils/images/2.jpg';
import SportsClubImg from '../../utils/images/3.jpg';
import GardenImg from '../../utils/images/4.jpg';
import MagicClubImg from '../../utils/images/5.jpg';
import HelpingHandsImg from '../../utils/images/6.jpg';
import ScienceClubImg from '../../utils/images/7.jpg';
import KaroakeImg from '../../utils/images/8.jpg';
import './Courses.css';

const courses = [
    {
        id: 1,
        img: [DanceClubImg],
        title: 'Dance club',
        description: 'Celebrating rhythm and movement with dance routines across various styles.'
    },
    {
        id: 2,
        img: [ArtCraftImg],
        title: 'Art & Craft',
        description: 'Encouraging creativity through diverse artistic and craft projects.'
    },
    {
        id: 3,
        img: [SportsClubImg],
        title: 'Sports club',
        description: 'Promoting physical fitness and team spirit through various sports activities.'
    },
    {
        id: 4,
        img: [GardenImg],
        title: 'Gardening',
        description: 'Cultivating plants and green spaces while learning about horticulture.'
    },
    {
        id: 5,
        img: [MagicClubImg],
        title: 'Magic club',
        description: 'Delighting audiences with mesmerizing magic tricks and illusions.'
    },
    {
        id: 6,
        img: [HelpingHandsImg],
        title: 'Helping hands club',
        description: 'Fostering community service and volunteerism to support those in need.'
    },
    {
        id: 7,
        img: [ScienceClubImg],
        title: 'Science Club',
        description: 'Exploring scientific concepts and experiments through engaging hands-on activities.'
    },
    {
        id: 8,
        img: [KaroakeImg],
        title: 'Karoake club',
        description: 'Providing a fun platform for singing enthusiasts to showcase their talent.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Club Activities</h1>
                <p className='text-center w-75 mb-5'>At Oxford School Trivandrum, our club activities offer students a chance to explore their interests and develop new skills. From STEM clubs and art clubs to sports teams and community service groups, there’s something for everyone. Join a club today and become part of our vibrant school community!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;