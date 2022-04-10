import * as React from 'react';
import { sha256_sync } from 'ton-crypto';
import BN from 'bn.js';

export const InterfaceIDComponent = React.memo(() => {

    const [value, setValue] = React.useState('');
    const hash = React.useMemo(() => {
        return (new BN(sha256_sync(value).slice(0, 16).toString('hex'), 'hex')).toString(10);
    }, [value]);

    return (
        <div>
            <br />
            <span>Interface ID: {hash}</span>
            <textarea
                style={{ borderWidth: 1, resize: 'none', height: 300, width: '100%', marginTop: 16, marginBottom: 16 }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
});