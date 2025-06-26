'use client';
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

// f Search 라우터에서 keyword 쿼리값에 들어온 텍스트를 localStorage에 저장하는 함수
export default function SearchKeywordSaver(): null {
  const searchParams = useSearchParams();
  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (typeof window !== 'undefined' && keyword) {
      const prev: string[] = JSON.parse(localStorage.getItem("recentSearches") || '[]');
      const next: string[] = [keyword, ...prev.filter((k: string) => k !== keyword)].slice(0, 10);
      localStorage.setItem('recentSearches', JSON.stringify(next));
    }
  }, [searchParams]);
  return null;
}
