"use client";

import Spinner from "@/components/Spinner";
import AuthGuard from "@/hoc/AuthGuard";
import useGetBBS from "@/hooks/api/bbs/useGetBBS";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import Pagination from "../../components/Pagination";
import ModalBBSDetail from "./components/ModalBBSDetail";
import SectionChart from "./components/SectionChart";
import SectionFiltering from "./components/SectionFiltering";
import TableBBS from "./components/TableBBS";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [debouncedValue] = useDebounceValue(searchTerm, 500);

  const { data: bbs, isPending } = useGetBBS({
    page,
    startDate,
    endDate,
    search: debouncedValue,
  });

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < Math.ceil(bbs.meta.total / bbs.meta.take)) {
      setPage(page + 1);
    }
  };

  const openModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <div className="container mx-auto">
        {!!bbs?.data?.length ? (
          <SectionChart startDate={startDate} endDate={endDate} />
        ) : (
          <h1 className="flex justify-center items-center h-[15vh] font-bold text-lg">
            No Data
          </h1>
        )}

        <SectionFiltering
          startDate={startDate}
          endDate={endDate}
          searchTerm={searchTerm}
          setEndDate={setEndDate}
          setSearchTerm={setSearchTerm}
          setStartDate={setStartDate}
        />

        {isPending && (
          <div className="flex justify-center items-center h-[30vh]">
            <Spinner />
          </div>
        )}

        {!!bbs?.data?.length ? (
          <TableBBS bbs={bbs} openModal={openModal} page={page} />
        ) : (
          <h1 className="flex justify-center items-center h-[15vh] font-bold text-lg">
            No Data
          </h1>
        )}

        {isModalOpen && selectedRecord && (
          <ModalBBSDetail
            setIsModalOpen={setIsModalOpen}
            selectedRecord={selectedRecord}
          />
        )}
        <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
};

export default AuthGuard(Page);
