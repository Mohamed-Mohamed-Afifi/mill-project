import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/main/mainActions";

// Components
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const ReviewerHanagerProgram = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { hanagerPrograms, pageInfo } = useSelector((state) => state.main);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllCollectionCenterProgram({
        type: "الهناجر",
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  // const checkedValue = [
  //   {
  //     programId: 58,

  //     entityId: 52,

  //     entityName: "new name",
  //     entityType: "مراكز التجميع أو الهناجر",
  //     wheatId: 7,

  //     totalShippedWeight: 600.0,
  //     totalExchangedWeight: 600.0,
  //     totalWheatLoss: 300.0,
  //     createdBy: "atlam@gmail.com",
  //     createdOn: null,
  //   },
  // ];
  // const tableBody = checkedValue.map((ele) => [
  //   ele.entityId,
  //   ele.entityName,
  //   ele.entityType,
  //   ele.totalShippedWeight,
  //   ele.totalExchangedWeight,
  //   ele.totalWheatLoss,
  //   ele.createdBy,
  // ]);
  const tableBody = hanagerPrograms?.map((ele) => [
    ele.entityId,
    ele.entityName,
    ele.entityType,
    ele.totalShippedWeight,
    ele.totalExchangedWeight,
    ele.totalWheatLoss,
    ele.createdBy,
  ]);
  console.log(hanagerPrograms);
  const handlePageChange = (event, value) => {
    dispatch(
      getAllCollectionCenterProgram({
        type: "الهناجر",
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllCollectionCenterProgram({
        type: "الهناجر",
        pageNumber: 0,
        searchValue: "",
      })
    );
  }, [dispatch]);
  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.hanagerAndCentersHeader}
        />
      )}
      <p>
        البرامج
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <WarehouseIcon fontSize="medium" />
        </span>
        هناجر
      </p>
      {tableBody && (
        <MainTable
          headerData={allTablesHeaders.hanagerAndCentersHeader}
          bodyData={tableBody || []}
          setPopUpMode={setPopUpMode}
          handleSearch={handleSearch}
        />
      )}
      {tableBody && (
        <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default ReviewerHanagerProgram;