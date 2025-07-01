'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// f Search 라우터에서 keyword 쿼리값에 들어온 텍스트를 localStorage에 저장하는 함수
export default function SearchKeywordSaver(): string | null {
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState<string | null>(null);

  useEffect(() => {
    const k = searchParams.get("keyword");
    setKeyword(k);
    if (typeof window !== 'undefined' && k) {
      const prev: string[] = JSON.parse(localStorage.getItem("recentSearches") || '[]');
      const next: string[] = [k, ...prev.filter((k: string) => k !== k)].slice(0, 10);
      localStorage.setItem('recentSearches', JSON.stringify(next));
    }
  }, [searchParams]);
  return keyword;
}
