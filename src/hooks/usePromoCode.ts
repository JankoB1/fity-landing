import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export interface PromoCodeInfo {
    valid: boolean;
    reason: string | null;
    code: string;
    trial_days: number;
}

type State =
    | { status: 'loading' }
    | { status: 'loaded'; info: PromoCodeInfo }
    | { status: 'error' };

// Kod se moze uvek prikazati i bez odgovora servera (fallback na 30 dana) -
// jedina stvarna posledica neuspesnog fetch-a je da ne znamo da li je kod
// vec istekao/jos nije poceo, pa se ta poruka jednostavno ne prikazuje.
export function usePromoCode(code: string): State {
    const [state, setState] = useState<State>({ status: 'loading' });

    useEffect(() => {
        let cancelled = false;
        setState({ status: 'loading' });

        axios
            .get<PromoCodeInfo>(`${API_BASE_URL}/promo/${encodeURIComponent(code)}`)
            .then((res) => {
                if (!cancelled) setState({ status: 'loaded', info: res.data });
            })
            .catch((err) => {
                if (cancelled) return;
                // Nepostojeci kod vraca 404 sa {valid:false, reason:'invalid_code'} -
                // to je i dalje koristan odgovor, ne prava mrezna greska.
                const data = err?.response?.data;
                if (data && typeof data.valid === 'boolean') {
                    setState({ status: 'loaded', info: data });
                } else {
                    setState({ status: 'error' });
                }
            });

        return () => {
            cancelled = true;
        };
    }, [code]);

    return state;
}
