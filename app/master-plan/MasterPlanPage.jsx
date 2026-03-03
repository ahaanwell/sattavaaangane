"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function MasterPlanPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelHeading, SetModelHeading] = useState("");

    return(
        <>
        <main className="w-full bg-white px-4 md:px-0">
            <div>
                <PageHero title={"Master Plan"}/>
            </div>
            <div className="max-w-5xl mx-auto py-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Sattva Aaranya Master Plan</h1>
                <div className="flex justify-center items-center gap-6 mt-3">
                    <button 
                    onClick={()=>{
                SetModelHeading("Download Broucher")
                setIsModalOpen(true)
              }}
                    className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"><FaDownload/> Broucher</button>
                    <button 
                    onClick={()=>{
                SetModelHeading("Download Cost Sheet")
                setIsModalOpen(true)
              }}
                    className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"><IoPricetagsOutline/> Cost Sheet</button>
                </div>
            </div>
        </main>
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} />
        </>
    )
};

export default MasterPlanPage;