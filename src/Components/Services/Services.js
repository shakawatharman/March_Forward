import React from 'react';
import useCourse from '../../Hook/useCourse';
import Service from '../Service/Service';

const Services = () => {

    const [courses] = useCourse();

    return (
        <div className="vheight">
        <div className="container py-5">
           <div className="row">


           {
                    courses.map((course)=><Service key={course.id} course={course}></Service>)
                }

            </div>
        </div>
        </div>
    );
};

export default Services;