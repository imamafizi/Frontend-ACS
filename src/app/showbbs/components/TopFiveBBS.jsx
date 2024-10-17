"use client";

import useGetBBSTop5Categories from "@/hooks/api/bbs/useGetBBSTop5Categories";

const TopFiveBBS = ({ queries }) => {
  const { data: top5Categories, isPending } = useGetBBSTop5Categories(queries);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (!top5Categories) {
    return <h1>No Data</h1>;
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-lg text-center">
        Top 5 Safe BBS Categories
      </h1>
      <div className="flex flex-col gap-4 border rounded-lg p-8 border-gray h-full shadow-2xl">
        <div className="flex flex-col"></div>
        {top5Categories.topSafeCategories.map((value, idx) => (
          <h1 key={idx} className="text-xl">{`${idx + 1}. ${value.label} ${
            value.count
          }`}</h1>
        ))}
      </div>
    </div>
  );
};

export default TopFiveBBS;
