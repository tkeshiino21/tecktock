const formatData = ({ items }) => {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

export default formatData;
