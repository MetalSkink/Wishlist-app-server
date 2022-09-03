import Product  from "../models/Product";

export const createProduct = async(req, res) => {
  const { name, productUrl, imgUrl } = req.body;
  try {
    const newProduct = new Product({
      name,
      imgUrl,
      productUrl
    })
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Porfavor hable con el administrador'
    })
  }
}

