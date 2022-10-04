import { ping } from "minecraft-protocol";

export default async (req, res) => {
    await ping({ host: "mc.tygr.dev", port: 25565, closeTimeout: 1000 }, (err, response) => {
        if (err) {
            res.status(200).json({ error: err });
        } else {
            res.status(200).json(response);
        }
    });
};