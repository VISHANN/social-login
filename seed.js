module.exports = function(TargetModel) {
  TargetModel.deleteMany({}, err => {
    if (!err) console.log('DB nuked successfully ');
  });
}