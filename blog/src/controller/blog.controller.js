const { blogService } = require("../services");

/** create Blog */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const blog = await blogService.create_Blog(reqBody)
    if (!blog) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Blog create successfully..!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message});
  }
};

/** Get Blog list */
const get_Blog_List = async (req, res) => {
  try {
    const getList = await blogService.get_Blog_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get blog list successfully..!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Blog */
const delete_Blog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogExists = await blogService.get_Blog_By_Id(blogId);
    if (!blogExists) {
      throw new Error("Blog not found..!");
    }
    await blogService.delete_Blog(blogId);

    res.status(200).json({
      success: true,
      message: "Blog delete successfully..!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update blog */
const update_Blog = async (req, res) => {
  try {
    const reqBody = req.body;
    const blogId = req.params.blogId;
    const blogExists = await blogService.get_Blog_By_Id(blogId);
    if (!blogExists) {
      throw new Error("Blog not found..!");
    }
    await blogService.update_Blog(blogId,reqBody);

    res.status(200).json({
      success: true,
      message: "Blog update successfully..!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBlog,
  get_Blog_List,
  delete_Blog,
  update_Blog
};