declare module "urdf-loader" {
  import { Object3D } from "three";
  export default class URDFLoader {
    load(url: string, callback: (robot: Object3D) => void): void;
  }
}
