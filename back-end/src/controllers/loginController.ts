import loginService from '../services/loginService'

async function login(req: any, res: any){
  try{
    const result = await loginService.login(req);
    res.status(200).json(result);
  } catch(error){
    console.error(error);
    res.status(500).json({Error: error});
  }
}

async function register(req: any, res: any){
  try{
    const result = await loginService.register(req);
    res.status(200).json(result);
  } catch(error){
    console.error(error);
    res.status(500).json({Error: error});
  }
}

export default {login, register}