import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

img {
  max-width: 100%;
}

/* button {
  all: unset;
  line-height: 0;
  cursor: pointer;
} */

ul {
  list-style: none;
}

body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  --scrollerGrey: 219, 219, 219;
  --lightGrey: 227, 227, 227;
  --darkerGrey: 200, 200, 200;
  --vibrantDarkBlue: 6, 37, 65;
  --vibrantLightBlue: 0, 118, 241;
  --tmdbDarkBlue: 3, 37, 65;
  --tmdbLightBlue: 1, 180, 228;
  --tmdbLighterGreen: 192, 254, 207;
  --tmdbLightGreen: 30, 213, 169;
  --tmdbLogoGreen: 144, 206, 161;
  --tmdbLogoOrange: 253, 193, 112;
  --tmdbLogoRed: 217, 59, 99;
  --accountSilver: 149, 149, 149;
  --accountPink: 234, 20, 140;
  --accountPurple: 128, 91, 231;
  --accountGreen: 1, 210, 119;
  --accountTeal: 1, 198, 172;
  --accountLightBlue: 1, 180, 228;
  --accountBlue: 1, 119, 210;
  --accountOrange: 210, 119, 1;
  --accountYellow: 210, 144, 1;
  --accountRed: 212, 2, 66;
  --imageBorderRadius: 0.5rem;
  --maxPrimaryPageWidth: 1400px;

  --white: #fff;
  --b-color: #dee2e6;
  --header: 4rem;
  --filters-width: 16.25rem;

  font-family: "Source Sans 3", Arial, sans-serif;
  font-size: 1rem;
}

.select-field {
  background: white;
  border: 1px solid #ced4da;
  width: calc(var(--filters-width) - 2rem);
}

.select-box {
  padding: 0 0.625rem;
  cursor: text;
}

.selected-options {
  gap: 0.1875rem;
}

.select-tags {
  flex: 1 0;
}

.tag {
  gap: 0.25rem;
  user-select: none;
  font-size: 1rem;
  background: var(--b-color, #dee2e6);
  border-radius: 0.375rem;
  padding: 0.25rem;
}

.remove-tag {
  cursor: pointer;
}

.options {
  display: none;
  position: absolute;
  width: calc(var(--filters-width) - 2rem);

  border-top: none;
  border-radius: 0.5rem;
  max-height: 24rem;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}

.open .options {
  display: block;
}

.search-tags {
  width: 100%;
  border: none;
  outline: none;
  padding: 0.5rem;
}

.clear {
  min-width: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.deselect {
  width: 100%;
  height: 100%;
}

.option {
  padding: 0.75rem;
  cursor: pointer;
}

.option.active {
  background: rgb(var(--tmdbLightBlue, (0, 118, 241)));
  border-bottom: 1px solid #eaeaea;
  color: white;
}

.tag:hover,
.option:hover {
  background: #eaeaea;
}

.no-data {
  padding: 0.75rem 0 0.75rem 0.75rem;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--header);
  max-width: 100vw;
  width: 100%;
  z-index: 50;
  transition: transform 0.2s linear;
}

.header-hidden {
  transform: translateY(calc(0px - var(--header)));
}

/* Search field style */
.search-text-field {
  border: none;
  outline: none;
  padding-left: 10px;
}
.search-text-field::placeholder {
  font-style: italic;
}
.search-text-field,
.search-text-field::placeholder {
  font-family: Arial, sans-serif;
  font-style: italic;
  font-size: 100%;
  color: #acacac;
}

.header {
  background-color: rgb(var(--tmdbDarkBlue));
}

.nav,
.header {
  color: var(--white);
}

.content,
.sub-block,
.header-container {
  max-width: var(--maxPrimaryPageWidth);
  margin-inline: auto;
}

.header-container {
  max-width: var(--maxPrimaryPageWidth);
  padding-inline: 1.25rem;
}

.content {
  margin-top: var(--header);
  padding: 1.25rem;
}

/* Sidebar horizontal nav icons */
.logo-l {
  display: block;
  margin-right: 1rem;
  width: 9.625rem;
  height: 1.25rem;
}

.logo-s {
  display: block;
  height: 2.5rem;
  width: 3.4375rem;
  margin: 0.5rem auto;
}

.nav-icon {
  width: 1.4em;
  height: 1.4em;
}

.nav-link,
.nav-icon {
  cursor: pointer;
}

.translate {
  color: white;
  background: transparent;
  padding: 0.25rem 0;

  width: 28px;
  height: 26px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 3px 5px;
  transition: linear 0.1s;
  color: #fff;
  font-weight: 600;
  font-size: 0.9em;
  text-transform: uppercase;
}

.translate:hover {
  background: white;
  color: rgb(var(--tmdbDarkBlue, (6, 37, 65)));
  cursor: pointer;
}

.user {
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
  color: #fff;
  font-size: 0.9em;
  font-weight: 600;
  padding-block: 0.4em;
  background-color: rgb(var(--accountTeal));
  cursor: pointer;
}

/* Filter section */
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(var(--lightGrey));
  background-color: #fff;
  border-radius: var(--imageBorderRadius);
  overflow: hidden;
  user-select: none;
}

