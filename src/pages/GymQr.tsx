import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';

// Backend (fity Laravel repo) vec generise QR kod na /promotions/{code}/qr - ova
// stranica je samo zgodan omotac za preuzimanje u visokoj rezoluciji pre
// stampe. Nije deo korisnickog toka, namenjena je samo za internu upotrebu
// pri pripremi flajera/postera.
const apiOrigin = API_BASE_URL.replace(/\/api\/?$/, '');

function GymQr() {
    const { code: rawCode } = useParams<{ code: string }>();
    const code = (rawCode || 'GYM30').toUpperCase();
    const [format, setFormat] = useState<'png' | 'svg'>('png');
    const [size, setSize] = useState(1200);

    const [downloading, setDownloading] = useState(false);
    const targetUrl = `${window.location.origin}/promotions/${code}`;
    const qrUrl = `${apiOrigin}/promotions/${code}/qr?format=${format}&size=${size}`;

    // <a download> ne radi pouzdano za cross-origin resurse (slika je na
    // api.getfity.app, stranica na getfity.app) - browseri ga u tom slucaju
    // cesto ignorisu i samo otvore sliku u novom tabu. Fetch + blob URL
    // zaobilazi to i garantuje pravo preuzimanje.
    const handleDownload = useCallback(async () => {
        setDownloading(true);
        try {
            const res = await fetch(qrUrl);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `fity-qr-${code.toLowerCase()}.${format}`;
            link.click();
            URL.revokeObjectURL(blobUrl);
        } catch {
            window.open(qrUrl, '_blank');
        } finally {
            setDownloading(false);
        }
    }, [qrUrl, code, format]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-6 bg-[#F2F2F2]">
            <h1 className="text-[24px] font-bold">QR kod — {code}</h1>
            <p className="text-[14px] text-gray-600 -mt-4">Vodi na {targetUrl}</p>

            <img
                src={qrUrl}
                alt={`QR kod za ${code}`}
                className="bg-white p-6 rounded-2xl shadow-sm"
                style={{ width: 320, height: 320 }}
            />

            <div className="flex gap-3 items-center">
                <label className="text-[14px]">
                    Format:{' '}
                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value as 'png' | 'svg')}
                        className="border rounded px-2 py-1"
                    >
                        <option value="png">PNG (flajeri)</option>
                        <option value="svg">SVG (posteri, veliki formati)</option>
                    </select>
                </label>
                <label className="text-[14px]">
                    Veličina:{' '}
                    <select
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="border rounded px-2 py-1"
                    >
                        <option value={600}>600px</option>
                        <option value={1200}>1200px</option>
                        <option value={2400}>2400px</option>
                        <option value={4000}>4000px</option>
                    </select>
                </label>
            </div>

            <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-[#19B888] text-white font-bold rounded-2xl py-3 px-8 text-[16px] disabled:opacity-60"
            >
                {downloading ? 'Preuzimam...' : 'Preuzmi'}
            </button>
        </div>
    );
}

export default GymQr;
