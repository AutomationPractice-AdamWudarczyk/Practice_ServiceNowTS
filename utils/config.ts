import fs from 'fs';
import path from 'path';

type Secrets = {
    SNValid_USER: string;
    SNValid_PASS: string;
};

export function loadSecrets(): Secrets {
    const filePath = path.join(__dirname, '../fixtures/secrets.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}