const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_latihan', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connnection error:'))
db.once('open', () => {

  console.log("server database connect")


  // const users = await User.findOne({_id:'624a6309e210dcb560b4a442'})
  // const users = await User.find()
  // console.log(users)

  //create new user
  // const newUser = await User.create({
  //   name: 'Elfin Sanjaya',
  //   age: 25,
  //   status: 'active'
  // })
  // console.log(newUser)

  //create new user
  // const newUser = new User()
  //   newUser.name = 'tio';
  //   newUser.age = 23;
  //   newUser.status = 'inactive';
  // const insert = await newUser.save()
  // console.log(insert)

  //update user
  // const updateUser = await User.findById('624a657cd2857aa6a01bc9eb')
  // updateUser.name = 'tio'
  // const update = await updateUser.save()
  // console.log(updateUser)

  //delete user
  // const deleteUser = await User.deleteOne({ _id: '624a63da620c88cf82e4c49c'})
  // console.log(deleteUser)

  //create new user with validation
  // const users = await User.create({
  //   name: 'tio baru',
  //   age: 23,
  //   status: 'active'
  // })
  // console.log(users)

});