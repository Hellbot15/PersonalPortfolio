import React from "react";
import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 hairline-t bg-canvas text-stone-muted text-xs font-mono tracking-[0.18em]">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 uppercase">
          <span className="text-ivory font-medium">ABDUL GHANI</span>
          <span className="text-stone-dark">/</span>
          <span>B.TECH AI & DS · 2024–2028</span>
        </div>

        <div className="flex items-center gap-6 uppercase text-[11px]">
          <span>MUMBAI, INDIA</span>
          <span className="text-stone-dark">·</span>
          <Link href="#top" className="hover:text-ivory transition-colors">
            BACK TO TOP ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
