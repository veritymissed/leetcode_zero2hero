# CV

- Verity Tsai 蔡獻葵
- veritymissed@gmail.com
- NTUIM -2016

# ucfunnel 悠福科技 (2017/9 - 2019/5)

以 _RTB2.0_ 協定為基礎的 _Ad exchange_ 公司。

- Publisher/DSP 儀表板UI介面重新設計，實作RWD(LESS+CSS)
- Publisher/DSP的投放成效報表系統
- 使用者管理伺服器開發維護
- CI/CD 流程維護優化
- MongoDB cluster 維護
- 自動化流程

## Publisher/DSP 報表系統開發與維護

- 查詢條件介面設計
- 前端查詢條件(Time range/interval & other groups) 設計、呼叫API server
- RESTful API design & development - with RTB data structure
- 相關框架與套件：Express/Angular 1/Mongoose/Redis

## 報表API開發維護

- 使用jwt驗證
- API server RESTful design

## 自動化流程

- 使用Crontab + ShellScript，每日/週/月報表的自動化流程維護與優化
- NodeJS library - 使用 cluster 多程序產生報表並由Sendgrid寄出
- 串接Slack API

## 使用者管理伺服器開發維護

- Oauth驗證設計
- 可以用同一個帳戶登入公司多個dashboard，根據使用者身分導向各自的dashboard。
- 部署在多台VM與設定反向代理 - 使用HAProxy。
- 存取session的redis server設定與實作。

## CI/CD 流程維護優化

- Jenkins 設定 CD server(節點)、專案
- 設定測試流程，使用Shell script，將CI(使用Gerrit)的Code部署到Jenkin節點上。
- Partner/DSP dashboard測試部分使用Docker容器建置。
- 實作Shell script 在CD server上用docker-compose 自動執行建置容器以及單元測試。

# Wavenet 潮網科技 (2019/5 - )

廣告代理與行銷公司。內有研發部，提供其他部門相關工具。

- 主要使用React/Redux為前端框架，後端採用Egg.js
- 報表系統開發維護：公司產品為協助行銷專員投放Google/Facebook廣告
- 使用 Google Adwords/Ads API & Facebook marketing API
- 產品皆使用Docker-compose部署、Traefik建置reverse-proxy

# 內部報表系統開發維護

- 為媒體部投放專員使用
- Facebook Graph API 4.0
- Google Adwords API
- 報表資料計算核心重構
- 相關框架與套件：React/Redux/Rx.js/Material UI/Egg.js/Egg原生MQ

# 廣告預算調整系統開發維護

- Facebook Graph API 4.0
- Google Adwords API
- UI優化，改善各個廣告層級，使用者設定查詢條件時減少重複選擇。
- 相關框架與套件：Angular.js 1/Material UI/Express.js
