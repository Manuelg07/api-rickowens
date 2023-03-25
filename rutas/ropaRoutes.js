
const express = require('express');
const router = express.Router();

const Ropa = require("../modelos/modelo-rick1"); // Importa el modelo de la ropa

router.get('/ropa', async (req, res) => {
 try {
   const ropa = await Ropa.find();
   res.status(200).json(ropa);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

router.get('/ropa/:id', async (req, res) => {
 try {
   const id = req.params.id;
   const ropa = await Ropa.findById(id);
   res.status(200).json(ropa);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

router.post('/ropa', async (req, res) => {
 try {
   const { nombre, descripcion, precio } = req.body;
   const ropa = new Ropa({
     nombre,
     descripcion,
     precio,
   });
   await ropa.save();
   res.status(201).json(ropa);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

router.put('/ropa/:id', async (req, res) => {
 try {
   const id = req.params.id;
   const { nombre, descripcion, precio } = req.body;
   const ropa = await Ropa.findByIdAndUpdate(
     id,
     {
       nombre,
       descripcion,
       precio,
     },
     { new: true }
   );
   res.status(200).json(ropa);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

router.delete('/ropa/:id', async (req, res) => {
 try {
   const id = req.params.id;
   const ropa = await Ropa.findByIdAndDelete(id);
   res.status(200).json(ropa);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

module.exports = router;