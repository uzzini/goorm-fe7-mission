import { Fragment } from "react";
import MandooImg from "./assets/mandoo.png"

export default function Mandoo ({ imgWidth }) {
  return (
    <Fragment>
      <img src={MandooImg} width={imgWidth} alt="만두 이미지" />
    </Fragment>
  );
}