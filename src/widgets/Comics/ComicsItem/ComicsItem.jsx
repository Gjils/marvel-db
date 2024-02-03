import Title from "../../../shared/Title"

import "./style.scss";

export default function ComicsItem() {
  return (
    <div className="comics-item">
      <img src="/UW.png" alt="UW" className="comics-item__image with-shadow"/>
      <Title text="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB" size="14px"/>
      <Title text="9.99$" color="gray" size="14px"/>
    </div>
  )
}
