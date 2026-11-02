import * as studentsRepo from "../repos/students.repo.js";


export const getAllStudentsController = async (req, res) => {
    try {
        const getAllStudents = await studentsRepo.getAllStudents();

        res.status(200).json(getAllStudents);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


export const getStudentByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await studentsRepo.getStudentById(id);

        if (!student) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const createStudentController = async (req, res) => {
    try {
        const { name, year, house_id} = req.body;
        const newStudent = await studentsRepo.createStudent(name, year, house_id);
        
        res.status(201).json(newStudent);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const updateStudentController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, year, house_id } = req.body;
        const existingStudent = await studentsRepo.getStudentById(id);

        if (!existingStudent) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        const updatedStudent = await studentsRepo.updateStudent(id, name, year, house_id);

        res.status(200).json(updatedStudent);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const deleteStudentController = async (req, res) => {
    try {
        const { id } = req.params;
        const existingStudent = await studentsRepo.getStudentById(id);

        if (!existingStudent) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        await teachersRepo.deleteStudent(id);
        res.status(204).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}