.filter_panel {
  min-width: var(--filters-width, 16.25rem);
}

.content-grid {
  min-width: 9.25rem;
}

.filter_panel {
  font-size: 1.1em;
  margin-bottom: 1.25rem;
}

.filter_panel summary::after {
  content: url("../src/assets/icons/basic-chevron-right.svg") / "Chevron right";
}
details[open].filter_panel summary::after {
  transform: translate(-25%, -12%) rotate(90deg);
}
.filter_panel summary {
  cursor: pointer;
  list-style: none;
  padding: 0.875rem 1rem;
  font-size: 1.1em;
}

/* Each filter subsection */
.filter__div {
  border-top: 1px solid #eee;
  padding: 0.875rem 1rem 1rem;
}

.sort__select {
  border: none;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  text-overflow: ellipsis;
}

.sub-hover-icon {
  width: 1rem;
  height: 1rem;
}

/* show expand icon */
.poster-container,
.details-poster {
  /* width: calc(((100vw / 2.222222) - 40px) / 1.5);
  min-width: calc(((100vw / 2.222222) - 40px) / 1.5);
  height: calc((100vw / 2.222222) - 40px);
  min-height: calc((100vw / 2.222222) - 40px); */
  width: calc(((100vw / 2.222222)) / 1.5);
  min-width: calc(((100vw / 2.222222)) / 1.5);
  height: calc((100vw / 2.222222));
  min-height: calc((100vw / 2.222222));
  border-radius: var(--imageBorderRadius);
}

.poster-container {
  position: relative;
  max-width: 300px;
}

.details-poster {
  display: block;
  width: 100%;
  height: auto;
}

