import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="flex w-full">
      <div className="flex h-full w-full flex-col gap-2 rounded-tl-2xl border border-zinc-320 bg-white p-2 md:p-10 dark:border-zinc-700 dark:bg-zinc-950">
        <div className="flex gap-2">
          {[...new Array(4)].map((_, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-32 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-zinc-800"
            ></div>
          ))}
        </div>
        <div className="flex gap-2">
          {[...new Array(1)].map((_, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-96 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-zinc-800"
            ></div>
          ))}
        </div>
        <div className="flex gap-2">
          {[...new Array(2)].map((_, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-32 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-zinc-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
