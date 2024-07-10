import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        font-family: "Montserrat", sans-serif;
        font-size: 0.9rem;
        box-sizing: border-box;
        line-height: 1.5;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.text};
    }

    p {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    p, a {
        @media (max-width: 480px) {
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
        @media (min-width: 481px) and (max-width: 768px) {
              font-size: ${({ theme }) => theme.fontSizes.small};
        }
        @media (min-width: 769px) {
              font-size: ${({ theme }) => theme.fontSizes.medium};
        }
    }

    ::-webkit-scrollbar {
        width: 0; 
        height: 0; 
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
`;

export default GlobalStyle;
