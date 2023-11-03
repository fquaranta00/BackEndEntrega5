import { Router } from 'express';
import ProductManager from '../../dao/ProductManagerMongo.js'; 


const router = Router();


router.get('/products', async (req, res) => {
  try {
    const products = await ProductManager.get(req.query);
    res.status(200).json(products);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.get('/products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await ProductManager.getById(pid);
    res.status(200).json(product);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const product = await ProductManager.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.put('/products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    await ProductManager.updateById(pid, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.delete('/products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    await ProductManager.deleteById(pid);
    res.status(204).end();
    return "Producto eliminado exitosamente";
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
  
});

export default router;
