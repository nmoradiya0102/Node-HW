const { mobileService } = require("../services");

/** create mobile*/
const createmobile = async(req,res) => {
    try {
        const reqbody = req.body;
        const MobileExist = await mobileService.getmobilebyname(reqbody.mobile_name);
        if(MobileExist){
            throw new Error("this name mobile already created..! ");
        }
        const mobile = await mobileService.createmobile(reqbody);
        if(!mobile){
            throw new Error("Something went wrong..");
        }
        res.status(200).json({
            success:true,
            message: "Mobile created successfully..",
            data: mobile
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

/** get mobile */
const getmobilelist = async(req,res) => {
    try {
        const Mobilelist = await mobileService.getmobilelist();
        if(!Mobilelist){
            throw new Error("Mobile list not found..");
        }
        res.status(200).json({
            success:true,
            message: "Mobile list dispatch successfully..",
            data: Mobilelist
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

/** delete mobile */
const deletemobile = async(req,res) => {
  try {
  const MobileId = req.params.MobileId;
  const MobileExist = await mobileService.getmobilebyid(MobileId);
  if(!MobileExist){
    throw new Error("mobile not found..");
  }
  await mobileService.deletemobile(MobileId);
  res.status(200).json({
    success:true,
    message:"Mobile deleted successfully..",
  });
} catch (error) {
  res.status(400).json({
    success:false,
    message:error.message,
  });
}
};

/** update mobile status */
const updatemobilestate = async(req,res) => {
    try {
        const MobileId = req.params.MobileId;
        const MobileExist = await mobileService.getmobilebyid(MobileId);
        if(!MobileExist){
            throw new Error("Mobile not found..");
        }
        const MobileDetail = await mobileService.getmobilestatus(MobileId);
        const MobileStatus = MobileDetail.is_active;
        await mobileService.updatemobilestatus(MobileId,MobileStatus);
        res.status(200).json({
            success:true,
            message: "Mobile updated successfully..",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};


/** update mobile  */
const updatemobile = async (req,res) => {
    try {
      const reqbody = req.body;
      const MobileId = req.params.MobileId;
      const MobileExist = await mobileService.getmobilebyid(MobileId);
      if(!MobileExist){
        throw new Error("mobile not found..");
      }
      await mobileService.updatemobile(MobileId,reqbody);
      res.status(200).json({
        success:true,
        message:"Mobile updated successfully..",
      });
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message,
      });
    }
  };



module.exports = {
    createmobile,
    getmobilelist,
    deletemobile,
    updatemobilestate,
    updatemobile
};