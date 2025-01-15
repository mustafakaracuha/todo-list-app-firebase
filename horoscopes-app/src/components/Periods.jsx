import React from "react";

function Periods({horoscopePeriod, setHoroscopePeriod}) {
    return (
        <div className="w-full max-w-md flex items-center justify-start gap-3 mb-4 mt-4">
            <button onClick={() => setHoroscopePeriod("gunluk")} className={`py-2 px-3 rounded-lg transition-all text-sm ${horoscopePeriod === "gunluk" ? "bg-violet-500" : "bg-slate-800"}`}>
                Günlük
            </button>
            <button onClick={() => setHoroscopePeriod("haftalik")} className={`py-2 px-3 rounded-lg transition-all text-sm ${horoscopePeriod === "haftalik" ? "bg-rose-500" : "bg-slate-800"}`}>
                Haftalık
            </button>
            <button onClick={() => setHoroscopePeriod("aylik")} className={`py-2 px-3 transition-all rounded-lg text-sm ${horoscopePeriod === "aylik" ? "bg-green-500" : "bg-slate-800"}`}>
                Aylık
            </button>
        </div>
    );
}

export default Periods;
