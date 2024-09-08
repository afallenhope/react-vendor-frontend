import ShapeCompinerForm from '../forms/ShapeCombinerForm';
import { BACKEND_URL } from '../../constants';
const ShapeCombiner = () => {
  const handleSave = (e) => {
    const formData = new FormData();
    console.log('Combining the shapes please wait...', e);
    // TODO: data is not stored
    const { headShapeFile, bodyShapeFile } = e;
    formData.append('headFile', headShapeFile);
    formData.append('bodyFile', bodyShapeFile);

    console.log('Form To Post', JSON.stringify(formData));
    return fetch(`${BACKEND_URL}/tools/shape-combiner`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('Received', response);
      })
      .catch((ex) => {
        console.warn(ex);
      });
  };

  return (
    <>
      <h2>Shape Combiner</h2>
      <p>
        Inspired by Dr. Frank's shape combiner which originally was written as a separate tool, I've made it accessible
        to the web.
      </p>
      <p>
        Simple select the shape you want the head values for in the first form, and then the body values you want and
        select "combine"
      </p>
      <ShapeCompinerForm handleSave={handleSave} />
    </>
  );
};

export default ShapeCombiner;
