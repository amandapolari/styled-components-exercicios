import * as styled from 'styled-components';

export const ContainerApp = styled.styled.div`
    .tela-inteira {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    header {
        background-color: orange;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
        height: 10%;
    }

    main {
        min-height: 80%;
        display: flex;
    }

    .menu-vertical {
        flex-basis: 200px;
        border-right-style: solid;
        border-right-width: thin;
    }

    .botoes-meunu-vertical {
        list-style-type: none;
    }

    .painel-de-videos {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        row-gap: 10px;
        column-gap: 10px;
        margin: 10px;
    }

    footer {
        background: #333b3e;
        color: white;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        padding: 0 10px;
    }
`;
