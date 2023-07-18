import React, { useState } from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const WheatInfoPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  return (
    <>
      {popUpMode ? (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTableData.sessions.header}
        />
      ) : (
        ""
      )}
      <div>
        <MainTable
          headerData={allTableData.wheatInfo.header}
          bodyData={allTableData.wheatInfo.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default WheatInfoPage;