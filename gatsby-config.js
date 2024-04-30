/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `eonseok blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // 여러 추적 ID를 추가할 수 있으며 모든 ID에 대해 페이지뷰 이벤트가 발생합니다.
        trackingIds: [
          'G-JJ4H4PB7G5', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // 마케팅 플랫폼 광고 제품 (디스플레이 및 비디오 360, 검색 광고 360 및 캠페인 매니저)
        ],
        // 이 객체는 gtag config 명령에 직접 전달됩니다.
        // 이 구성은 모든 추적 ID에 대해 공유됩니다.
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // 이 객체는 이 플러그인에 특정 구성을 위해 사용됩니다.
        pluginConfig: {
          // 추적 스크립트를 본문이 아닌 head에 넣습니다.
          head: true,
          // 이 매개변수를 설정하는 것도 선택 사항입니다.
          // respectDNT: true,
          // 사용자 정의 경로에서 페이지뷰 히트를 보내지 않습니다.
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
          // 기본값: https://www.googletagmanager.com
          // origin: 'YOUR_SELF_HOSTED_ORIGIN',
          // 라우트 업데이트에서 페이지뷰 이벤트 처리를 지연시킵니다 (밀리초 단위).
          delayOnRouteUpdate: '1000ms',
        },
      },
    },
  ],
};
