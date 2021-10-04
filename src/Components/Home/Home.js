import React from 'react';
import { useHistory } from 'react-router';
import useCourse from '../../Hook/useCourse';
import Service from '../Service/Service';

const Home = () => {
    const history = useHistory();

const [courses] = useCourse();

const handleClick = () => {
    history.push('/services');
}


    return (
        <div className="container py-5">
            <div className="row">
            {
                courses.map((course,index)=> index<=3 ? <Service key={course.id} course={course}></Service> : ""
                )
            }

            </div>
            <button onClick={handleClick} className="btn btn-warning">View All Courses</button>
        </div>
    );
};

export default Home;