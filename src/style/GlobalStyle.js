import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
html{
    scroll-bar : smooth;
}
    *{
        font-family: "Montserrat";
        ::-webkit-scrollbar {
        width: 2px;
        }

/* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    }    
    .container{
        max-width:1440px !important;
    }

    .form-control{
        padding: 12px 20px;
        border-radius: 10px;
        color: ${colors.dark};

        &:hover, &:active, &:focus{
            box-shadow: none;
        }
    }
    .nav-link{
         width: 200px;
         padding: 12px 20px;
         border-radius: 10px;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: 600;
         font-size: 20px;
        color : black !important;
        text-decoration : none;
        text-align : center;
    }

    .styledBtn{
       padding: 10px 20px;
       border-radius: 10px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;

       font-weight: 600;
       font-size: 20px;
        background: #FFEC00;
        color : black !important;
        text-decoration : none;
    }
    
    .active{
        background: #FFEC00;
    }
    .orders td, .orders th {
        text-align: center;
        vertical-align: middle;
    }

`;

export default GlobalStyle;
