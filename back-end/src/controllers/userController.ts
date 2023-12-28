import userService from "../services/userService"

async function updateProgress(req: any, res: any){
  try {
    const result = await userService.updateProgress(req);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({Error: error})
  }
}

export default { updateProgress };