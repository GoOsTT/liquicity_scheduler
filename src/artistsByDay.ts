export type Artist = {
    name: string;
    startTime: [number, number, number, number, number]; // [year, month, day, hour, minute]
    stage: string;
};

export const artistsByDay: Record<string, Artist[]> = {
    Friday: [
        { name: 'ASTRONYMOUS', startTime: [2025, 7, 25, 11, 0], stage: 'Galaxy' },
        { name: 'CREEK', startTime: [2025, 7, 25, 12, 30], stage: 'Galaxy' },
        { name: 'FLINT & FIGURE', startTime: [2025, 7, 25, 13, 45], stage: 'Galaxy' },
        { name: 'SEKTOR & SUBSEQUENT', startTime: [2025, 7, 25, 15, 0], stage: 'Galaxy' },
        { name: 'A LITTLE SOUND', startTime: [2025, 7, 25, 16, 15], stage: 'Galaxy' },
        { name: 'BREAK', startTime: [2025, 7, 25, 17, 30], stage: 'Galaxy' },
        { name: 'GRAFIX', startTime: [2025, 7, 25, 19, 0], stage: 'Galaxy' },
        { name: 'KOVEN', startTime: [2025, 7, 25, 20, 15], stage: 'Galaxy' },
        { name: 'CAMO & KROOKED', startTime: [2025, 7, 25, 21, 15], stage: 'Galaxy' },
        { name: 'PENDULUM', startTime: [2025, 7, 25, 22, 45], stage: 'Galaxy' },

        { name: 'MIDAZE', startTime: [2025, 7, 25, 11, 0], stage: 'Solar' },
        { name: 'MOD', startTime: [2025, 7, 25, 12, 15], stage: 'Solar' },
        { name: 'CRASH COMET', startTime: [2025, 7, 25, 13, 30], stage: 'Solar' },
        { name: 'NISKERONE', startTime: [2025, 7, 25, 14, 45], stage: 'Solar' },
        { name: 'JAMEZY', startTime: [2025, 7, 25, 16, 0], stage: 'Solar' },
        { name: 'AKTIVE', startTime: [2025, 7, 25, 17, 15], stage: 'Solar' },
        { name: 'VIBE CHEMISTRY', startTime: [2025, 7, 25, 18, 30], stage: 'Solar' },
        { name: 'ARCANDO', startTime: [2025, 7, 25, 19, 45], stage: 'Solar' },
        { name: 'LEE MVTTHEWS', startTime: [2025, 7, 25, 20, 45], stage: 'Solar' },
        { name: '[IVY]', startTime: [2025, 7, 25, 22, 0], stage: 'Solar' },
        { name: 'SOTA', startTime: [2025, 7, 25, 23, 0], stage: 'Solar' },

        { name: 'BOTONE', startTime: [2025, 7, 25, 11, 0], stage: 'Lunar' },
        { name: 'FLEXUSZ', startTime: [2025, 7, 25, 13, 0], stage: 'Lunar' },
        { name: 'CURIOUS MIND', startTime: [2025, 7, 25, 14, 15], stage: 'Lunar' },
        { name: 'KEENO', startTime: [2025, 7, 25, 15, 30], stage: 'Lunar' },
        { name: 'WAEYS & RUEBEN', startTime: [2025, 7, 25, 16, 45], stage: 'Lunar' },
        { name: 'KYRIST', startTime: [2025, 7, 25, 18, 15], stage: 'Lunar' },
        { name: 'FADE BLACK', startTime: [2025, 7, 25, 19, 30], stage: 'Lunar' },
        { name: 'SIMULA', startTime: [2025, 7, 25, 21, 0], stage: 'Lunar' },
        { name: 'DJ HAZARD', startTime: [2025, 7, 25, 22, 30], stage: 'Lunar' }
    ],

    Saturday: [
        { name: 'ASTRONYMOUS', startTime: [2025, 7, 26, 11, 0], stage: 'Galaxy' },
        { name: 'DYLAN PURSER', startTime: [2025, 7, 26, 12, 30], stage: 'Galaxy' },
        { name: 'EDLAN', startTime: [2025, 7, 26, 14, 0], stage: 'Galaxy' },
        { name: 'ARTINO', startTime: [2025, 7, 26, 15, 15], stage: 'Galaxy' },
        { name: '1991', startTime: [2025, 7, 26, 16, 30], stage: 'Galaxy' },
        { name: 'MADUK', startTime: [2025, 7, 26, 17, 45], stage: 'Galaxy' },
        { name: 'LEXURUS', startTime: [2025, 7, 26, 19, 0], stage: 'Galaxy' },
        { name: 'METRIK', startTime: [2025, 7, 26, 20, 15], stage: 'Galaxy' },
        { name: 'ANDROMEDIK', startTime: [2025, 7, 26, 21, 30], stage: 'Galaxy' },
        { name: 'A.M.C', startTime: [2025, 7, 26, 22, 45], stage: 'Galaxy' },

        { name: 'MIDAZE', startTime: [2025, 7, 26, 11, 0], stage: 'Solar' },
        { name: 'GAIA', startTime: [2025, 7, 26, 12, 15], stage: 'Solar' },
        { name: 'MELINKI', startTime: [2025, 7, 26, 13, 30], stage: 'Solar' },
        { name: 'BLOSSOM', startTime: [2025, 7, 26, 14, 45], stage: 'Solar' },
        { name: 'YUE', startTime: [2025, 7, 26, 16, 0], stage: 'Solar' },
        { name: 'ISSEY CROSS', startTime: [2025, 7, 26, 17, 15], stage: 'Solar' },
        { name: 'METHOD', startTime: [2025, 7, 26, 18, 0], stage: 'Solar' },
        { name: 'FADE BLACK', startTime: [2025, 7, 26, 19, 0], stage: 'Solar' },
        { name: 'ÆON:MODE', startTime: [2025, 7, 26, 20, 0], stage: 'Solar' },
        { name: 'CIRCADIAN', startTime: [2025, 7, 26, 21, 15], stage: 'Solar' },
        { name: 'T & SUGAH & NCT', startTime: [2025, 7, 26, 22, 30], stage: 'Solar' },

        { name: 'BOTONE', startTime: [2025, 7, 26, 11, 0], stage: 'Lunar' },
        { name: 'NATUS', startTime: [2025, 7, 26, 12, 45], stage: 'Lunar' },
        { name: 'HIRAETH', startTime: [2025, 7, 26, 14, 0], stage: 'Lunar' },
        { name: 'MAKOTO', startTime: [2025, 7, 26, 15, 15], stage: 'Lunar' },
        { name: 'CALIBRE', startTime: [2025, 7, 26, 16, 45], stage: 'Lunar' },
        { name: 'LONDON ELEKTRICITY', startTime: [2025, 7, 26, 18, 15], stage: 'Lunar' },
        { name: 'LSB & DRS', startTime: [2025, 7, 26, 19, 45], stage: 'Lunar' },
        { name: 'TECHNIMATIC', startTime: [2025, 7, 26, 21, 15], stage: 'Lunar' },
        { name: 'SKEPTICAL', startTime: [2025, 7, 26, 22, 45], stage: 'Lunar' }
    ],

    Sunday: [
        { name: 'ASTRONYMOUS', startTime: [2025, 7, 27, 11, 0], stage: 'Galaxy' },
        { name: 'MIESFM', startTime: [2025, 7, 27, 12, 30], stage: 'Galaxy' },
        { name: 'DUSTKEY', startTime: [2025, 7, 27, 13, 45], stage: 'Galaxy' },
        { name: 'TELOMIC & LOW:R', startTime: [2025, 7, 27, 15, 0], stage: 'Galaxy' },
        { name: 'JON VOID', startTime: [2025, 7, 27, 16, 30], stage: 'Galaxy' },
        { name: 'FRED V', startTime: [2025, 7, 27, 17, 45], stage: 'Galaxy' },
        { name: 'FOX STEVENSON', startTime: [2025, 7, 27, 19, 0], stage: 'Galaxy' },
        { name: 'DIMENSION', startTime: [2025, 7, 27, 20, 15], stage: 'Galaxy' },
        { name: 'SUB FOCUS', startTime: [2025, 7, 27, 21, 30], stage: 'Galaxy' },

        { name: 'MIDAZE', startTime: [2025, 7, 27, 11, 0], stage: 'Solar' },
        { name: 'COBEN', startTime: [2025, 7, 27, 12, 15], stage: 'Solar' },
        { name: 'SURREAL', startTime: [2025, 7, 27, 13, 15], stage: 'Solar' },
        { name: 'AURIS & LENIZ', startTime: [2025, 7, 27, 14, 15], stage: 'Solar' },
        { name: 'ELIPSA', startTime: [2025, 7, 27, 15, 45], stage: 'Solar' },
        { name: 'FREAKS & GEEKS', startTime: [2025, 7, 27, 16, 45], stage: 'Solar' },
        { name: 'VOICIANS & DUALISTIC', startTime: [2025, 7, 27, 18, 0], stage: 'Solar' },
        { name: 'FLAVA D', startTime: [2025, 7, 27, 19, 15], stage: 'Solar' },
        { name: 'FEINT', startTime: [2025, 7, 27, 20, 30], stage: 'Solar' },
        { name: 'K MOTIONZ', startTime: [2025, 7, 27, 21, 45], stage: 'Solar' },

        // Lunar Stage - Sunday
        { name: 'BOTONE', startTime: [2025, 7, 27, 11, 0], stage: 'Lunar' },
        { name: 'QIOOS & ONEIROI', startTime: [2025, 7, 27, 12, 45], stage: 'Lunar' },
        { name: 'A-FLEX', startTime: [2025, 7, 27, 14, 45], stage: 'Lunar' },
        { name: 'RIYA', startTime: [2025, 7, 27, 16, 0], stage: 'Lunar' },
        { name: 'MADUK', startTime: [2025, 7, 27, 17, 15], stage: 'Lunar' },
        { name: 'LENS', startTime: [2025, 7, 27, 18, 30], stage: 'Lunar' },
        { name: 'RUSKO', startTime: [2025, 7, 27, 19, 45], stage: 'Lunar' },
        { name: 'PRIMATE', startTime: [2025, 7, 27, 21, 0], stage: 'Lunar' },
        { name: 'BLACK SUN EMPIRE', startTime: [2025, 7, 27, 22, 0], stage: 'Lunar' }
    ]
};