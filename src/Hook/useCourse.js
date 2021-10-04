import { useEffect, useState } from 'react';

const useCourse = () => {

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[courses])

    return [courses];

}
export default useCourse;