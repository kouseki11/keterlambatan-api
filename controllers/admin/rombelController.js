const db = require('../../models/index');

const getAllRombel = async (req, res) => {
    try {
        const rombelList = await db.Rombel.findAll();

        if(rombelList.length == 0 ) {
            res.status(404).json({ msg: "Rombel not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data Rombel", data: rombelList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const createRombel = async (req, res) => {
    try {
        const { name } = req.body;
        const newRombel = await db.Rombel.create({ name });
        res.status(201).json(
            {
                msg: "Berhasil manambah data Rombel", data: newRombel
            })
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getRombelById = async (req, res) => {
    const rombel_id = req.params.rombel_id

    try {
        const rombelList = await db.Rombel.findByPk(rombel_id);

        if(!rombelList) {
            res.status(404).json({ msg: "Rombel not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data Rombel", data: rombelList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const updateRombel = async (req, res) => {
    const rombel_id = req.params.rombel_id;
    const { name  } = req.body;

  try {
      const rombeli = await db.Rombel.findByPk(rombel_id
    );

    if (!rombeli) {
        return res.status(404).json({ msg: 'Rombel not found.' });
    }

    rombeli.name = name;
    rombeli.updatedAt = Date.now()

    await rombeli.save();

      res.status(200).json({ msg: 'Rombel Berhasil Diedit', data: rombeli});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteRombel = async (req, res) => {
    const rombel_id = req.params.rombel_id;

    try {

        const rombel = await db.Rombel.findByPk(rombel_id);

        if (!rombel) {
            return res.status(404).json({
                msg: `Rombel not found`,
            });
        }

        await rombel.destroy();
    
         
        res.status(200).json({ msg: 'Rombel Berhasil Dihapus', data: rombel });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = { getAllRombel, createRombel, getRombelById, updateRombel, deleteRombel }