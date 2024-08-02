프로젝트 소개

프로젝트 명 : 무비리뷰 Movie Review

프론트앤드
- Claude
- React-Bootstrap
- 로고 채찍피티

UI 벤치마킹
- 네이버 시리즈온


영화 API
- https://www.kmdb.or.kr/info/api/apiDetail/6
- https://www.themoviedb.org/
- https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do - 영화진흥원 API

영화 API 확인 사항
- 영화상영여부
- 영화상영 위치? 상영관?(API지도와 연동을 위함)


프로젝트 기능

1. 로그인/회원가입
  - SNS로그인(Oauth) / JWT / 

2. 영화목록 - 최신순
3. 영화순위
   - 영화진흥회 API 사용(영화목록 Call : searchMovieList)
       
4. 영화검색
   - 필터검색
   - Speech API 검색
5. 영화리뷰
   - 별점리뷰 & 텍스트 리뷰
7. 마이페이지-마이리뷰
8. 마이페이지-최근본영화
9. DB API Batch(단순 java)
  - 영화목록(매일)
영화순위 - 실시간 : 요청횟수 확인

데이터베이스
Dev        : H2
Runtime DB : Postgresql
