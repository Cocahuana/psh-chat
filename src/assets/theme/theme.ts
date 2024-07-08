import { ITheme } from "./ITheme";
const theme: ITheme = {
    colors: {
        // gray: {
        //     100: "#E9E9E9",
        //     400: "#B1B1B1",
        //     900: "#7A7A7A",
        // },
        red: {
            400: "#FF0000",
        },
        // pink: {
        //     400: "#FCEDED",
        // }
        // black: {
        //     400: "#191A1E",
        // },
        white: {
            900: "#FFFFFF",
        },
        primary: '#0070f3',
        secondary: '#1a1a1a',
        tertiary:   "B1B1B1",
        background: '#fefefe',
        text: '#000000',
        app: {
            sections: {
                chats: {
                    bg: "#191A1E",
                    selected: {
                        hoverBg: "#3C3D3F",
                        rightBorder: "#FF0000"
                    },
                    createNew: "#B1B1B1",
                    chatName: "#FFFFFF",
                    lastMessage: "#B1B1B1"
                },
                chatting:{
                    bg: "#E9E9E9",
                    they:{
                        bg: "#FFFFFF",
                        text: "#B1B1B1"
                    },
                    me:{
                        bg: "#FCEDED",
                        text: "#B1B1B1"
                    },
                    sendBtn:{
                        bg: "#B1B1B1",
                        text: "#7A7A7A",
                    }
                }
            }
        }
    },
    fontSizes: {
      ultraSmall: '0.75rem',
      small: '0.875rem',
      medium: '1.1rem',
      large: '1.5rem',
    },
    spacing: {
      small: '0.5rem',
      medium: '1rem',
      large: '1.5rem',
    },
  };
  
  export default theme;
  