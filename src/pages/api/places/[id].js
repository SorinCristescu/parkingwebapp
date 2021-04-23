import dbConnect from '../../../utils/dbConnect';
import Place from '../../../models/Place';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const place = await Place.findById(id);
        if (!place) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: place });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const place = await Place.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!place) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: place });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPlace = await Place.deleteOne({ _id: id });
        if (!deletedPlace) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