.expand-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.3s ease;
  color: rgba(255, 255, 255, 0.7);
  border-radius: var(--imageBorderRadius);
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.zoom {
  aspect-ratio: calc(2 / 3);
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;

  opacity: 0;
  transition: linear 0.2s;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.poster-container:hover .expand-overlay {
  opacity: 1;
}

.fullscreen-icon,
.info-icon {
  color: white;
  margin-right: 0.375rem;
  min-width: 1em;
  width: 1em;
  min-height: 1em;
  height: 1em;
}

.vibe-section {
  justify-content: space-around;
  padding: 0 1.25rem 1rem;
  align-items: center;
}

.v-line {
  box-sizing: border-box;
  min-width: 1px;
  min-height: 24px;
  display: inline-block;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 4px;
}

.info-icon {
  margin-inline: 0.375rem 0;
}

.details-box {
  color: #fff;
}

img.invert {
  filter: invert(100%);
}

:is(.facts span + span)::before {
  font-size: 1.1em;
  line-height: 1;
  content: "•";
  padding-inline: 0.5rem;
}

h2.h24 {
  font-size: calc(0.6em + 3vw);
  text-align: center;
  padding: 1rem 1.25rem;
}

.h24 span.release_date {
  opacity: 0.8;
  font-size: 0.8em;
  font-weight: 400;
}


/* Filters */
ul.multi_select li {
  display: inline-flex;
  border: 1px solid #9e9e9e;
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 0.9em;
  margin-right: 6px;
  margin-top: 8px;
  line-height: 1.25;
  cursor: pointer;
}

ul.multi_select li a {
  color: #000;
}

ul.multi_select li.selected,
ul.multi_select li.selected a,
ul.multi_select li:hover,
ul.multi_select li:hover a {
  background-color: rgb(var(--tmdbLightBlue));
  color: #fff;
  border-color: rgb(var(--tmdbLightBlue));
}

/* Keyword select section */
.select-container {
  min-height: 2.375rem;
  border: 1px solid rgba(33, 37, 41, 0.2);
  color: #212529;
  border-radius: 0.375rem;
}

.select-container:focus-within {
  border-color: rgba(1, 179, 228, 0.3764705882);
}

.select-container .search-tags,
.search-tags::placeholder {
  color: #212529;
}

/* Content section */
.card-style {
  position: relative;
  align-content: flex-start;
}

.card-hover {
  grid-area: 1 / 1 / -1 / -1;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  height: 100%;
  width: 100%;
  border-radius: var(--imageBorderRadius);
  z-index: 1;
  transition: linear 0.1s;
}

/* Each card */
.card-layout {
  display: grid;
  grid-template-areas: "link info";
  grid-template-columns: auto 1fr;
}
.basic-info {
  margin-bottom: 1.25rem;
}
.info {
  grid-area: info;
}

.details {
  padding: 0.875rem;
}

.title {
  font-weight: 600;
  line-height: 1.2em;
}

.release_date {
  font-size: 0.9em;
  color: #999;
}

.overview {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: 0.9em;
  line-height: 1.2em;

  max-height: 3.2em;
  height: auto;
}

.link-image {
  grid-area: link;
  display: block;
  height: 100%;
  aspect-ratio: 2 / 3;
  line-height: 0;
  background: #dbdbdb
    url("./assets/icons/glyphicons-basic-38-picture-default.svg") center/50%
    no-repeat;
  min-width: 5.875rem;
  width: 5.875rem;
  min-height: 8.8125rem;
}

.poster {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Extra-small devices */
@media only screen and (width < 36rem) {
  .card,
  .overview,
  .content-grid {
    margin-top: 1.25rem;
  }

  .title2 {
    max-width: 78%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    color: #999;
    font-size: 1em;
    white-space: nowrap;
  }
}



.flex {
  display: flex;
}

.col {
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.w-full {
  width: 100%;
}

.inline-4 {
  padding-inline: 4rem;
}

.block-3 {
  padding-block: 3rem;
}

.btt-3 {
  margin-bottom: 3rem;
}

.btt-2 {
  margin-bottom: 2rem;
}

.btt-1e {
  margin-bottom: 1.875rem;
}

.btt-1 {
  margin-bottom: 1.5rem;
}

.block-1 {
  margin-block: 1rem;
}

.inline-auto {
  margin-inline: auto;
}

.text-center {
  text-align: center;
}

.source-sans {
  font-family: "Source Sans 3", Arial, sans-serif;
  font-size: 1rem;
}

.fw-500 {
  font-weight: 500;
}
.fw-semi-bold {
  font-weight: 600;
}
.fw-bold {
  font-weight: 700;
}

.fs-10 {
  font-size: 0.625rem;
}
.fs-12 {
  font-size: 0.75rem;
}
.fs-14 {
  font-size: 0.875rem;
}
.fs-16 {
  font-size: 1rem;
}
.fs-18 {
  font-size: 1.125rem;
}
.fs-22 {
  font-size: 1.375rem;
}

.lh-15 {
  line-height: 1.5;
}

.h1 {
  font-size: 3rem;
}

.h2 {
  font-size: 1.6em;
  margin-bottom: 1.25rem;
}

.h3 {
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
}

.text-black {
  color: black;
}

.text-black-6 {
  color: rgba(0, 0, 0, 0.6);
}

.sub-block {
  padding-inline: 1.25rem;
}

.hidden,
.basic-info .hide-xs {
  display: none;
}

@media only screen and (width >= 36rem) {
  .content {
    padding: 1.875rem 2.5rem;
  }

  .details-nav {
    justify-content: center;
    margin-right: 0;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9.25rem, 1fr));
    gap: 1.875rem;
  }

  .filter_panel,
  .btn-blue:not(.search-sticky-btn) {
    width: var(--filters-width, 16.25rem);
  }

  /* Each card */
  .card-layout:not(.basic-info) {
    display: grid;
    grid-template-areas:
      ". . dots"
      ". . ."
      "consensus . ."
      "consensus . ."
      "info info info";
    grid-template-columns: 3rem auto 2.1rem;
  }

  .info:not(.basic-info .info) {
    grid-area: -3 / 1 / info / 4;
    padding: 1.625rem 0.625rem 0.75rem;
  }

  .dots {
    grid-area: dots;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .dots-icon {
    width: 1.6rem;
    height: 1.6rem;
    fill: rgba(var(--lightGrey), 0.5);
  }

  .dots-icon:hover {
    fill: rgb(var(--tmdbLightBlue));
  }

  .link-image:not(.basic-info .link-image) {
    grid-area: 1 / 1 / 4 / 4;
    display: block;
    width: 100%;
    aspect-ratio: 2 / 3;
    line-height: 0;
    background: #dbdbdb
      url("./assets/icons/glyphicons-basic-38-picture-default.svg") center/50%
      no-repeat;
  }

  .title {
    font-weight: 700;
  }
}

@media only screen and (width < 50rem) {
  .genres {
    display: block;
    width: 100%;
    order: 4;
    flex: 1 0 100%;
    text-align: center;
  }

  div.facts .genres::before {
    content: "";
  }

  /* Sidebar links */
  .nav-sub,
  .nav-sub li:not(:last-of-type),
  .nav-sub-cat {
    padding-bottom: 0.625rem;
  }

  .nav-sub-s {
    color: rgba(255, 255, 255, 0.6);
  }

  .nav-sub-links {
    margin: 0.625rem 0 1.25rem;
  }

  .nav-sub-cat {
    color: #fff;
    font-weight: 600;
    font-size: 1.3em;
  }

  .nav-sub-active {
    display: block;
  }
}

/* Small devices, tablets */
@media only screen and (width >= 50rem) {
  /* Navbar */
  .nav {
  }

  .nav-sub {
    position: relative;
    display: inline-block;
  }

  .nav-sub-hover {
    display: none;
    position: absolute;
    background-color: #fff;

    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border: 1px solid rgba(33, 37, 41, 0.2);
    border-radius: 0.375rem;
  }

  .nav-link {
    font-weight: 400;
    font-size: 0.9em;
    color: #000;
    padding: 0.5rem 3rem 0.5rem 1rem;
  }

  .nav-link:hover {
    color: #212529;
    background-color: #dee2e6;
  }

  .nav-sub:hover .nav-sub-hover {
    display: block;
  }

  .nav-droite,
  .nav-center {
    justify-content: flex-end;
    gap: 1.875rem;
  }

  /* details content */
  h2.h24 {
    margin: 0;
    padding: 0;
    font-size: 2.2rem;
  }

  .sub-block {
    padding-inline: 2.5rem;
  }
}

@media only screen and (width < 36rem) {
  .hide-xs,
  .consensus.hide-xs:not(.vibe-section .consensus) {
    display: none;
  }
}

@media only screen and (width >= 36rem) {
  .hide-x:not(.basic-info .title2):not(.basic-info .overview) {
    display: none;
  }
}

@media only screen and (width < 50rem) {
  .hide-s {
    display: none;
  }
}

@media only screen and (width >= 50rem) {
  .hide-l:not(.basic-info .title2):not(.basic-info .overview) {
    display: none;
  }
}

`

export default GlobalStyle
