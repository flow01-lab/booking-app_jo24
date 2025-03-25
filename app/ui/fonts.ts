import localFont from "next/font/local";

export const OlympicHeadline = localFont({
    src: [
      {
        path: './fonts/OlympicHeadline-Condensed.woff2',
        style: 'condensed',
      },
      {
        path: './fonts/OlympicHeadline-Regular.woff2',
        weight: '700',
        style: 'regular',
      },
    ]
  });
  
  export const OlympicSans = localFont({
    src: [
      {
        path: './fonts/OlympicSans-Medium.woff2',
        style: 'medium',
      },
      {
        path: './fonts/OlympicSans-Regluar.woff2',
        style: 'regular',
      },
    ]
  });
  
  export const Paris2024 = localFont({
    src: [
      {
        path: './fonts/Paris2024_Normal-Italic.woff2',
        style: 'normal-italic',
      },
      {
        path: './fonts/Paris2024_Normal.woff2',
        style: 'normal',
      },
      {
        path: './fonts/Paris2024_Weight-Italic.woff2',
        style: 'weight-italic',
      },
      {
        path: './fonts/Paris2024_Weight.woff2',
        style: 'weight',
      },
      {
        path: './fonts/Paris2024_X-Weight-Italic.woff2',
        style: 'X-weight-italic',
      },
      {
        path: './fonts/Paris2024_X-Weight.woff2',
        style: 'X-weight',
      },
    ]
  });