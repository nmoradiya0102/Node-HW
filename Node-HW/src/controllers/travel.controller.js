const { travelService } = require("../services");

/** create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;

    const travel = await travelService.createTravel(reqBody);

    res.status(200).json({
      success: true,
      message: "travel create successfully...!",
      data: { travel },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get travel list */
const getTravelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { travel_name: { $regex: search, $options: "i" } },
        { travel_destination: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await travelService.getTravelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get travel list successfully..:)!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Get travel details by id */
const getTravelDetails = async (req, res) => {
  try {
    const getDetails = await travelService.getTravelById(req.params.travelId);
    if (!getDetails) {
      throw new Error("Travel not found..:(!");
    }

    res.status(200).json({
      success: true,
      message: "Travel details get successfully...:)!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete travel */
const deleteTravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelById(travelId);
    if (!travelExists) {
      throw new Error("Travel not found :(!");
    }

    await travelService.deleteTravel(travelId);

    res.status(200).json({
      success: true,
      message: "Travel delete successfull :) !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  update travel
const updateTravel = async (req , res) =>{
  try{
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelById(travelId);
    if(!travelExists){
      throw new Error ("Travel not found..!");
    }
    await travelService.updateStationery(travelId);

    res.status(200).json({
      success: true,
      message: "Travel update successfully..!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelDetails,
  deleteTravel,
  updateTravel,
};