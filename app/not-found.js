import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h2 className="text-black text-3xl font-bold">
        요청하신 페이지를 찾을 수 없습니다.
      </h2>
      <p className="text-gray-500">
        입력하신 주소가 정확한지 다시 한번 확인해 주세요.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-amber-400 text-amber-950 rounded-full font-semibold hover:bg-amber-500 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
