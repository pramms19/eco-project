export function DealsSkeletonCard() {
  return (
    <div className="border border-neutral-200 rounded-sm flex items-center p-2">
      <div className="flex justify-between content -center gap-5">
        <div className="flex space-x-4 items-center">
          <div className="bg-background rounded-md h-20 w-20"></div>
          <div className="space-y-2">
            <div className="bg-background h-3 w-20 rounded-sm"></div>
            <div className="bg-background h-3 w-10 rounded-sm"></div>
            <div className="bg-background h-3 w-10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DealsSkeleton({ length }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 ">
      {Array.from({ length }).map((product, index) => {
        return (
          <div className="grid grid-cols-1 gap-4">
            {Array.from({ length }).map((product, index) => {
              return <DealsSkeletonCard key={index} />;
            })}
          </div>
        );
      })}
      <div className="bg-background rounded-sm flex items-center p-2"></div>
    </div>
  );
}
