const db = require('../../models/index');
const path = require("path");
const fs = require("fs");

const getAllLate = async (req, res) => {
    try {
        const lateList = await db.Late.findAll({
            include: [
                {
                    model: db.Student,
                    as: 'student',
                    attributes: ['nis', 'name'],
                    include: [
                        {
                            model: db.Rayon,
                            as: 'rayon',
                        },
                        {
                            model: db.Rombel,
                            as: 'rombel',
                        }
                    ]
                },
            ],
        }
        );

        if (lateList.length == 0) {
            res.status(404).json({ msg: "Late not found" })
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data Late", data: lateList
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createLate = async (req, res) => {
    try {
        const { student_id, date_time_late, information } = req.body;
        let attachmentImages = [];

        if (req.files) {
            req.files.forEach((file) => {
                const filePath = `${file.filename}`;
                attachmentImages.push(filePath);
            });
        }

        const newLate = await db.Late.create({ student_id, date_time_late, information, bukti: attachmentImages });
        res.status(201).json(
            {
                msg: "Berhasil manambah data Late", data: newLate
            })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAttachmentImages = (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(
        process.cwd(),
        "public",
        "images",
        "bukti",
        filename
    );

    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).json({ msg: "Image not found" });
    }
};


module.exports = { getAllLate, createLate, getAttachmentImages }