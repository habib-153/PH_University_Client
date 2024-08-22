import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement";

const MySchedule = () => {
    const {data} = useGetAllEnrolledCoursesQuery(undefined)
    return (
        <div>
            
        </div>
    );
};

export default MySchedule;