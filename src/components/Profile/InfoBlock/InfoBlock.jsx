import React from "react";
import st from "./InfoBlock.module.css";

const InfoBlock = () => {
  return (
    <div>
      <div className={st.infoImg}>
        <img src="https://2.bp.blogspot.com/-pjNTgmD8aqo/XQAJpkScAYI/AAAAAAAAHEQ/WxRLvWmK_qQnljRCVBsKF23zuKQhdlMrACKgBGAs/w3840-h1600-p-k-no-nu/star-wars-jedi-fallen-order-uhdpaper.com-4K-23.jpg" alt="infoBlock pict" />
      </div>
      <div className={st.description}>ava + descr</div>
    </div>
  );
};

export default InfoBlock;
