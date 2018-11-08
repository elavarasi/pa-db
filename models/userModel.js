const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SpouseSchema = new Schema({
  "name" : {type:String, required: true, max: 10},
  "status" : Boolean,
  "DOD" : { type: Date},
  "DOB" : { type: Date},
  "role" : {type:String, required: true, max: 10}
});

const ChildrenSchema = new Schema({
  "name" : {type:String, required: true, max: 10},
  "status" : Boolean,
  "DOD" : { type: Date},
  "DOB" : { type: Date},
  "gender" : {type:String, required: true, max: 10},
  "work" : {type:String, required: true, max: 10},
  "education" : {type:String, required: true, max: 10},
  "bloodGroup" : {type:String, required: true, max: 10},
  "mobileCode" : Number,
  "mobile" : Number,
  "eMail" : {type:String, required: true, max: 15},
  "idType" : {type:String, required: true, max: 10},
  "idDoc" : {type:String, required: true, max: 10},
  "maritalStatus" : Boolean,
  "memberId" : {type:String, required: true, max: 10},
  "role" : {type:String, required: true, max: 10}
});

const PhoneSchema = new Schema({
  "type" : {type:String, required: true, max: 10},
  "numberCode" : Number,
  "number" : Number
});

var RoleSchema = new Schema({
  "role": {type:String, required: true, max: 100}
});

const AddressSchema = new Schema({
  location: {type:String, required: true, max: 10},
  address: {
    aptNo: {type:String, required: true, max: 10},
    stName: {type:String, required: true, max: 10},
    locName: {type:String, required: true, max: 10},
    rdName: {type:String, required: true, max: 10},
    city: {type:String, required: true, max: 10},
    zip: Number,
    state: {type:String, required: true, max: 10},
    country: {type:String, required: true, max: 10}
  },
  phone: [PhoneSchema]
});

let UserSchema = new Schema({
  firstName: {type:String, required: true, max: 100},
  lastName: {type:String, required: true, max: 100},
  motherName : {type:String, required: true, max: 100},
  status : Boolean,
  DOD : { type: Date},
  fatherStatus : Boolean,
  fatherDOD : {type: Date},
  fatherMemberId : Number,
  DOB : { type: Date},
  education : {type:String, max: 15},
  mWork : {type:String, max: 15},
  mBloodGroup: {type:String, max: 10},
  mPicture : {type:String, max: 100},
  mFamilyPicture: {type:String, max: 100},
  mHomeTown: {type:String, max: 50},
  mTaluka: {type:String, max: 50},
  mDistrict: {type:String, max: 50},
  mIdType: {type:String, max: 50},
  mIdDoc: {type:String, max: 100},
  mSpouse: [SpouseSchema],
  children : [ChildrenSchema],
  address : [AddressSchema],
  role : [RoleSchema],
  memberStatus : Boolean
  });

module.exports =  {
  userModel: mongoose.model('User', UserSchema)
  //phoneModel: mongoose.model('User', PhoneSchema),
  //spouseModel: mongoose.model('User', SpouseSchema),
  //childrenModel: mongoose.model('User', ChildrenSchema),
  //addressModel: mongoose.model('User', AddressSchema)
};