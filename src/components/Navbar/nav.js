import { TypeAnimation } from 'react-type-animation';
import LogoFalling from "../logofalling";
import '../../common.css';
import Scroll from 'react-scroll';
import React, { useRef } from 'react';
const ScrollLink = Scroll.ScrollLink;

function MyLogo() {
    return <a href={"/"} className={"logo"}>
        <svg height="38px" viewBox="0 0 350.00000000000006 68.8146789927901"
             className="my-logo">
            <defs id="SvgjsDefs5725"></defs>
            <g id="SvgjsG5726" featurekey="nameFeature-0"
               transform="matrix(1.5536301650908158,0,0,1.5536301650908158,-3.848218197591635,-17.334911978387247)"
               fill="#3b82f6">
                <path
                    d="M7.72 25.32 c0.05332 -0.05332 0.12 -0.06 0.2 -0.02 s0.15332 0.1 0.22 0.18 s0.12668 0.16668 0.18 0.26 s0.08 0.16664 0.08 0.21996 c-0.21332 0.18668 -0.59332 0.57336 -1.14 1.16 s-1.12 1.2067 -1.72 1.86 s-1.14 1.26 -1.62 1.82 s-0.76 0.90668 -0.84 1.04 c-0.37332 -0.16 -0.57332 -0.38 -0.6 -0.66 s0.12 -0.56668 0.44 -0.86 c0.69332 -0.72 1.4333 -1.4867 2.22 -2.3 s1.6467 -1.7133 2.58 -2.7 z M2.52 31.32 c-0.05332 -0.05332 -0.053244 -0.12652 0.000078124 -0.21984 s0.14 -0.18 0.26 -0.26 s0.24 -0.15332 0.36 -0.22 s0.22 -0.11336 0.3 -0.14004 c0.45332 0.61332 0.98664 1.2266 1.6 1.84 s1.1866 1.16 1.72 1.64 c0.64 0.56 1.28 1.1067 1.92 1.64 c-0.26668 0.45332 -0.56668 0.70664 -0.9 0.75996 s-0.63332 -0.08 -0.9 -0.4 c-0.69332 -0.69332 -1.3533 -1.3933 -1.98 -2.1 s-1.42 -1.5534 -2.38 -2.54 z M19.481 27.4 c0.66668 0.10668 1.2202 0.25332 1.6602 0.44 s0.78668 0.39336 1.04 0.62004 s0.45332 0.46 0.6 0.7 s0.28668 0.46668 0.42 0.68 c-0.02668 0.10668 -0.15336 0.09336 -0.38004 -0.039961 s-0.44668 -0.26664 -0.66 -0.39996 c-0.58668 -0.37332 -1.2934 -0.6 -2.12 -0.68 s-1.5934 -0.03332 -2.3 0.14 s-1.2734 0.47332 -1.7 0.9 s-0.53336 0.94668 -0.32004 1.56 s0.59332 1.1466 1.14 1.6 s1.1534 0.86 1.82 1.22 s1.3334 0.68668 2 0.98 s1.2134 0.58664 1.64 0.87996 c0.53332 -0.29332 0.98664 -0.54 1.36 -0.74 s0.70664 -0.38668 0.99996 -0.56 s0.59332 -0.33332 0.9 -0.48 s0.66 -0.31336 1.06 -0.50004 c0.05332 -0.02668 0.1 -0.04 0.14 -0.04 s0.04 0.03332 0 0.1 s-0.14668 0.17336 -0.32 0.32004 s-0.44664 0.35336 -0.81996 0.62004 c-0.18668 0.13332 -0.53336 0.36 -1.04 0.68 s-1.0534 0.66668 -1.64 1.04 c0.32 0.29332 0.57332 0.6 0.76 0.92 c0.16 0.29332 0.27332 0.60664 0.34 0.93996 s0.0066796 0.67332 -0.18 1.02 c-0.53332 0.85332 -1.1333 1.52 -1.8 2 s-1.28 0.81332 -1.84 1 c-0.37332 0.13332 -0.78664 0.14664 -1.24 0.039961 s-0.81332 -0.32 -1.08 -0.64 c-0.29332 -0.42668 -0.36664 -0.86 -0.21996 -1.3 s0.39336 -0.86668 0.74004 -1.28 s0.74668 -0.80664 1.2 -1.18 s0.85332 -0.70664 1.2 -0.99996 c-0.24 -0.26668 -0.70668 -0.59336 -1.4 -0.98004 s-1.4066 -0.81336 -2.14 -1.28 s-1.3933 -0.96668 -1.98 -1.5 s-0.90668 -1.0666 -0.96 -1.6 c-0.10668 -0.58668 -0.033359 -1.1534 0.21996 -1.7 s0.62664 -1.0267 1.12 -1.44 s1.0666 -0.72 1.72 -0.92 s1.34 -0.24668 2.06 -0.14 z M19.121 41.12 c0.29332 0.13332 0.62668 0.13328 1 -0.000039062 s0.72664 -0.32664 1.06 -0.57996 s0.62664 -0.53332 0.87996 -0.84 s0.42 -0.58 0.5 -0.82 c0.08 -0.21332 0.0066796 -0.44664 -0.22 -0.69996 s-0.46 -0.46 -0.7 -0.62 c-0.29332 0.21332 -0.62664 0.48664 -0.99996 0.81996 s-0.7 0.67332 -0.98 1.02 s-0.48668 0.68 -0.62 1 s-0.10664 0.56 0.08004 0.72 z M31.642 11.2 c0.02668 0.08 0.0534 0.42 0.080076 1.02 s0.04668 1.3667 0.06 2.3 s0.02 1.9933 0.02 3.18 s0.0066796 2.4067 0.02 3.66 s0.02 2.4933 0.02 3.72 l0 3.38 l0 2.6 l0 1.42 c0.29332 -1.3067 0.71332 -2.3867 1.26 -3.24 s1.0467 -1.3066 1.5 -1.36 c0.53332 -0.10668 0.94 0.0066408 1.22 0.33996 s0.50668 0.78664 0.68 1.36 s0.34664 1.2133 0.51996 1.92 s0.40664 1.38 0.69996 2.02 s0.69332 1.2067 1.2 1.7 s1.2 0.79332 2.08 0.9 c-0.69332 0.58668 -1.3133 0.85336 -1.86 0.80004 s-1.0334 -0.29332 -1.46 -0.72 s-0.8 -0.97336 -1.12 -1.64 s-0.58668 -1.32 -0.8 -1.96 s-0.38664 -1.2 -0.51996 -1.68 s-0.22664 -0.76 -0.27996 -0.84 c-0.16 -0.21332 -0.33332 -0.22664 -0.52 -0.039961 s-0.38 0.48 -0.58 0.88 s-0.38668 0.86 -0.56 1.38 s-0.32664 1.0133 -0.45996 1.48 s-0.24 0.86 -0.32 1.18 s-0.12 0.46668 -0.12 0.44 c-0.08 0.34668 -0.14668 0.8 -0.2 1.36 s-0.08664 1.1133 -0.09996 1.66 s-0.01332 1.04 0 1.48 s0.04664 0.71332 0.09996 0.82 c-0.18668 0 -0.45336 -0.06 -0.80004 -0.18 s-0.61336 -0.18 -0.80004 -0.18 l0 -3.14 l0 -4.32 l-0.02 -5.1 l-0.08 -5.5 l-0.14 -5.52 l-0.24 -5.18 c0 -0.05332 0.16 -0.15332 0.48 -0.3 s0.66668 -0.18 1.04 -0.1 z M53.602999999999994 28.240000000000002 c-0.02668 0.16 -0.0866 0.49324 -0.17992 0.99992 s-0.19332 1.1 -0.3 1.78 s-0.2 1.3933 -0.28 2.14 s-0.12668 1.4534 -0.14 2.12 s0.02668 1.2334 0.12 1.7 s0.24664 0.75336 0.45996 0.86004 c0.61332 0.29332 1.24 0.19332 1.88 -0.3 s1.3867 -1.2466 2.24 -2.26 c0.08 0 0.08668 0.10668 0.02 0.32 s-0.17336 0.44664 -0.32004 0.69996 l-0.44 0.76 l-0.34 0.5 c-0.21332 0.26668 -0.52 0.56668 -0.92 0.9 s-0.82668 0.6 -1.28 0.8 s-0.88664 0.28668 -1.3 0.26 s-0.75332 -0.26668 -1.02 -0.72 c-0.13332 -0.32 -0.21332 -0.71332 -0.24 -1.18 s-0.02668 -0.94 0 -1.42 s0.06668 -0.92 0.12 -1.32 s0.09332 -0.69332 0.12 -0.88 c-0.56 1.04 -1.2 2.0267 -1.92 2.96 s-1.4267 1.6666 -2.12 2.2 s-1.3333 0.82 -1.92 0.86 s-1.04 -0.3 -1.36 -1.02 c-0.18668 -0.69332 -0.18668 -1.4733 0 -2.34 s0.46668 -1.6467 0.84 -2.34 c0.56 -0.96 1.1467 -1.84 1.76 -2.64 s1.2666 -1.48 1.96 -2.04 s1.42 -0.96668 2.18 -1.22 s1.5533 -0.31332 2.38 -0.18 z M46.0831 38.3999 c0.26668 0.05332 0.69332 -0.14672 1.28 -0.60004 s1.2 -1.0866 1.84 -1.9 s1.22 -1.76 1.74 -2.84 s0.86 -2.22 1.02 -3.42 l-0.46 0 l-0.7 0.24 c-1.0133 0.66668 -1.88 1.4467 -2.6 2.34 s-1.28 1.76 -1.68 2.6 s-0.64 1.5933 -0.72 2.26 s0.01332 1.1067 0.28 1.32 z M62.964000000000006 27.8 c0 0.74668 -0.0068752 1.4932 -0.020195 2.2399 s-0.026641 1.4667 -0.039961 2.16 s-0.026641 1.3466 -0.039961 1.96 s-0.03332 1.16 -0.06 1.64 c0 -0.10668 0.06 -0.36668 0.18 -0.78 s0.28668 -0.88664 0.5 -1.42 s0.44664 -1.1 0.69996 -1.7 s0.52664 -1.1333 0.81996 -1.6 s0.59332 -0.83336 0.9 -1.1 s0.59336 -0.34668 0.86004 -0.24 c0.58668 0.26668 1 0.65336 1.24 1.16 s0.41332 1.0867 0.52 1.74 s0.21336 1.38 0.32004 2.18 s0.34668 1.64 0.72 2.52 c0.16 0.4 0.39332 0.69332 0.7 0.88 s0.6 0.32 0.88 0.4 s0.50668 0.12668 0.68 0.14 s0.23332 0.06 0.18 0.14 c-0.66668 0.50668 -1.24 0.68 -1.72 0.52 s-0.88668 -0.51332 -1.22 -1.06 s-0.60664 -1.2 -0.81996 -1.96 s-0.40664 -1.4933 -0.57996 -2.2 s-0.32664 -1.3067 -0.45996 -1.8 s-0.28 -0.74 -0.44 -0.74 c-0.24 0.02668 -0.5 0.25336 -0.78 0.68004 s-0.56668 0.96 -0.86 1.6 s-0.57332 1.34 -0.84 2.1 s-0.51336 1.4733 -0.74004 2.14 s-0.40668 1.24 -0.54 1.72 s-0.21332 0.77332 -0.24 0.88 c-0.4 0 -0.64668 0.01332 -0.74 0.04 s-0.24664 -0.10664 -0.45996 -0.39996 c0.13332 -2.3467 0.18 -4.5668 0.14 -6.66 s-0.1 -3.9133 -0.18 -5.46 c0 -0.24 0.06 -0.36 0.18 -0.36 s0.25332 0.05332 0.4 0.16 s0.3 0.21336 0.46 0.32004 s0.29332 0.16 0.4 0.16 z M76.485 26.52 c0 -0.24 0.066328 -0.38012 0.19965 -0.42012 s0.27332 -0.03332 0.42 0.02 s0.29336 0.14 0.44004 0.26 s0.24668 0.20668 0.3 0.26 c0.05332 0.69332 0.026641 1.64 -0.08004 2.84 s-0.16 2.6933 -0.16 4.48 c0.10668 -0.42668 0.26668 -0.93336 0.48 -1.52 s0.46 -1.18 0.74 -1.78 s0.58668 -1.16 0.92 -1.68 s0.66 -0.93332 0.98 -1.24 s0.62668 -0.46 0.92 -0.46 s0.56 0.22668 0.8 0.68 c0.05332 0.13332 0.1 0.40664 0.14 0.81996 s0.06668 0.91332 0.08 1.5 s0.03332 1.24 0.06 1.96 s0.06668 1.4533 0.12 2.2 c0.24 -0.58668 0.51332 -1.2334 0.82 -1.94 s0.63336 -1.3467 0.98004 -1.92 s0.72 -1.02 1.12 -1.34 s0.82668 -0.38668 1.28 -0.2 c0.21332 0.08 0.36 0.32668 0.44 0.74 s0.14668 0.9 0.2 1.46 s0.11332 1.1533 0.18 1.78 s0.19336 1.1934 0.38004 1.7 s0.45336 0.91336 0.80004 1.22 s0.81336 0.42 1.4 0.34 c0.32 0 0.55332 0.0066796 0.7 0.02 s0.25336 0.03332 0.32004 0.06 s0.09336 0.06668 0.08004 0.12 s-0.02 0.13332 -0.02 0.24 c-0.98668 0.50668 -1.7934 0.67336 -2.42 0.50004 s-1.12 -0.54664 -1.48 -1.12 s-0.61332 -1.2666 -0.76 -2.08 s-0.24668 -1.62 -0.3 -2.42 c-0.05332 -0.34668 -0.16664 -0.49336 -0.33996 -0.44004 s-0.38664 0.25332 -0.63996 0.6 s-0.52664 0.78 -0.81996 1.3 s-0.57332 1.0733 -0.84 1.66 s-0.5 1.1534 -0.7 1.7 s-0.35332 0.99336 -0.46 1.34 c-0.13332 0.24 -0.34664 0.30668 -0.63996 0.2 s-0.48 -0.30668 -0.56 -0.6 c-0.10668 -0.42668 -0.16668 -0.95336 -0.18 -1.58 s-0.01332 -1.26 0 -1.9 s0.03332 -1.26 0.06 -1.86 s0.02668 -1.1133 0 -1.54 s-0.08 -0.72 -0.16 -0.88 s-0.22668 -0.12 -0.44 0.12 c-0.45332 0.69332 -0.87332 1.48 -1.26 2.36 s-0.72668 1.7933 -1.02 2.74 s-0.54 1.8934 -0.74 2.84 s-0.32668 1.8067 -0.38 2.58 c-0.45332 0.10668 -0.77332 0.04668 -0.96 -0.18 s-0.34668 -0.46 -0.48 -0.7 c0.05332 -0.34668 0.1 -1.02 0.14 -2.02 s0.08 -2.14 0.12 -3.42 s0.08 -2.5867 0.12 -3.92 s0.07332 -2.4933 0.1 -3.48 z M97.966 38.24 c0.18668 0.13332 0.49332 -0.093436 0.92 -0.68012 s0.84 -1.34 1.24 -2.26 s0.73332 -1.9 1 -2.94 s0.34668 -1.9467 0.24 -2.72 c0 -0.16 0.06668 -0.26 0.2 -0.3 s0.28664 -0.06 0.45996 -0.06 s0.34664 0.01332 0.51996 0.04 s0.3 0.05336 0.38 0.08004 c-0.05332 0.58668 -0.12664 1.3267 -0.21996 2.22 s-0.15332 1.78 -0.18 2.66 s0.0066408 1.68 0.09996 2.4 s0.31332 1.1867 0.66 1.4 c0.29332 0.18668 0.63332 0.17336 1.02 -0.039961 s0.76 -0.48 1.12 -0.8 s0.68668 -0.60668 0.98 -0.86 s0.48 -0.34 0.56 -0.26 c-0.10668 0.45332 -0.33336 0.89332 -0.68004 1.32 s-0.74 0.78668 -1.18 1.08 s-0.90668 0.5 -1.4 0.62 s-0.94 0.1 -1.34 -0.06 c-0.16 -0.02668 -0.28668 -0.18 -0.38 -0.46 s-0.17332 -0.60668 -0.24 -0.98 s-0.12 -0.77332 -0.16 -1.2 s-0.08668 -0.81336 -0.14 -1.16 l-0.72 1.44 l-0.8 1.52 l-0.76 1.24 l-0.6 0.6 c-0.53332 0.21332 -0.94664 0.26 -1.24 0.14 s-0.49332 -0.28668 -0.6 -0.5 c-0.16 -0.08 -0.27332 -0.35332 -0.34 -0.82 s-0.12 -1.06 -0.16 -1.78 s-0.06 -1.5333 -0.06 -2.44 l0 -2.78 l-0.04 -2.8 l-0.12 -2.54 c0.18668 0 0.37336 0.01332 0.56004 0.04 c0.16 0.02668 0.32 0.06 0.48 0.1 s0.29332 0.12668 0.4 0.26 c0.13332 0.61332 0.15332 1.6933 0.06 3.24 s-0.16664 3.4134 -0.21996 5.6 c0 0.08 0.0066796 0.23332 0.02 0.46 s0.04 0.47336 0.08 0.74004 s0.10668 0.52 0.2 0.76 s0.22 0.4 0.38 0.48 z M113.36699999999999 32.16 c0.61332 0.13332 1.1668 0.24016 1.6601 0.32016 s0.98664 0.15332 1.48 0.22 s1.04 0.12668 1.64 0.18 s1.3133 0.12 2.14 0.2 c0.24 0.26668 0.4 0.48668 0.48 0.66 s0.18668 0.44664 0.32 0.81996 c-0.85332 -0.16 -1.6266 -0.28 -2.32 -0.36 s-1.38 -0.14668 -2.06 -0.2 s-1.38 -0.1 -2.1 -0.14 s-1.52 -0.1 -2.4 -0.18 c-0.02668 1.36 0 2.5667 0.08 3.62 s0.08 2.0066 0 2.86 c-0.16 0.02668 -0.28668 0 -0.38 -0.08 s-0.18 -0.17332 -0.26 -0.28 s-0.16668 -0.22 -0.26 -0.34 s-0.22 -0.20668 -0.38 -0.26 c0.08 -3.68 0.06668 -7.0668 -0.04 -10.16 s-0.13336 -6.0532 -0.08004 -8.88 c0 -0.53332 0.0066796 -1.14 0.02 -1.82 s0.02 -1.3467 0.02 -2 s-0.01332 -1.24 -0.04 -1.76 s-0.08 -0.87332 -0.16 -1.06 c0.18668 -0.21332 0.36668 -0.34664 0.54 -0.39996 s0.48664 -0.09332 0.93996 -0.12 c0.05332 3.2533 0.05332 6.4668 0 9.64 s-0.05332 6.1868 0 9.04 c0.45332 -0.34668 0.93332 -0.77336 1.44 -1.28 s0.98 -1 1.42 -1.48 s0.82 -0.9 1.14 -1.26 s0.52 -0.55332 0.6 -0.58 c0.24 0.21332 0.48668 0.39332 0.74 0.54 s0.38 0.20668 0.38 0.18 c-0.66668 0.74668 -1.36 1.54 -2.08 2.38 s-1.5467 1.5 -2.48 1.98 z M126.728 11.2 c0.02668 0.08 0.0534 0.42 0.080076 1.02 s0.04668 1.3667 0.06 2.3 s0.02 1.9933 0.02 3.18 s0.0066796 2.4067 0.02 3.66 s0.02 2.4933 0.02 3.72 l0 3.38 l0 2.6 l0 1.42 c0.29332 -1.3067 0.71332 -2.3867 1.26 -3.24 s1.0467 -1.3066 1.5 -1.36 c0.53332 -0.10668 0.94 0.0066408 1.22 0.33996 s0.50668 0.78664 0.68 1.36 s0.34664 1.2133 0.51996 1.92 s0.40664 1.38 0.69996 2.02 s0.69332 1.2067 1.2 1.7 s1.2 0.79332 2.08 0.9 c-0.69332 0.58668 -1.3133 0.85336 -1.86 0.80004 s-1.0334 -0.29332 -1.46 -0.72 s-0.8 -0.97336 -1.12 -1.64 s-0.58668 -1.32 -0.8 -1.96 s-0.38664 -1.2 -0.51996 -1.68 s-0.22664 -0.76 -0.27996 -0.84 c-0.16 -0.21332 -0.33332 -0.22664 -0.52 -0.039961 s-0.38 0.48 -0.58 0.88 s-0.38668 0.86 -0.56 1.38 s-0.32664 1.0133 -0.45996 1.48 s-0.24 0.86 -0.32 1.18 s-0.12 0.46668 -0.12 0.44 c-0.08 0.34668 -0.14668 0.8 -0.2 1.36 s-0.08664 1.1133 -0.09996 1.66 s-0.01332 1.04 0 1.48 s0.04664 0.71332 0.09996 0.82 c-0.18668 0 -0.45336 -0.06 -0.80004 -0.18 s-0.61336 -0.18 -0.80004 -0.18 l0 -3.14 l0 -4.32 l-0.02 -5.1 l-0.08 -5.5 l-0.14 -5.52 l-0.24 -5.18 c0 -0.05332 0.16 -0.15332 0.48 -0.3 s0.66668 -0.18 1.04 -0.1 z M151.92899999999997 35.64 c0.05332 0.05332 0.046564 0.14684 -0.020117 0.28016 s-0.16 0.28 -0.28 0.44 s-0.24 0.31332 -0.36 0.46 s-0.20668 0.24668 -0.26 0.3 c-0.64 0.72 -1.2133 1.34 -1.72 1.86 s-0.92 0.96668 -1.24 1.34 c0 0.02668 -0.0066796 0.18 -0.02 0.46 s-0.02 0.43332 -0.02 0.46 c-0.05332 0.90668 -0.07332 1.82 -0.06 2.74 s-0.04668 1.8467 -0.18 2.78 c-0.16 1.0667 -0.32668 1.9267 -0.5 2.58 s-0.35332 1.1866 -0.54 1.6 s-0.38 0.76 -0.58 1.04 s-0.42 0.59332 -0.66 0.94 c-0.21332 0.29332 -0.45332 0.54664 -0.72 0.75996 s-0.62668 0.46664 -1.08 0.75996 c-0.61332 0.37332 -1.2533 0.65332 -1.92 0.84 s-1.28 0.22 -1.84 0.1 s-1.0333 -0.42 -1.42 -0.9 s-0.60668 -1.2 -0.66 -2.16 c-0.05332 -1.0667 0.13336 -2.12 0.56004 -3.16 s0.93336 -1.9867 1.52 -2.84 s1.16 -1.5733 1.72 -2.16 s0.94668 -0.98668 1.16 -1.2 c0.34668 -0.37332 0.66 -0.69332 0.94 -0.96 s0.56668 -0.51336 0.86 -0.74004 s0.60664 -0.47336 0.93996 -0.74004 s0.72664 -0.58668 1.18 -0.96 c0.10668 -0.64 0.17336 -1.3133 0.20004 -2.02 s0.02668 -1.4334 0 -2.18 c-0.48 0.98668 -0.99332 1.76 -1.54 2.32 s-1.04 0.98 -1.48 1.26 s-0.8 0.45332 -1.08 0.52 s-0.39332 0.1 -0.34 0.1 c-0.50668 0.08 -0.91336 0.1 -1.22 0.06 s-0.54668 -0.12 -0.72 -0.24 s-0.30664 -0.26 -0.39996 -0.42 s-0.16664 -0.32 -0.21996 -0.48 c-0.13332 -0.69332 -0.12664 -1.4066 0.020039 -2.14 s0.36668 -1.4333 0.66 -2.1 s0.61332 -1.28 0.96 -1.84 s0.66668 -1.0133 0.96 -1.36 c0.05332 -0.05332 0.18 -0.19332 0.38 -0.42 s0.46 -0.48 0.78 -0.76 s0.71332 -0.56668 1.18 -0.86 s1.0067 -0.56 1.62 -0.8 c0.61332 -0.13332 1.24 -0.19332 1.88 -0.18 s1.16 0.16664 1.56 0.45996 c-0.21332 0.08 -0.54 0.18 -0.98 0.3 s-0.72668 0.20668 -0.86 0.26 l0 0.08 c0 0.08 0.02668 0.12 0.08 0.12 c-0.45332 -0.10668 -1.16 0.08 -2.12 0.56 s-2 1.4 -3.12 2.76 c-0.50668 0.72 -0.89336 1.3667 -1.16 1.94 s-0.46 1.0666 -0.58 1.48 s-0.18 0.76664 -0.18 1.06 s0.01332 0.52 0.04 0.68 c0.02668 0.10668 0.12 0.2 0.28 0.28 s0.36 0.09332 0.6 0.04 c0.69332 -0.16 1.34 -0.51332 1.94 -1.06 s1.1467 -1.1667 1.64 -1.86 s0.91332 -1.3733 1.26 -2.04 s0.6 -1.2 0.76 -1.6 c0.26668 -0.61332 0.40668 -1.18 0.42 -1.7 s-0.0066796 -0.78 -0.06 -0.78 l0.06 0 l0.1 0 l0.02 0.02 l-0.26 0.06 c0.05332 -0.05332 0.10664 -0.08664 0.15996 -0.09996 s0.10664 -0.03332 0.15996 -0.06 c-0.02668 -0.02668 -0.02 -0.06 0.02 -0.1 s0.08668 -0.06 0.14 -0.06 c0 -0.05332 0.06668 -0.10664 0.2 -0.15996 l0.24 -0.08 l0.12 -0.08 c0.10668 -0.05332 0.17336 -0.09332 0.20004 -0.12 s0.06 -0.04 0.1 -0.04 s0.11332 0.02 0.22 0.06 s0.29336 0.1 0.56004 0.18 c-0.24 0.64 -0.44668 1.42 -0.62 2.34 s-0.32664 1.8467 -0.45996 2.78 s-0.24664 1.82 -0.33996 2.66 s-0.18 1.5 -0.26 1.98 c0.21332 -0.21332 0.52664 -0.46664 0.93996 -0.75996 s0.82 -0.58664 1.22 -0.87996 c0.48 -0.32 0.98668 -0.65332 1.52 -1 z M146.88899999999998 42.5602 c0.08 -0.61332 0.0666 -0.98656 -0.040076 -1.1199 c-0.05332 -0.08 -0.12 -0.10668 -0.2 -0.08 c-0.72 0.58668 -1.3067 1.08 -1.76 1.48 s-0.76 0.66668 -0.92 0.8 c-1.28 1.2 -2.2333 2.26 -2.86 3.18 s-1.0467 1.7667 -1.26 2.54 c-0.29332 0.85332 -0.46 1.6066 -0.5 2.26 s0.12668 1.2866 0.5 1.9 c0.66668 0.50668 1.3934 0.60668 2.18 0.3 s1.5134 -0.78 2.18 -1.42 c0.77332 -0.88 1.4 -2.1133 1.88 -3.7 s0.74668 -3.6334 0.8 -6.14 z M156.64999999999998 28 c0.50668 0.02668 1.0667 0.09996 1.68 0.21996 s1.2133 0.28 1.8 0.48 s1.1267 0.42668 1.62 0.68 s0.9 0.54 1.22 0.86 c0.32 0.29332 0.50668 0.74 0.56 1.34 s0.01332 1.26 -0.12 1.98 s-0.34 1.46 -0.62 2.22 s-0.59332 1.4467 -0.94 2.06 s-0.72 1.12 -1.12 1.52 s-0.77332 0.6 -1.12 0.6 c-0.58668 0 -1.08 -0.14 -1.48 -0.42 s-0.72 -0.62 -0.96 -1.02 s-0.42 -0.82 -0.54 -1.26 s-0.19332 -0.82 -0.22 -1.14 c-0.08 -1.4133 -0.09332 -2.6666 -0.04 -3.76 s0.14664 -2 0.27996 -2.72 c-0.08 -0.13332 -0.16 -0.25332 -0.24 -0.36 s-0.16 -0.20668 -0.24 -0.3 s-0.17332 -0.18 -0.28 -0.26 c0.10668 -0.05332 0.21336 -0.13332 0.32004 -0.24 c0.21332 -0.16 0.36 -0.32 0.44 -0.48 z M158.08999999999997 37.52 c0.08 0.10668 0.18688 0.22004 0.3202 0.34004 s0.3 0.21332 0.5 0.28 s0.40668 0.07336 0.62 0.020039 s0.44 -0.2 0.68 -0.44 c0.64 -0.66668 1.12 -1.3534 1.44 -2.06 s0.52668 -1.3734 0.62 -2 s0.08 -1.18 -0.04 -1.66 s-0.31332 -0.82668 -0.58 -1.04 c-0.21332 -0.13332 -0.39332 -0.24664 -0.54 -0.33996 s-0.33336 -0.18 -0.56004 -0.26 s-0.51336 -0.16668 -0.86004 -0.26 s-0.8 -0.22 -1.36 -0.38 c-0.26668 0.85332 -0.45336 1.7066 -0.56004 2.56 s-0.15336 1.6333 -0.14004 2.34 s0.06664 1.32 0.15996 1.84 s0.19332 0.87332 0.3 1.06 z M169.811 27.36 c-0.02668 -0.24 0.099804 -0.30016 0.3798 -0.18016 s0.56668 0.24668 0.86 0.38 c0.10668 0.61332 0.18668 1.1 0.24 1.46 s0.09332 0.7 0.12 1.02 s0.05336 0.66668 0.08004 1.04 s0.06668 0.86664 0.12 1.48 c0.24 -0.61332 0.53332 -1.18 0.88 -1.7 s0.79336 -0.96668 1.34 -1.34 s1.2 -0.64664 1.96 -0.81996 s1.6733 -0.23332 2.74 -0.18 c0 0.21332 -0.07332 0.39332 -0.22 0.54 s-0.48668 0.26 -1.02 0.34 c-0.77332 0.13332 -1.4466 0.39332 -2.02 0.78 s-1.0666 0.83336 -1.48 1.34 s-0.74664 1.0467 -0.99996 1.62 s-0.46 1.1 -0.62 1.58 c-0.02668 0.24 -0.06 0.58 -0.1 1.02 s-0.06668 0.90668 -0.08 1.4 s-0.026641 0.97332 -0.039961 1.44 s0.0066796 0.83336 0.06 1.1 c0.02668 0.13332 -0.03332 0.23332 -0.18 0.3 s-0.31336 0.11336 -0.50004 0.14004 s-0.36 0.013359 -0.52 -0.039961 s-0.24 -0.14664 -0.24 -0.27996 c0.05332 -2.7467 -0.02 -5.1132 -0.22 -7.1 s-0.38 -3.7667 -0.54 -5.34 z M185.212 31.72 c0 0.08 0.039922 0.45336 0.11992 1.12 s0.17332 1.48 0.28 2.44 s0.23336 1.9933 0.38004 3.1 s0.28 2.16 0.4 3.16 s0.23332 1.88 0.34 2.64 s0.17336 1.2467 0.20004 1.46 c-0.16 -0.02668 -0.29332 -0.05336 -0.4 -0.08004 s-0.21336 -0.09336 -0.32004 -0.20004 s-0.23336 -0.26 -0.38004 -0.46 s-0.35336 -0.48668 -0.62004 -0.86 c-0.34668 -2.4533 -0.62 -4.5932 -0.82 -6.42 s-0.36668 -3.3134 -0.5 -4.46 c-0.48 0.64 -0.82668 1.0667 -1.04 1.28 s-0.34664 0.32 -0.39996 0.32 c-0.08 0 -0.09332 -0.12 -0.04 -0.36 l0.08 -0.4 l0.08 -0.36 l0.12 -0.28 c0.18668 -0.26668 0.35336 -0.53336 0.50004 -0.80004 s0.26 -0.50668 0.34 -0.72 c0.10668 -0.26668 0.18668 -0.52 0.24 -0.76 c-0.02668 -0.29332 -0.04668 -0.54664 -0.06 -0.75996 s-0.02 -0.43332 -0.02 -0.66 s-0.0066796 -0.46 -0.02 -0.7 s-0.02 -0.54668 -0.02 -0.92 l0 -1.58 l0 -2.36 l0.04 -2.74 l0.1 -2.74 l0.16 -2.36 l0.22 -1.62 c0.18668 -0.77332 0.47336 -1.3666 0.86004 -1.78 s0.79336 -0.65332 1.22 -0.72 s0.84668 0.04 1.26 0.32 s0.72664 0.71332 0.93996 1.3 c0.24 0.58668 0.36 1.3467 0.36 2.28 s-0.08 1.9533 -0.24 3.06 s-0.38 2.26 -0.66 3.46 s-0.58 2.3667 -0.9 3.5 s-0.64 2.1933 -0.96 3.18 s-0.6 1.8134 -0.84 2.48 z M184.8919 29.439999999999998 c0.66668 -1.9467 1.2132 -3.86 1.6399 -5.74 s0.74 -3.5667 0.94 -5.06 s0.26668 -2.7 0.2 -3.62 s-0.26 -1.3933 -0.58 -1.42 c-0.50668 -0.18668 -0.90668 -0.013359 -1.2 0.51996 s-0.52664 1.28 -0.69996 2.24 s-0.28664 2.06 -0.33996 3.3 s-0.07332 2.4733 -0.06 3.7 s0.03332 2.3867 0.06 3.48 s0.04 1.96 0.04 2.6 z M195.733 28.68 c0.08 -0.02668 0.30668 -0.10016 0.68 -0.22016 s0.68 -0.14 0.92 -0.06 c0.77332 -0.02668 1.3666 0.17332 1.78 0.6 s0.44664 1.2534 0.09996 2.48 c-0.50668 1.36 -1.18 2.4933 -2.02 3.4 s-1.8333 1.7734 -2.98 2.6 c0.26668 0.69332 0.66668 1.08 1.2 1.16 s1.0933 -0.0066796 1.68 -0.26 s1.16 -0.59332 1.72 -1.02 s1.0133 -0.8 1.36 -1.12 c0.56 -0.48 1.0067 -0.88668 1.34 -1.22 s0.68664 -0.74 1.06 -1.22 c0.08 -0.05332 0.12668 -0.04664 0.14 0.020039 s0.0066408 0.16668 -0.020039 0.3 s-0.06668 0.32 -0.12 0.56 c-0.08 0.18668 -0.16 0.35336 -0.24 0.50004 s-0.19332 0.30668 -0.34 0.48 s-0.34 0.38 -0.58 0.62 s-0.53332 0.56 -0.88 0.96 c-0.4 0.37332 -0.78668 0.74 -1.16 1.1 s-0.76664 0.67332 -1.18 0.94 s-0.86664 0.45336 -1.36 0.56004 s-1.06 0.10668 -1.7 0 c-0.53332 -0.18668 -0.96 -0.38668 -1.28 -0.6 s-0.56668 -0.43332 -0.74 -0.66 s-0.3 -0.43336 -0.38 -0.62004 s-0.13332 -0.34668 -0.16 -0.48 c-0.13332 -0.53332 -0.18664 -1.2533 -0.15996 -2.16 s0.29336 -2.08 0.80004 -3.52 c0.34668 -0.74668 0.72 -1.38 1.12 -1.9 s0.86668 -0.92668 1.4 -1.22 z M193.973 35.76 c0.34668 -0.18668 0.75312 -0.44672 1.2198 -0.78004 s0.90668 -0.72 1.32 -1.16 s0.77332 -0.92668 1.08 -1.46 s0.47336 -1.0933 0.50004 -1.68 c0.08 -0.4 0.06668 -0.68 -0.04 -0.84 c-0.05332 -0.08 -0.10664 -0.12 -0.15996 -0.12 c-0.45332 -0.21332 -0.90664 -0.14664 -1.36 0.20004 s-0.86664 0.84 -1.24 1.48 s-0.68664 1.3533 -0.93996 2.14 s-0.38 1.5267 -0.38 2.22 z M208.814 42.68 c-0.34668 0.18668 -0.78656 0.053244 -1.3199 -0.40008 c-0.02668 -0.24 0.02 -0.82668 0.14 -1.76 s0.28668 -2.0866 0.5 -3.46 s0.46664 -2.9066 0.75996 -4.6 s0.59332 -3.4133 0.9 -5.16 s0.60668 -3.4667 0.9 -5.16 s0.55332 -3.22 0.78 -4.58 s0.40668 -2.4933 0.54 -3.4 s0.18664 -1.4667 0.15996 -1.68 c0.08 -0.16 0.21332 -0.3 0.4 -0.42 s0.38668 -0.20668 0.6 -0.26 s0.43332 -0.08 0.66 -0.08 s0.40668 0.05332 0.54 0.16 c-0.4 1.52 -0.80668 3.3067 -1.22 5.36 s-0.82 4.18 -1.22 6.38 s-0.78 4.3932 -1.14 6.58 s-0.68 4.1668 -0.96 5.94 s-0.51332 3.2533 -0.7 4.44 s-0.29336 1.8867 -0.32004 2.1 z M222.135 37 c-0.05332 0.05332 -0.11996 0.06004 -0.19996 0.020039 s-0.14668 -0.1 -0.2 -0.18 s-0.10664 -0.17332 -0.15996 -0.28 s-0.08 -0.18668 -0.08 -0.24 c0.21332 -0.18668 0.61332 -0.55336 1.2 -1.1 s1.2 -1.1267 1.84 -1.74 s1.22 -1.18 1.74 -1.7 s0.82 -0.84668 0.9 -0.98 c0.37332 0.18668 0.56664 0.42 0.57996 0.7 s-0.15336 0.55332 -0.50004 0.82 c-0.72 0.69332 -1.5 1.4133 -2.34 2.16 s-1.7667 1.5867 -2.78 2.52 z M227.695 31.36 c0.05332 0.05332 0.04672 0.11996 -0.019961 0.19996 s-0.16 0.16 -0.28 0.24 s-0.24 0.15332 -0.36 0.22 s-0.22 0.1 -0.3 0.1 c-0.42668 -0.64 -0.92 -1.28 -1.48 -1.92 s-1.0933 -1.2267 -1.6 -1.76 c-0.58668 -0.61332 -1.1867 -1.2 -1.8 -1.76 c0.29332 -0.42668 0.60664 -0.66 0.93996 -0.7 s0.62 0.11332 0.86 0.46 c0.66668 0.74668 1.2867 1.4934 1.86 2.24 s1.3 1.64 2.18 2.68 z"></path>
            </g>
        </svg>
    </a>;
}

const Nav = () => {
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector(".nav-main-container").offsetHeight;
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
        }
    };

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    if (window.location.pathname == "/resumebuilder") {
        return (
            <nav id="nav" data-aos="fade-in" className="aos-init aos-animate">
                <div className="nav-main-container">
                    <MyLogo />
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <a href="/"
                               className="link"><i className="fas fa-tools"></i> Go Back</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    } else {
        return (
            <nav id="nav" data-aos="fade-in" className="aos-init aos-animate">
                <div className="nav-main-container">
                    <MyLogo />
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <a href="/"
                               onClick={(e) => scrollToSection(e, "#skills")}
                               className="link"><i className="fas fa-tools"></i> Tech</a>
                        </li>
                        <li className="nav-li">
                            <a href="/"
                                // onClick={() => scrollToRef(contactRef)}
                               onClick={(e) => scrollToSection(e, "#contact")}
                               className="link"><i className="fas fa-envelope"></i> Contact</a>
                        </li>
                        <li className="nav-li">
                            <a href="/resumebuilder"
                                // onClick={() => scrollToRef(contactRef)}
                               className="link"><i className="fas fa-envelope"></i> Resume Builder</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};
export default Nav;
