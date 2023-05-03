import { Router } from "express";

//import { apiController } from "../controllers/apiController";
import { apiController } from "../controllers/apiController"

class ApiRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", apiController.funcion1);
    this.router.post("/", apiController.funcion2);
    this.router.post("/errores", apiController.funcion3);
    this.router.get("/errores", apiController.funcion4);
   //this.router.post("/", apiController.funcion3);
  }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;