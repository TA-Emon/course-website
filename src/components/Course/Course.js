
import useCourse from '../../hooks/useCourse';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Course.css';

const Course = () => {

    const [course] = useCourse();

    return (
        <div className="course">
            <div className='container course-wrapper'>
                {
                    course.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                }
            </div>
        </div>

    );
};

export default Course;