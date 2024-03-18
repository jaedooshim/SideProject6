# 1Day-1Project

## BackEnd - 심재두

### 프로젝트 소개
- 1D-1Project : 소셜 로그인
  - kakao
  - naver
  - google
- platform 이라는 enum타입 안에 KAKAO,NAVER,GOOGLE 로 두어서 해당 url로 가입시 platform을 통해 구분 가능
- 요청 url에 clientId,callbackURL을 넣어서 토큰 값을 반환받도록 함
  - kakao ex) https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=http://localhost:3000/auth/kakao
  - naver ex) https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=YOUR_NAVER_CLIENT_ID&redirect_uri=http://localhost:3000/auth/naver
  - google ex) https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://localhost:3000/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile


## Rest API
| Content | Method | Path         |
|---------|--------|--------------|
| 카카오 로그인 | `GET`  | /auth/kakao  |
| 네이버 로그인 | `GET`  | /auth/naver  |
| 구글 로그인  | `GET`  | /auth/google |

### 사용기술

- TypeScript
- NestJs
- Prisma
- PostgreSQL
- Docker

### Server Use

```bash
npm run start:dev
```

### Install
```angular2html
npm i | npm install
```

### Docker PostgreServer Port
```angular2html
5432:5432
```