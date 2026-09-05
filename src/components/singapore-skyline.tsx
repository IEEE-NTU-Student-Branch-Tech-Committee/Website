// Original architectural collage: NTU's Hive and ADM, and Singapore's Marina Bay.
// Native SVG keeps the linework sharp and themeable. This is not a geographic map.
const hivePods = [
  { x: 42, y: 237, width: 103, floors: 7 },
  { x: 238, y: 202, width: 104, floors: 8 },
  { x: 134, y: 171, width: 114, floors: 9 },
  { x: 321, y: 257, width: 103, floors: 7 },
  { x: 225, y: 265, width: 115, floors: 7 },
  { x: 120, y: 293, width: 116, floors: 6 },
];

function HivePod({ x, y, width, floors }: (typeof hivePods)[number]) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: floors }, (_, i) => {
        const inset = i * 1.55;
        const w = width - inset * 2;
        return (
          <g key={i} transform={`translate(${inset} ${i * 32})`}>
            <path
              d={`M0 0 Q${w / 2} -20 ${w} 0 L${w - 1.5} 26 Q${w / 2} 48 1.5 26 Z`}
              className="skyline-building"
            />
            <path d={`M1 6 Q${w / 2} 26 ${w - 1} 6 M2 22 Q${w / 2} 43 ${w - 2} 22`} />
            {[0.2, 0.4, 0.6, 0.8].map((p) => (
              <path
                key={p}
                className="skyline-detail"
                d={`M${w * p} ${7 + 13 * Math.sin(p * Math.PI)}v15`}
              />
            ))}
          </g>
        );
      })}
      <ellipse cx={width / 2} cy={0} rx={width / 2} ry={11} className="skyline-roof" />
      <ellipse cx={width / 2} cy={0} rx={width / 2 - 12} ry={5} className="skyline-detail" />
    </g>
  );
}

