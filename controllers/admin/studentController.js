const db = require('../../models/index');

const getAllStudent = async (req, res) => {
    try {
        const studentList = await db.Student.findAll({
            include: [
                {
                    model: db.Rayon,
                    as: 'rayon',
                    attributes: ['name', 'p_rayon'],
                },
                {
                    model: db.Rombel,
                    as: 'rombel',
                    attributes: ['name'],
                },
            ],
            }
        );

        if(studentList.length == 0 ) {
            res.status(404).json({ msg: "Student not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data Student", data: studentList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const createStudent = async (req, res) => {
    try {
        const { nis, name, rayon_id, rombel_id } = req.body;
        const newStudent = await db.Student.create({ nis, name, rayon_id, rombel_id });
        res.status(201).json(
            {
                msg: "Berhasil manambah data Student", data: newStudent
            })
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getStudentById = async (req, res) => {
    const student_id = req.params.student_id

    try {
        const studentList = await db.Student.findOne({student_id,
            include: [
                {
                    model: db.Rayon,
                    as: 'rayon',
                    attributes: ['name', 'p_rayon'],
                },
                {
                    model: db.Rombel,
                    as: 'rombel',
                    attributes: ['name'],
                },
            ],});

        if(!studentList) {
            res.status(404).json({ msg: "Student not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data Student", data: studentList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const updateStudent = async (req, res) => {
    const student_id = req.params.student_id;
    const { nis, name, rayon_id, rombel_id } = req.body;

  try {
      const studenti = await db.Student.findByPk(student_id
    );

    if (!studenti) {
        return res.status(404).json({ msg: 'Student not found.' });
    }

    studenti.nis = nis;
    studenti.name = name;
    studenti.rayon_id = rayon_id;
    studenti.rombel_id = rombel_id;
    studenti.updatedAt = Date.now()

    await studenti.save();

      res.status(200).json({ msg: 'Student Berhasil Diedit', data: studenti});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteStudent = async (req, res) => {
    const student_id = req.params.student_id;

    try {

        const student = await db.Student.findByPk(student_id);

        if (!student) {
            return res.status(404).json({
                msg: `Student not found`,
            });
        }

        await student.destroy();
    
         
        res.status(200).json({ msg: 'Student Berhasil Dihapus', data: student });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = { getAllStudent, createStudent, getStudentById, updateStudent, deleteStudent }