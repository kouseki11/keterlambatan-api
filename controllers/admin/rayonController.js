const db = require('../../models/index');

const getAllRayon = async (req, res) => {
    try {
        const rayonList = await db.Rayon.findAll();

        if(rayonList.length == 0 ) {
            res.status(404).json({ msg: "Rayon not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data rayon", data: rayonList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const createRayon = async (req, res) => {
    try {
        const { name, p_rayon } = req.body;
        const newRayon = await db.Rayon.create({ name, p_rayon});
        res.status(201).json(
            {
                msg: "Berhasil manambah data rayon", data: newRayon
            })
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getRayonById = async (req, res) => {
    const rayon_id = req.params.rayon_id

    try {
        const rayonList = await db.Rayon.findByPk(rayon_id);

        if(!rayonList) {
            res.status(404).json({ msg: "Rayon not found"})
        }

        res.status(200).json(
            {
                msg: "Berhasil mengambil data rayon", data: rayonList
            });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const updateRayon = async (req, res) => {
    const rayon_id = req.params.rayon_id;
    const { name, p_rayon } = req.body;

  try {
      const rayoni = await db.Rayon.findByPk(rayon_id
    );

    if (!rayoni) {
        return res.status(404).json({ msg: 'Rayon not found.' });
    }

    rayoni.name = name;
    rayoni.p_rayon = p_rayon;
    rayoni.updatedAt = Date.now()

    await rayoni.save();

      res.status(200).json({ msg: 'Rayon Berhasil Diedit', data: rayoni});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteRayon = async (req, res) => {
    const rayon_id = req.params.rayon_id;

    try {

        const rayon = await db.Rayon.findByPk(rayon_id);

        if (!rayon) {
            return res.status(404).json({
                msg: `Rayon not found`,
            });
        }

        await rayon.destroy();
    
         
        res.status(200).json({ msg: 'Rayon Berhasil Dihapus', data: rayon });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = { getAllRayon, createRayon, getRayonById, updateRayon, deleteRayon }