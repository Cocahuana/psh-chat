// theme.ts
export interface ITheme {
    colors: {
        gray?: {
            100?: string;
            400?: string;
            900?: string;
        };
        red?: {
            400?: string;
        };
        pink?: {
            400?: string;
        };
        black?: {
            400?: string;
        };
        white?: {
            900?: string;
        };
        primary: string;
        secondary: string;
        tertiary: string;
        background: string;
        text: string;
        app: {
            sections: {
                chats: {
                    bg: string;
                    selected: {
                        hoverBg: string;
                        rightBorder: string;
                    };
                    createNew: string;
                    chatName: string,
                    lastMessage: string,
                };
                chatting: {
                    bg: string;
                    they: {
                        bg: string;
                        text: string;
                    };
                    me: {
                        bg: string;
                        text: string;
                    };
                    sendBtn: {
                        bg: string;
                        text: string;
                    };
                };
            };
        };
    };
    fontSizes: {
        ultraSmall: string;
        small: string;
        medium: string;
        large: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
    };
}