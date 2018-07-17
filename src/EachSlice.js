const eachSlice = (obj, size) => {
  let slices = [];
  for (var i = 0, l = obj.length; i < l; i += size) {
    slices[i] = obj.slice(i, i + size);
  }
  return slices;
};

export default eachSlice;
