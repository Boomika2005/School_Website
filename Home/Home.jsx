import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Carousel1Img from '../../utils/images/carousel1.jpg';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import './Home.css';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Explore how holistic education at Oxford School Trivandrum nurtures not just academic excellence but also emotional, social, and physical development. Highlight various programs and activities that contribute to the overall growth of students.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Take readers through a typical day at Oxford School Trivandrum, showcasing the diverse range of activities, classes, and experiences that students enjoy. Include interviews with students and teachers to provide a personal touch.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Discuss the innovative teaching methods employed at Oxford School Trivandrum, such as project-based learning, flipped classrooms, and the integration of technology in education. Highlight the benefits of these approaches for student engagement and learning outcomes.'
    }
];

function Home() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBanner(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='home-page'>
            {showBanner && (
                <div className='position-relative w-100'>
                    <img className="d-block w-100 mx-auto" src={Carousel1Img} alt="Highlight" />
                    <button
                        type='button'
                        className='btn-close position-absolute top-0 end-0 m-3'
                        aria-label='Close'
                        style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }}
                        onClick={() => setShowBanner(false)}
                    ></button>
                </div>
            )}
            {!showBanner && (
                <>
                    <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                        <div className='container d-flex flex-column align-items-center'>
                            <h2>Welcome To</h2>
                            <h1 className='text-center fw-semibold'>Oxford School London</h1>
                            <p>At Oxford School London, our mission is to cultivate an inclusive and supportive learning environment where students are empowered to achieve their fullest potential. Our vision is to be a leading educational institution that prepares students to excel in a rapidly changing world. We aim to equip our students with the knowledge, skills, and values necessary to succeed in their personal and professional lives. At Oxford School London, we offer a rigorous and dynamic curriculum that challenges students to excel academically. Our dedicated faculty members are experts in their fields, committed to providing personalized attention and support to each student. We offer a wide range of subjects and extracurricular activities to ensure a well-rounded education.</p>
                            <div className='d-flex flex-column flex-sm-row align-items-center'>
                                <Link to="/courses">
                                    <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Club Activities</button>
                                </Link>
                                <Link to="/contact">
                                    <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </header>

                    <div className="py-5">
                        <ChooseSection />
                    </div>

                    <div className='py-5 bg-light'>
                        <div className="container">
                            <div className='row d-flex align-items-center justify-content-around'>
                                <div className='col-lg-5'>
                                    <h2 className='text-capitalize'>Club Activities</h2>
                                    <p>At Oxford School Trivandrum, we offer a diverse range of club activities designed to enrich our students’ educational experience. From STEM clubs and art clubs to sports teams and community service groups, there’s something for everyone. These clubs provide opportunities for students to explore their interests, develop new skills, and build lasting friendships. Join a club today and become part of a vibrant and dynamic school community!</p>
                                    <Link to="/courses">
                                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                                    </Link>
                                </div>
                                <div className='col-lg-5 mt-5 mt-lg-0'>
                                    <img src={StartCoursesImg} className='img-fluid' alt="Start Courses" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-5">
                        <FaqAccordion />
                    </div>

                    <div className='blog-section text-light py-5'>
                        <div className='container d-flex flex-column align-items-center'>
                            <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                            <div className='row g-4'>
                                {blogs.map((blog) => (
                                    <div key={blog.id} className='col-md-6 col-lg-4'>
                                        <Link to="/blog" className='text-decoration-none'>
                                            <Card className='h-100 shadow scale-hover-effect'>
                                                <Card.Img variant="top" src={blog.img} />
                                                <Card.Body className='p-md-5'>
                                                    <Card.Title>{blog.title}</Card.Title>
                                                    <Card.Text>{blog.description}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <Link to="/blog">
                                <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
