import React from "react";
import styled from "styled-components";


export const SidebarStyled = styled.nav`
min-height: 4em;
background-color: #dcffff;
box-shadow: 0 5px 20px black;
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
        display: flexbox;
        align-items: center;
        h1 {
            color: var(--primaryColor);
            font-family: var(--titleFont);
            font-weight: bolder;
            font-size: 2rem;
            padding: 20px;
            cursor: default;
        }

        ol {
            display: flexbox;
            list-style: none;
            padding-right: 40px;
            li {
                margin: 0.5rem;
                a {
                    color: var(--textColor);
                    font-family: var(--normalFont);
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 1.2rem;
                    transition-duration: 300ms;
                    &:hover {
                        color: var(--textHoverColor);
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 912px){
    ul {
        li {
            h1 {
                font-size: 2.15rem;
            }
            ol {
                li {
                    a {
                        font-size: 1.35rem;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 712px){
    ul {
        li {
            h1 {
                font-size: 2.25rem;
            }
            ol {
                li {
                    a {
                        font-size: 1.45rem;
                    }
                }
            }
        }
    }
}
`

export const ContainerStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

export const CardStyled = styled.div`
background-image: url('https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Business_Analytics_Fundamentals.jpg');
background-size: cover;
width: 30em;
height: 10em;
margin: 1em;
display: flexbox;
justify-items: flex-end;
align-items: end;
border-radius: 6px;
transition-duration: 520ms;
cursor: pointer;
span {
    color: white;
    text-shadow: 2px 1px black;
    font-size: 1.3rem;
    font-family: Arial;
    padding-left: 10px;
}
&:hover {
    box-shadow: inset 0 -10px 30px black;
}
`

export const CorpComponentStyled = styled.div`
margin-top: 3.5em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--normalFont);
h2 {
    color: var(--primaryColor);
    font-family: var(--titleFont);
    margin-bottom: 1em;        
    font-size: 2rem;
}
div {
    display: flex;
    flex-wrap: wrap;
    section {
        font-size: 1.3rem;
        margin: 1em;
        label {
            font-size: 1rem;
            display: block;
            span {
                display: block;
                font-weight: bolder;
            }
            margin: 1em;
        }
    }
}


@media screen and (max-width: 600px){
    div {
        flex-direction: column;
        justify-content: center;
        section {
            margin: 0;
        }
    }
}
`