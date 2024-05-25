import CryptoJS from 'crypto-js';

class MatchMaking {
    static codeToUUID = (seed) => {
        const hash = CryptoJS.SHA256(seed.toLowerCase()).toString(CryptoJS.enc.Hex);

        const uuid = [
            hash.substring(0, 8),
            hash.substring(8, 12),
            '4' + hash.substring(13, 16),
            (parseInt(hash.substring(16, 17), 16) & 0x3 | 0x8).toString(16) + hash.substring(17, 20), // UUID variant 10xx
            hash.substring(20, 32)
        ].join('-');

        return uuid;
    }

    static generateRandomCode = () => {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }
}

export default MatchMaking;
