import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import HoroscopeLogo from "../assets/logo/logo.png";

import {
    TbZodiacAries,
    TbZodiacTaurus,
    TbZodiacGemini,
    TbZodiacCancer,
    TbZodiacLeo,
    TbZodiacVirgo,
    TbZodiacLibra,
    TbZodiacScorpio,
    TbZodiacSagittarius,
    TbZodiacCapricorn,
    TbZodiacAquarius,
    TbZodiacPisces,
} from "react-icons/tb";

function AnimateIcon({ selectedSign }) {
    const renderSignIcon = (sign) => {
        switch (sign) {
            case "Koç":
                return <TbZodiacAries size={30} className="text-red-500" />;
            case "Boğa":
                return <TbZodiacTaurus size={30} className="text-green-500" />;
            case "İkizler":
                return <TbZodiacGemini size={30} className="text-yellow-500" />;
            case "Yengeç":
                return <TbZodiacCancer size={30} className="text-teal-500" />;
            case "Aslan":
                return <TbZodiacLeo size={30} className="text-orange-500" />;
            case "Başak":
                return <TbZodiacVirgo size={30} className="text-indigo-500" />;
            case "Terazi":
                return <TbZodiacLibra size={30} className="text-pink-500" />;
            case "Akrep":
                return <TbZodiacScorpio size={30} className="text-purple-500" />;
            case "Yay":
                return <TbZodiacSagittarius size={30} className="text-yellow-400" />;
            case "Oğlak":
                return <TbZodiacCapricorn size={30} className="text-brown-500" />;
            case "Kova":
                return <TbZodiacAquarius size={30} className="text-blue-500" />;
            case "Balık":
                return <TbZodiacPisces size={30} className="text-cyan-500" />;
            default:
                return <img src={HoroscopeLogo} className="w-10 h-10" alt="" />;
        }
    };

    return (
        <AnimatePresence>
            <motion.div key={selectedSign} className="bg-slate-800 p-4 mb-4 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                {renderSignIcon(selectedSign)}
            </motion.div>
        </AnimatePresence>
    );
}

export default AnimateIcon;
