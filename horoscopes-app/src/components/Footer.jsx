import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="max-w-md w-full bg-slate-800 p-4 text-slate-500 rounded-md gap-2 text-sm text-left">
            <p className="text-left text-xs mb-1">Uygulama, kullanıcıların burçlarını seçip günlük, haftalık ve aylık yorumları görüntülemelerini sağlar.</p>
            <p className="text-left text-xs mb-3">Burç simgeleri de burçlara göre renklendirilmiştir.</p>
            <p className="text-left text-xs mb-2">
                Geliştirici: <strong>Mustafa Karaçuha</strong>
            </p>

            <div className="flex justify-center gap-4 mt-4">
                <a href="https://www.linkedin.com/in/mustafakaracuha/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={18} className="text-white hover:text-gray-400 transition-all" />
                </a>
                <a href="https://github.com/mustafakaracuha" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={18} className="text-white hover:text-gray-400 transition-all" />
                </a>
                <a href="https://www.instagram.com/muskaracuha" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={18} className="text-white hover:text-gray-400 transition-all" />
                </a>{" "}
                <a href="https://www.x.com/muskaracuha/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={18} className="text-white hover:text-gray-400 transition-all" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
