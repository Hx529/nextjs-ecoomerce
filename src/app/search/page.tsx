'use client';
import useSearchKeywordSaver from "@/hooks/SearchKeywordSaver";

export default function SearchPage() {
  const keyword = useSearchKeywordSaver();

  return (
    <>
      <h2>Search results for &quot;{keyword}&quot;</h2>
    </>
  )
}
