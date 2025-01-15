import React, { useState, useEffect } from "react";
import axios from "axios";

import { CgSpinner } from "react-icons/cg";
import Footer from "../components/Footer";
import Periods from "../components/Periods";
import AnimateIcon from "../components/AnimateIcon";

const zodiacSigns = ["Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"];

function Home() {
    const [selectedSign, setSelectedSign] = useState("");
    const [dailyHoroscope, setDailyHoroscope] = useState("");
    const [loading, setLoading] = useState(false);
    const [showFullText, setShowFullText] = useState(false);
    const [horoscopePeriod, setHoroscopePeriod] = useState("gunluk");

    const api_url = import.meta.env.VITE_API_URL;

    const encodeZodiacSign = (sign) => {
        const encodeMap = {
            Başak: "basak",
            Oğlak: "oglak",
            Yengeç: "yengec",
            İkizler: "ikizler",
            Boğa: "boga",
            Koç: "koc",
            Balık: "balik",
        };

        return encodeMap[sign] || encodeURIComponent(sign.toLowerCase());
    };

    const fetchHoroscope = async () => {
        setLoading(true);
        try {
            const encodedSign = encodeZodiacSign(selectedSign);

            const { data } = await axios.get(`${api_url}/${encodedSign}-burcu-${horoscopePeriod}-yorumu.html`);

            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const horoscopeText = doc.querySelector(".medyanet-content .detail-content-inner p")?.textContent;

            setDailyHoroscope(horoscopeText || "Burç yorumu bulunamadı.");
        } catch (error) {
            setDailyHoroscope("Burç yorumu çekilemedi. Lütfen tekrar deneyin.");
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }
    };

    useEffect(() => {
        if (selectedSign) {
            fetchHoroscope();
        }
    }, [selectedSign, horoscopePeriod]);

    const truncatedText = dailyHoroscope.substring(0, 250) + "...";

    return (
        <div className="w-full min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
            <AnimateIcon selectedSign={selectedSign} />
            <h1 className="text-2xl font-bold mb-6 capitalize">{horoscopePeriod === "gunluk" ? "Günlük" : horoscopePeriod === "haftalik" ? "Haftalık" : "Aylık"} Burç Yorumu</h1>
            <Periods horoscopePeriod={horoscopePeriod} setHoroscopePeriod={setHoroscopePeriod} />
            <div className="w-full flex items-center justify-center gap-4 mb-4">
                <select value={selectedSign} onChange={(e) => setSelectedSign(e.target.value)} className="p-4 outline-none bg-slate-800 rounded-md text-white w-full max-w-md">
                    <option value="">Burç seçiniz</option>
                    {zodiacSigns.map((sign, index) => (
                        <option key={index} value={sign}>
                            {sign}
                        </option>
                    ))}
                </select>
            </div>
            {selectedSign && (
                <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full mb-4">
                    {loading ? (
                        <p className="text-center flex items-center justify-center text-slate-300">
                            <CgSpinner className="animate-spin" size={30} />
                        </p>
                    ) : (
                        <p className="text-slate-300">{showFullText ? dailyHoroscope : truncatedText}</p>
                    )}
                    <button onClick={() => setShowFullText((prev) => !prev)} className="mt-4 text-blue-500 text-sm transition-all hover:text-blue-600">
                        {showFullText ? "Daha Az Göster" : "Devamını oku"}
                    </button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Home;
