import { useQuery } from "@tanstack/react-query";

async function fetchConfig() {
  const res = await fetch(`config.json`, { cache: "no-store" });
  const data = await res.json();
  return { isBarcodeScannerDemo: Boolean(data?.isBarcodeScannerDemo) };
}

export function useConfig() {
  const { data, isLoading } = useQuery({
    queryKey: ["config"],
    queryFn: fetchConfig,
  });

  return {
    isBarcodeScannerDemo: data?.isBarcodeScannerDemo ?? null,
    isLoading,
  };
}
