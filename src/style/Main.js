import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    justify-content:center;
    align-content:center;
    width:400px;
    // min-height:500px;
    margin:40px auto;
    grid-template-columns:repeat(4,100px);
    grid-template-rows: minmax(120px,auto) repeat(5,100px);
    box-shadow:2px 2px 10px #333;
    border-radius:30px;

`;

export const Screen = styled.div`
    width:32.5vw;
    grid-column:1/-1;
    // background-color:rgba(60,64,67,0.75);
    background-color:transparent;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    padding:10px;
    word-wrap:break-word;
    break-word:break-all;
    text-align:right;
    // border-top-left-rabius:10px;
    // border-top-right-rabius:10px;
`;

// export const Previous = styled.div`
// color:rgba(255,255,255,0.75);
// font-size:1.5rem;
// `;

// export const Current = styled.div`
// color:white;
// font:size:2.5;
// `;
export const Previous = styled.div`
    color: rgba(255,255,255,0.75);
    font-size: 1.5rem;

`;

export const Current = styled.div`
    color: white;
    font-size: 3rem;
    padding-right: 13px;
`;

export const Button = styled.button`
cursor:pointer;
font-size:1.5rem;
outline:none;
border:1px outset white;
border-radius:20px;
margin-left:11px;
width:6vw;
height:13vh;
// background-color:rgba(255,255,255,0.75);
background-color:transparent;
&:hover{
    background-color:rgba(255,255,255,0.9);
}
${function ({ gridSpan }) {
        if (gridSpan) {
            return `grid-column: span ${gridSpan};`;
        }
    }}
 ${({ operation }) => operation && 'background-color:#99ddff;'}

 ${({ control }) => control && 'background-color:#b3e6ff;width:14vw;'}

 ${({ equals }) => equals && 'background-color:#99ddff; border-bottom-right-radius:10px;width:14vw;'}

 ${({ decimal }) => decimal && 'background-color:#b3e6ff; border-bottom-left-radius:10px;'}

`;



