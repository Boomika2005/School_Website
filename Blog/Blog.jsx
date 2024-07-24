import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';
import './Blog.css';

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
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'Highlight the cultural diversity at Oxford School Trivandrum and how it enriches the school community. Share stories of cultural events, festivals, and initiatives that promote inclusivity and mutual respect among students.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: 'Celebrate the achievements of Oxford School Trivandrum students and alumni. Share success stories, awards, and recognitions in academics, sports, arts, and other fields. Inspire current students with examples of excellence.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Discuss the importance of extracurricular activities in the overall development of students. Highlight various clubs, sports teams, and arts programs available at Oxford School Trivandrum and their impact on students’ skills and interests.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: 'Provide practical tips and strategies for students to develop effective study habits. Include advice from teachers and successful students on time management, organization, and maintaining a healthy study-life balance.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: 'Showcase the community service initiatives and social responsibility projects undertaken by Oxford School Trivandrum students. Highlight the positive impact of these activities on the community and the personal growth of students.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: 'Offer insights into the career guidance and counseling services available at Oxford School Trivandrum. Discuss how the school helps students explore career options, prepare for higher education, and develop essential skills for future success.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>At Oxford School Trivandrum, we are dedicated to holistic education, nurturing academic excellence, creativity, and personal growth. Our blog shares insights, achievements, and updates from our vibrant school community. Stay connected with the latest happenings and join us on this journey of discovery and empowerment.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;