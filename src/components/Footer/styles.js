import styled from "styled-components"

export const FooterFlex = styled.footer`
  background-color: rgb(var(--tmdbDarkBlue));
  color: var(--white);
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  background-image: radial-gradient(
    at 30%top,
    #031d33 0%,
    rgba(var(--tmdbDarkBlue), 1) 70%
  );
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;

  align-items: center;
  align-content: space-between;

  width: 100vw;
  max-width: 100vw;
  height: auto;

  & nav {
    display: flex;
    font-size: 0.9em;
    padding: 0 1.25rem 2.5rem;
    color: #fff;
    flex-direction: column;
  }

  & nav a {
    color: #fff;
  }

  & nav div {
    margin-right: 20px;
    margin-bottom: 30px;
    text-align: left;
  }

  & section.join div {
    margin-right: 20px;
    margin-left: 20px;
  }
  & section.join a {
    padding: 10px 20px;
    line-height: 1.4em;
  }

  @media screen and (${(props) => props.theme.device.tablet}) {
    justify-content: center;

    & nav {
      padding-top: 80px;
      padding-bottom: 80px;
      flex-direction: row;
      justify-content: center;
    }

    & nav .rounded,
    & nav a.rounded {
      position: relative;
      top: 140px;
    }
    & nav div.join {
      text-align: right;
      position: relative;
      top: -36px;
      right: 0;
    }
    & nav div {
      margin-right: 40px;
      min-width: 0;
      box-sizing: border-box;
    }

    & nav div.join {
      top: 0;
      padding-bottom: 20px;
      word-wrap: normal;
      -ms-word-break: normal;
      word-break: normal;
      -ms-hyphens: none;
      -moz-hyphens: none;
      -webkit-hyphens: none;
      hyphens: none;
      text-align: left;
    }
    & nav .rounded {
      top: 0;
      color: #235ea7;

      border-color: #fff;
      background-color: #fff;
      color: rgba(var(--tmdbLightBlue), 1);
      font-size: 1.3em;
      display: inline-block;
      word-wrap: break-word;
      white-space: normal;
    }

    & nav ul li {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
      line-height: 1.6em;
    }
    &.pad {
      margin-top: 40px;
    }
    & ul.social li {
      margin-right: 10px;
      display: inline;
    }
    & span.right {
      padding: 54px 0 20px;
    }
    & nav ul.right {
      width: 100%;
      margin: 0 auto 10px;
      text-align: center;
      float: none;
    }
    & nav ul.right li {
      border-right: none;
      padding: 0 10px 8px 0;
      display: inline-block;
    }
    & ul.social {
      width: 100%;
    }
    & nav div h3 {
      text-transform: uppercase;
      white-space: normal;
    }
    & p {
      width: 100%;
      color: #fff;
      opacity: 0.1;
      font-size: 0.7em;
    }
  }
`
