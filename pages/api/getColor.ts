import fs from 'fs';

export default function handler(req: any, res: any) {
    let color = "";
    try {
        color = JSON.parse(fs.readFileSync('public/color.json').toString()).color;
    }catch (e) {
        res.status(500).json({ error: e, message: `Failed to read color from file, this is an issue with the mock server. Color.json was '${color}'`});
        return;
    }
    res.status(200).json({ color: color });
}