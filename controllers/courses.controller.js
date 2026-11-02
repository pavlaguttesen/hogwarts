import * as coursesRepo from "../repos/courses.repo.js";
import * as studentRepo from "../repos/students.repo.js";

export const getAllCoursesController = async (req, res) => {
    try {
        const allCourses = await coursesRepo.getAllCourses();

        res.status(200).json(allCourses);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


export const getCourseByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await coursesRepo.getCourseById(id);

        if (!course) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        res.status(200).json(course);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const createCourseController = async (req, res) => {
    try {
        const { name, teacher_id} = req.body;
        const newCourse = await coursesRepo.createCourse(name, teacher_id);
        
        res.status(201).json(newCourse);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const addStudentToCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        const { student_id } = req.body;
        const existingStudent = await studentRepo.getStudentById(student_id);

        if (!existingStudent) {
            return res.status(404).json({
                error: "Student not found"
            });
        }
        const existingCourse = await coursesRepo.getCourseById(id);

        if (!existingCourse) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        const updatedCourseandStudent = await coursesRepo.addStudentToCourse(id, student_id);

        res.status(201).json(updatedCourseandStudent);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const updateCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const existingCourse = await coursesRepo.getCourseById(id);

        if (!existingCourse) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        const updatedCourse = await coursesRepo.updateCourse(id, name);

        res.status(200).json(updatedCourse);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const updateCourseTeacherController = async (req, res) => {
    try {
        const { id } = req.params;
        const {teacher_id } = req.body;
        const existingCourseTeacher = await coursesRepo.getCourseById(id);

        if (!existingCourseTeacher) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        const updatedCourseTeacher = await coursesRepo.updateCourseTeacher(id, teacher_id);

        res.status(200).json(updatedCourseTeacher);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


export const deleteCourseController = async (req, res) => {
    try {
        const { id } = req.params;
        const existingCourse = await coursesRepo.getCourseById(id);

        if (!existingCourse) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        await coursesRepo.deleteCourse(id);
        res.status(204).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const deleteStudentFromCourseController = async (req, res) => {
    try {
        const { id, student_id, course_id } = req.params;
        const existingCourseStudent = await coursesRepo.getCourseById(id);

        if (!existingCourseStudent) {
            return res.status(404).json({
                error: "Course not found"
            });
        }

        await coursesRepo.deleteStudentFromCourse(course_id, student_id);
        res.status(204).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};
