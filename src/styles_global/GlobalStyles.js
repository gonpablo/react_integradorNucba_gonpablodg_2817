import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --c-discount: #00a650;
  --c-discount-bg: #d4ffe9;
  --c-error: #bd2800;
  --c-error-light: #ffbfbf;
  --c-error-bg: #ffe6e6;
  --c-success: #00a650;
  --c-success-light: #a1dfaf;
  --c-success-bg: #ddf8e3;
  --c-featured: #f30660;
  --c-whatsapp: #00c046;
  --c-whatsapp-hover: #05a03e;
  --c-contact: #005CA4;
  --c-phone: #009385;
  --c-facebook: #3b5998;
  --c-twitter: #55acee;
  --c-instagram: #de1b85;
  --c-youtube: #c4302b;
  --u-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.35);
  --u-box-shadow-light: 0px 3px 4px 0px rgba(255, 255, 255, 0.12);
  --u-box-shadow-top: 0px -4px 4px 0px rgba(0, 0, 0, 0.15);
  --u-box-shadow-bottom: 0px 5px 10px 0px rgba(255, 255, 255, 0.25);
  --u-box-shadow-normal: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  --u-box-shadow-normal-color: 0px 0px 4px 0px var(--c-primary-medium);
  --u-box-shadow-button: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);
  --u-box-shadow-header: 0px 1px 15px 0px rgba(0, 0, 0, 0.12);
  --o-overlay: rgba(0, 0, 0, 0.5);
  --o-overlay-light: rgba(0, 0, 0, 0.2);
  --f-light: 300;
  --f-regular: 400;
  --f-medium: 500;
  --f-bold: 600;
  --f-ultrabold: 700;
  --f-black: 800;
  --l-container-width: 80rem;
}
:root .theme {
  --c-primary: #9538ff;
  --c-primary-hover: #6e19cd;
  --c-primary-medium: #cea2ff;
  --c-primary-light: #f7efff;
  --c-primary-light-hover: #e6d2ff;
  --c-primary-gradient: linear-gradient(270deg, #9538ff 0%, #5600b7 100%);
  --c-grey-100: #333333;
  --c-grey-80: #5a5a5a;
  --c-grey-60: #7c7c7c;
  --c-grey-50: #919191;
  --c-grey-40: #adadad;
  --c-grey-30: #cfcfcf;
  --c-grey-20: #e2e2e2;
  --c-grey-10: #ececec;
  --c-grey-5: #f5f5f5;
  --c-grey-0: #ffffff;
  --c-grey-000: #ffffff;
}
:root .theme--dark {
  --c-grey-100: #ffffff;
  --c-grey-80: #c8d5db;
  --c-grey-60: #a8b5bd;
  --c-grey-50: #7c898f;
  --c-grey-40: #515b60;
  --c-grey-30: #4c5457;
  --c-grey-20: #393f42;
  --c-grey-10: #2f3538;
  --c-grey-5: #272b2e;
  --c-grey-0: #1d2022;
  --c-grey-000: #121516;
}


html {
  line-height: 1.15;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

main {
  display: block;
}


hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;

}

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}


img {
  border-style: none;
}


button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}


button,
input {
  overflow: visible;
}


button,
select {
  text-transform: none;
}



button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}


button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted;
}


fieldset {
  padding: 0.35em 0.75em 0.625em;
}


legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}


textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}


[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type='number']::-webkit-inner-spin-button, 
input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
}


[type="search"] {
  outline-offset: -2px;
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}


details {
  display: block;
}


summary {
  display: list-item;
}


template {
  display: none;
}

[hidden] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

figure {
  margin: 0;
}

input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin: 0;
}

ul, ol, dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.3;
  font-weight: var(--f-bold);
}

h1 {
    font-size: 1.8rem;

    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
}

h2 {
  font-size: 1.375rem;

  & strong {
    color: var(--c-primary);
    font-weight: var(--f-bold);
  }

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
}

h3 {
  font-size: 1.1875rem;

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
}

p {
  margin: 0;
}

cite {
  font-style: normal;
}

fieldset {
  border-width: 0;
  padding: 0;
  margin: 0;
}

address {
  font-style: normal;
}

.hidden {
  opacity: 0;
}

button:active, button:focus, a:active, a:focus, input:active, input:focus, select:active, select:focus, textarea:active, textarea:focus {
  outline: none;
}


body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-weight: var(--f-regular);
  color: var(--c-grey-100);
  background-color: var(--c-grey-000);
  font-size: 0.85rem;
  margin: 0;
  overflow-x: hidden;
  position: relative;
  margin: 0rem;
  line-height: 1.35;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
}

.--mb0 {
  margin-bottom: 0rem !important;
}

.--mb3 {
  margin-bottom: 0.1875rem !important;
}

.--mb6 {
  margin-bottom: 0.375rem !important;
}

.--mb9 {
  margin-bottom: 0.5625rem !important;
}

.--mb12 {
  margin-bottom: 0.75rem !important;
}

.--mb20 {
  margin-bottom: 1.25rem !important;
}

.--mb25 {
  margin-bottom: 1.5625rem !important;
}

.--mb30 {
  margin-bottom: 1.875rem !important;
}

.--mb35 {
  margin-bottom: 2.1875rem !important;
}

.--mb40 {
  margin-bottom: 2.5rem !important;
}

.--mb50 {
  margin-bottom: 3.125rem !important;
}

.--mb55 {
  margin-bottom: 3.4375rem !important;
}

.--mt3 {
  margin-top: 0.1875rem !important;
}

.--mt6 {
  margin-top: 0.375rem !important;
}

.--mt12 {
  margin-top: 0.75rem !important;
}

.--mt15 {
  margin-top: 0.9375rem !important;
}

.--mt20 {
  margin-top: 1.25rem !important;
}

.--mt25 {
  margin-top: 1.5625rem !important;
}

.--mt30 {
  margin-top: 1.875rem !important;
}

.--mt35 {
  margin-top: 2.1875rem !important;
}

.--mt40 {
  margin-top: 2.5rem !important;
}

.--mt50 {
  margin-top: 3.125rem !important;
}

.--mt55 {
  margin-top: 3.4375rem !important;
}

.--text-center {
  text-align: center !important;
}

.--center {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.--margin-auto {
  margin: 0 auto;
}

.--space-between {
  justify-content: space-between !important;
}

.--flex-row {
  display: flex;
  flex-direction: row !important;
  grid-gap: 0.75rem;
}

.--c-primary {
  color: var(--c-primary) !important;
}

.--c-grey-0 {
  color: var(--c-grey-0) !important;
}

.--c-grey {
  color: var(--c-grey-60) !important;
}

.--c-discount {
  color: var(--c-discount);
  font-weight: var(--f-medium);
}

.--f-bold {
  font-weight: var(--f-bold) !important;
}

.--mobile {
  display: none !important;
}

@media (max-width: 992px) {
  .--mobile {
    display: flex !important;
  }

  .--desktop {
    display: none !important;
  }
}
`;



