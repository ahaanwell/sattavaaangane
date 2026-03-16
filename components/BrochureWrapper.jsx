"use client";

import { useState } from "react";
import BrochureDownload from "./BrochureDownload";

export default function BrochureWrapper() {
  const [openPanel, setOpenPanel] = useState(null);

  return (
    <>
      <BrochureDownload
        id="brochure"
        openPanel={openPanel}
        setOpenPanel={setOpenPanel}
        topPosition={"top-60 md:top-50"}
        frmName={"Brochure"}
      />

      <BrochureDownload
        id="costsheet"
        openPanel={openPanel}
        setOpenPanel={setOpenPanel}
        topPosition={"top-120 md:top-110"}
        frmName={"Cost Sheet"}
      />
    </>
  );
}