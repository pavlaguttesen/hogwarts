import * as teachersRepo from "../repos/teachers.repo.js";

export const getAllTeachersController = async (req, res) => {
    try {
        const allTeachers = await teachersRepo.getAllTeachers();

        res.status(200).json(allTeachers);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


export const getTeacherByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await teachersRepo.getTeacherById(id);

        if (!teacher) {
            return res.status(404).json({
                error: "Teacher not found"
            });
        }

        res.status(200).json(teacher);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const createTeacherController = async (req, res) => {
    try {
        const { name, house_id} = req.body;
        const newTeacher = await teachersRepo.createTeacher(name, house_id);
        
        res.status(201).json(newTeacher);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const updateTeacherController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, house_id } = req.body;
        const existingTeacher = await teachersRepo.getTeacherById(id);

        if (!existingTeacher) {
            return res.status(404).json({
                error: "Teacher not found"
            });
        }

        const updatedTeacher = await teachersRepo.updateTeacher(id, name, house_id);

        res.status(200).json(updatedTeacher);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const deleteTeacherController = async (req, res) => {
    try {
        const { id } = req.params;
        const existingTeacher = await teachersRepo.getTeacherById(id);

        if (!existingTeacher) {
            return res.status(404).json({
                error: "Teacher not found"
            });
        }

        await teachersRepo.deleteTeacher(id);
        res.status(204).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}