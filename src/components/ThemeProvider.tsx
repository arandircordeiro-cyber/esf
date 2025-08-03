'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Garante que o código só seja executado no cliente após a montagem
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderiza um fallback vazio durante a renderização do servidor
    return <div className="invisible">{children}</div>;
  }

  return <>{children}</>;
}
