import fs from 'fs';

export default function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: `${req.method} not allowed! You must use 'POST'` });
        return;
    }

    var color = req.body.color;
    console.log(color)

    try {
        fs.writeFileSync('public/color.json', JSON.stringify({ color: color }));
    }catch(e){
        res.status(500).json({ error: e, message: "Failed to write color to file, this is an issue with the mock server."});
        return;
    }
    
    res.status(200).json({ message: `Color ${color} saved!` });
}