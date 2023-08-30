const { Mobile } = require("../model");

/**create mobile*/
const createmobile = async(reqbody) => {
    return Mobile.create(reqbody);
}

/** get mobile list */
const getmobilelist = async(filter , options) => {
    return Mobile.find();
}

/** get mobile by name */
const getmobilebyname = async(MobileName) => {
    return Mobile.findOne({MobileName});
}

/**get mobile by id */
const getmobilebyid = async(MobileId) => {
    return Mobile.findById(MobileId);
}

/** update status */
const updatemobilestatus = async(MobileId,MobileStatus) => {
    if(MobileStatus){
        return Mobile.findByIdAndUpdate(MobileId,{$set: {is_active:false}});
    }
    return Mobile.findByIdAndUpdate(MobileId,{$set: {is_active:true}});
}

/** update mobile */
const updatemobile = async(MobileId,reqbody) => {
    return Mobile.findByIdAndUpdate(MobileId,{$set:reqbody});
}

/** delet mobile*/
const deletemobile = async(MobileId) => {
    return Mobile.findByIdAndDelete(MobileId);
}

module.exports = {
    createmobile,
    getmobilelist,
    getmobilebyname,
    getmobilebyid,
    updatemobilestatus,
    deletemobile,
    updatemobile
}