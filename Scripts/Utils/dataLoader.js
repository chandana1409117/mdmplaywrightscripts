import fs from 'fs';
import path from 'path';

export function loadTestData() {
    const candidatePaths = [
        path.join(process.cwd(), 'Scripts', 'Utils', 'testdata.json'),
        path.join(process.cwd(), 'test-data', 'testdata.json')
    ];

    const dataPath = candidatePaths.find((candidatePath) => fs.existsSync(candidatePath));

    if (!dataPath) {
        throw new Error(`Test data file not found. Checked: ${candidatePaths.join(', ')}`);
    }

    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}