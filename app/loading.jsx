export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
      <p className="text-amber-600 font-medium animate-pulse">
        데이터를 불러오는 중입니다...
      </p>
    </div>
  );
}
