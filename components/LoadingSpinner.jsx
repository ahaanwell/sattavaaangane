export default function LoadingSpinner() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-4">

      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-red-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#ce3125] animate-spin" />
      </div>

      <p className="text-primary text-sm font-semibold tracking-wide animate-pulse">
        Loading...
      </p>

    </div>
  );
}