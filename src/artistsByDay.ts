export type Artist = {
    id: number;
    name: string;
    startTime: [number, number, number, number, number]; // [year, month, day, hour, minute]
    stage: string;
};

export const artistsByDay: Record<string, Artist[]> = {
    Friday: [
        { id: 1, name: 'ASTRONYMOUS', startTime: [2025, 7, 25, 11, 0], stage: 'Galaxy' },
        { id: 2, name: 'CREEK', startTime: [2025, 7, 25, 12, 30], stage: 'Galaxy' },
        { id: 3, name: 'FLINT & FIGURE', startTime: [2025, 7, 25, 13, 45], stage: 'Galaxy' },
        { id: 4, name: 'SEKTOR & SUBSEQUENT', startTime: [2025, 7, 25, 15, 0], stage: 'Galaxy' },
        { id: 5, name: 'A LITTLE SOUND', startTime: [2025, 7, 25, 16, 15], stage: 'Galaxy' },
        { id: 6, name: 'BREAK', startTime: [2025, 7, 25, 17, 30], stage: 'Galaxy' },
        { id: 7, name: 'GRAFIX', startTime: [2025, 7, 25, 19, 0], stage: 'Galaxy' },
        { id: 8, name: 'KOVEN', startTime: [2025, 7, 25, 20, 15], stage: 'Galaxy' },
        { id: 9, name: 'CAMO & KROOKED', startTime: [2025, 7, 25, 21, 15], stage: 'Galaxy' },
        { id: 10, name: 'PENDULUM', startTime: [2025, 7, 25, 22, 45], stage: 'Galaxy' },

        { id: 11, name: 'MIDAZE', startTime: [2025, 7, 25, 11, 0], stage: 'Solar' },
        { id: 12, name: 'MOD', startTime: [2025, 7, 25, 12, 15], stage: 'Solar' },
        { id: 13, name: 'CRASH COMET', startTime: [2025, 7, 25, 13, 30], stage: 'Solar' },
        { id: 14, name: 'NISKERONE', startTime: [2025, 7, 25, 14, 45], stage: 'Solar' },
        { id: 15, name: 'JAMEZY', startTime: [2025, 7, 25, 16, 0], stage: 'Solar' },
        { id: 16, name: 'AKTIVE', startTime: [2025, 7, 25, 17, 15], stage: 'Solar' },
        { id: 17, name: 'VIBE CHEMISTRY', startTime: [2025, 7, 25, 18, 30], stage: 'Solar' },
        { id: 18, name: 'ARCANDO', startTime: [2025, 7, 25, 19, 45], stage: 'Solar' },
        { id: 19, name: 'LEE MVTTHEWS', startTime: [2025, 7, 25, 20, 45], stage: 'Solar' },
        { id: 20, name: '[IVY]', startTime: [2025, 7, 25, 22, 0], stage: 'Solar' },
        { id: 21, name: 'SOTA', startTime: [2025, 7, 25, 23, 0], stage: 'Solar' },

        { id: 22, name: 'BOTONE', startTime: [2025, 7, 25, 11, 0], stage: 'Lunar' },
        { id: 23, name: 'FLEXUSZ', startTime: [2025, 7, 25, 13, 0], stage: 'Lunar' },
        { id: 24, name: 'CURIOUS MIND', startTime: [2025, 7, 25, 14, 15], stage: 'Lunar' },
        { id: 25, name: 'KEENO', startTime: [2025, 7, 25, 15, 30], stage: 'Lunar' },
        { id: 26, name: 'WAEYS & RUEBEN', startTime: [2025, 7, 25, 16, 45], stage: 'Lunar' },
        { id: 27, name: 'KYRIST', startTime: [2025, 7, 25, 18, 15], stage: 'Lunar' },
        { id: 28, name: 'FADE BLACK', startTime: [2025, 7, 25, 19, 30], stage: 'Lunar' },
        { id: 29, name: 'SIMULA', startTime: [2025, 7, 25, 21, 0], stage: 'Lunar' },
        { id: 30, name: 'DJ HAZARD', startTime: [2025, 7, 25, 22, 30], stage: 'Lunar' }
    ],

    Saturday: [
        { id: 31, name: 'ASTRONYMOUS', startTime: [2025, 7, 26, 11, 0], stage: 'Galaxy' },
        { id: 32, name: 'DYLAN PURSER', startTime: [2025, 7, 26, 12, 30], stage: 'Galaxy' },
        { id: 33, name: 'EDLAN', startTime: [2025, 7, 26, 14, 0], stage: 'Galaxy' },
        { id: 34, name: 'ARTINO', startTime: [2025, 7, 26, 15, 15], stage: 'Galaxy' },
        { id: 35, name: '1991', startTime: [2025, 7, 26, 16, 30], stage: 'Galaxy' },
        { id: 36, name: 'MADUK', startTime: [2025, 7, 26, 17, 45], stage: 'Galaxy' },
        { id: 37, name: 'LEXURUS', startTime: [2025, 7, 26, 19, 0], stage: 'Galaxy' },
        { id: 38, name: 'METRIK', startTime: [2025, 7, 26, 20, 15], stage: 'Galaxy' },
        { id: 39, name: 'ANDROMEDIK', startTime: [2025, 7, 26, 21, 30], stage: 'Galaxy' },
        { id: 40, name: 'A.M.C', startTime: [2025, 7, 26, 22, 45], stage: 'Galaxy' },

        { id: 41, name: 'MIDAZE', startTime: [2025, 7, 26, 11, 0], stage: 'Solar' },
        { id: 42, name: 'GAIA', startTime: [2025, 7, 26, 12, 15], stage: 'Solar' },
        { id: 43, name: 'MELINKI', startTime: [2025, 7, 26, 13, 30], stage: 'Solar' },
        { id: 44, name: 'BLOSSOM', startTime: [2025, 7, 26, 14, 45], stage: 'Solar' },
        { id: 45, name: 'YUE', startTime: [2025, 7, 26, 16, 0], stage: 'Solar' },
        { id: 46, name: 'ISSEY CROSS', startTime: [2025, 7, 26, 17, 15], stage: 'Solar' },
        { id: 47, name: 'METHOD', startTime: [2025, 7, 26, 18, 0], stage: 'Solar' },
        { id: 48, name: 'FADE BLACK', startTime: [2025, 7, 26, 19, 0], stage: 'Solar' },
        { id: 49, name: 'ÆON:MODE', startTime: [2025, 7, 26, 20, 0], stage: 'Solar' },
        { id: 50, name: 'CIRCADIAN', startTime: [2025, 7, 26, 21, 15], stage: 'Solar' },
        { id: 51, name: 'T & SUGAH & NCT', startTime: [2025, 7, 26, 22, 30], stage: 'Solar' },

        { id: 52, name: 'BOTONE', startTime: [2025, 7, 26, 11, 0], stage: 'Lunar' },
        { id: 53, name: 'NATUS', startTime: [2025, 7, 26, 12, 45], stage: 'Lunar' },
        { id: 54, name: 'HIRAETH', startTime: [2025, 7, 26, 14, 0], stage: 'Lunar' },
        { id: 55, name: 'MAKOTO', startTime: [2025, 7, 26, 15, 15], stage: 'Lunar' },
        { id: 56, name: 'CALIBRE', startTime: [2025, 7, 26, 16, 45], stage: 'Lunar' },
        { id: 57, name: 'LONDON ELEKTRICITY', startTime: [2025, 7, 26, 18, 15], stage: 'Lunar' },
        { id: 58, name: 'LSB & DRS', startTime: [2025, 7, 26, 19, 45], stage: 'Lunar' },
        { id: 59, name: 'TECHNIMATIC', startTime: [2025, 7, 26, 21, 15], stage: 'Lunar' },
        { id: 60, name: 'SKEPTICAL', startTime: [2025, 7, 26, 22, 45], stage: 'Lunar' }
    ],

    Sunday: [
        { id: 61, name: 'ASTRONYMOUS', startTime: [2025, 7, 27, 11, 0], stage: 'Galaxy' },
        { id: 62, name: 'MIESFM', startTime: [2025, 7, 27, 12, 30], stage: 'Galaxy' },
        { id: 63, name: 'DUSTKEY', startTime: [2025, 7, 27, 13, 45], stage: 'Galaxy' },
        { id: 64, name: 'TELOMIC & LOW:R', startTime: [2025, 7, 27, 15, 0], stage: 'Galaxy' },
        { id: 65, name: 'JON VOID', startTime: [2025, 7, 27, 16, 30], stage: 'Galaxy' },
        { id: 66, name: 'FRED V', startTime: [2025, 7, 27, 17, 45], stage: 'Galaxy' },
        { id: 67, name: 'FOX STEVENSON', startTime: [2025, 7, 27, 19, 0], stage: 'Galaxy' },
        { id: 68, name: 'DIMENSION', startTime: [2025, 7, 27, 20, 15], stage: 'Galaxy' },
        { id: 69, name: 'SUB FOCUS', startTime: [2025, 7, 27, 21, 30], stage: 'Galaxy' },

        { id: 70, name: 'MIDAZE', startTime: [2025, 7, 27, 11, 0], stage: 'Solar' },
        { id: 71, name: 'COBEN', startTime: [2025, 7, 27, 12, 15], stage: 'Solar' },
        { id: 72, name: 'SURREAL', startTime: [2025, 7, 27, 13, 15], stage: 'Solar' },
        { id: 73, name: 'AURIS & LENIZ', startTime: [2025, 7, 27, 14, 15], stage: 'Solar' },
        { id: 74, name: 'ELIPSA', startTime: [2025, 7, 27, 15, 45], stage: 'Solar' },
        { id: 75, name: 'FREAKS & GEEKS', startTime: [2025, 7, 27, 16, 45], stage: 'Solar' },
        { id: 76, name: 'VOICIANS & DUALISTIC', startTime: [2025, 7, 27, 18, 0], stage: 'Solar' },
        { id: 77, name: 'FLAVA D', startTime: [2025, 7, 27, 19, 15], stage: 'Solar' },
        { id: 78, name: 'FEINT', startTime: [2025, 7, 27, 20, 30], stage: 'Solar' },
        { id: 79, name: 'K MOTIONZ', startTime: [2025, 7, 27, 21, 45], stage: 'Solar' },

        { id: 80, name: 'BOTONE', startTime: [2025, 7, 27, 11, 0], stage: 'Lunar' },
        { id: 81, name: 'QIOOS & ONEIROI', startTime: [2025, 7, 27, 12, 45], stage: 'Lunar' },
        { id: 82, name: 'A-FLEX', startTime: [2025, 7, 27, 14, 45], stage: 'Lunar' },
        { id: 83, name: 'RIYA', startTime: [2025, 7, 27, 16, 0], stage: 'Lunar' },
        { id: 84, name: 'MADUK', startTime: [2025, 7, 27, 17, 15], stage: 'Lunar' },
        { id: 85, name: 'LENS', startTime: [2025, 7, 27, 18, 30], stage: 'Lunar' },
        { id: 86, name: 'RUSKO', startTime: [2025, 7, 27, 19, 45], stage: 'Lunar' },
        { id: 87, name: 'PRIMATE', startTime: [2025, 7, 27, 21, 0], stage: 'Lunar' },
        { id: 88, name: 'BLACK SUN EMPIRE', startTime: [2025, 7, 27, 22, 0], stage: 'Lunar' }
    ]
};