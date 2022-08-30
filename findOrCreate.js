function findOrCreate (TargetModel, query, additionalFields, callback) {
  // find or create the user
  const options = {
    new: true,
    upsert: true
  }
  additionalFields = {
    name: ['Ujjwal', 'Goswami'],
    displayName: 'Ujjwal Goswami',
    photos: 'https://lh3.googleusercontent.com/a/AItbvmkNC7unRTyn2jFCVu9d4KGN3FA8FomCN_FUQbbN=s96-c'
  }
  const update = additionalFields;
  /* query: {_id: 'somehashid', update : object containing updates} */
  TargetModel.findOneAndUpdate(query, update, options, callback);
}

module.exports = findOrCreate;