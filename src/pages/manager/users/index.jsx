import React, { useState } from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const UsersPage = () => {
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
          headerData={allTableData.users.header}
          bodyData={allTableData.users.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default UsersPage;