export function SingaporeSkyline() {
  return (
    <svg
      className="singapore-skyline"
      viewBox="0 0 1600 650"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="tower-windows" width="12" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 0H12M0 0V16" className="skyline-detail" />
        </pattern>
      </defs>
      <g className="skyline-distant" strokeWidth="1">
        <path d="M437 536V409h36v-39h25v39h31v127M540 538V383h25v-26h45v26h25v155M654 539V426h55v113M718 540V349h17v-28h28v28h25v191M799 542V398h28v-34h43v178M887 544V425h58v119M954 545V375h21v-42h29v42h22v170" />
        <path d="M550 395h73M550 412h73M550 429h73M550 446h73M729 365h47M729 384h47M729 403h47M729 422h47M897 443h37M897 459h37M897 475h37M966 390h48M966 410h48M966 430h48M966 450h48" />
        <path d="M578 357V320M748 321V285M989 333V304" />
      </g>

      <g className="skyline-architecture" strokeWidth="1.35" strokeLinejoin="round">
        {/* The Hive: rounded, terraced learning towers. */}
        <g className="skyline-hive">
          {hivePods.map((pod) => (
            <HivePod key={pod.x} {...pod} />
          ))}
          <path d="M55 510Q231 549 413 505M56 519Q235 559 413 514" />
        </g>

        {/* ADM: the continuous planted curves of NTU's art school. */}
        <g className="skyline-adm">
          <path
            d="M0 575Q115 564 238 507Q351 453 456 432Q493 424 520 432Q467 451 438 474Q355 543 265 564Q112 602 0 606Z"
            className="skyline-roof"
          />
          <path
            d="M0 582Q120 570 244 515Q359 460 461 439M23 588Q148 569 256 522Q365 472 451 447"
            className="skyline-detail"
          />
          <path d="M265 564Q355 543 438 474V530Q352 597 265 618Z" className="skyline-building" />
          <path
            d="M265 582Q351 560 438 494M265 602Q351 580 438 514M285 560v51M308 553v51M332 544v51M356 533v52M380 520v52M404 505v52M428 484v53"
            className="skyline-detail"
          />
          <path
            d="M470 559Q549 554 628 523Q686 500 739 504Q664 512 610 557Q558 591 470 596Z"
            className="skyline-roof"
          />
          <path d="M470 568Q553 565 625 535Q676 515 710 512" className="skyline-detail" />
          <path d="M470 596Q558 591 610 557V598Q555 629 470 634Z" className="skyline-building" />
          <path
            d="M488 594v37M510 591v35M532 586v35M554 579v35M576 569v35M598 558v37M470 614Q555 609 610 578"
            className="skyline-detail"
          />
        </g>

        {/* Marina Bay Sands: three towers and one sweeping sky park. */}
        <g className="skyline-marina">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${1068 + i * 103} 0)`}>
              <path d="M5 308H62L79 563H-15Q13 430 5 308Z" className="skyline-building" />
              <path d="M5 308H62L79 563H-15Q13 430 5 308Z" fill="url(#tower-windows)" />
              <path d="M45 308L53 563M53 308L64 563M5 308Q30 451 9 563" />
              <path d="M-15 563H79V570H-15Z" className="skyline-roof" />
            </g>
          ))}
          <path
            d="M1035 299Q1165 269 1362 286Q1374 285 1382 282Q1370 307 1348 311L1061 320Z"
            className="skyline-building"
          />
          <path d="M1035 299Q1185 292 1382 282M1052 306Q1174 301 1366 294M1061 320L1063 311Q1219 306 1359 299" />
          <path
            d="M1090 288v-8m-3 3h6M1110 285v-7m-3 3h6M1290 284v-8m-3 3h6M1312 285v-8m-3 3h6"
            className="skyline-detail"
          />
        </g>

        {/* ArtScience Museum: petal-like forms on the waterfront. */}
        <g className="skyline-museum">
          <path
            d="M963 550Q925 535 911 497Q939 495 961 513Q941 478 952 458Q981 474 989 511Q995 472 1021 458Q1036 486 1011 522Q1041 500 1060 508Q1050 540 1011 554L1001 573H975Z"
            className="skyline-building"
          />
          <path d="M961 513Q976 537 981 560M989 511L990 560M1011 522Q1000 543 998 560M969 566h41" />
        </g>

        {/* Singapore Flyer, simplified to structural lines. */}
        <g className="skyline-flyer">
          <circle cx="1493" cy="347" r="88" />
          <circle cx="1493" cy="347" r="82" className="skyline-detail" />
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i} transform={`rotate(${i * 18} 1493 347)`}>
              <path d="M1493 347V265" className="skyline-detail" />
              <rect x="1489" y="253" width="8" height="12" rx="3" className="skyline-building" />
            </g>
          ))}
          <path d="M1493 347L1437 555H1448L1493 369L1538 555H1549Z" className="skyline-building" />
          <circle cx="1493" cy="347" r="5" className="skyline-roof" />
          <path d="M1427 562h132" />
        </g>

        <g className="skyline-grove">
          {[
            { x: 730, y: 539, s: 0.7 },
            { x: 820, y: 529, s: 1 },
            { x: 895, y: 551, s: 0.62 },
          ].map(({ x, y, s }) => (
            <g key={x} transform={`translate(${x} ${y}) scale(${s})`}>
              <path
                d="M-5 34L-9-33Q-39-44-49-74Q0-90 49-74Q39-44 9-33L5 34Z"
                className="skyline-building"
              />
              <ellipse cy="-74" rx="49" ry="10" />
              <path
                d="M0 34V-78M-7-33L-30-74M7-33L30-74M-8-33L-16-80M8-33L16-80"
                className="skyline-detail"
              />
            </g>
          ))}
        </g>
        <g className="skyline-water">
          <path d="M0 633Q330 656 693 590Q1050 540 1600 586M0 645Q341 668 696 602Q1065 555 1600 600M644 626Q1064 577 1600 619M802 639Q1124 607 1530 637" />
          <path
            d="M1029 584h85m54 6h57m49-10h64m48 19h57m-242 15h99m87-6h71"
            className="skyline-detail"
          />
        </g>
      </g>
    </svg>
  );
}
