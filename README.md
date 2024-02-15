# 8World
<img style="width: 100%;" src="https://www.8world.co.kr/image/meta/8world.jpg" alt="8world.co.kr" />
<br />


- [www.8world.co.kr](https://www.8world.co.kr)
- [활용API](https://github.com/mlg404/palworld-paldex-api)
- [참고 사이트](https://paldex.io/)

## 팀원소개
|윤영식|이명훈|
|:---:|:---:|
|<img width="150px" src="https://avatars.githubusercontent.com/u/144635640?v=4" />|<img width="150px" src="https://avatars.githubusercontent.com/u/144664895?v=4">|

## 설치
```
npm install papaparse
npm install @mui/material @emotion/react @emotion/styled
npm install @vercel/analytics
npm install csv-parser
npm install papaparse
npm install datatables.net-dt
npm install path
npm install sass
npm install @next/third-parties
npm install --save react-zoom-pan-pinch
```

## 기능소개
- 홈<br/>
Palworld 게임의 캐릭터 정보를 검색하고 표시하는 Next.js 컴포넌트입니다. 주요 기능은 다음과 같습니다<br/>
1. 데이터 로딩 및 초기 설정: Palworld 게임 데이터를 JSON 파일에서 로드하여 상태에 저장합니다.
2. 팰 필터링 및 검색 로직: 사용자가 입력한 검색어에 따라 팰을 필터링하고 검색 결과를 표시합니다.
3. 이미지 경로 설정 함수: 속성 및 작업 적성에 따라 이미지 경로를 설정하는 함수를 정의합니다.
4. 스킬 및 적성 클릭 처리: 사용자가 스킬 또는 작업 적성을 클릭하면 해당 항목의 활성화 상태를 변경합니다.
5. 팰 정보 렌더링: 선택된 팰에 대한 상세 정보를 표시합니다. 이 정보에는 능력치, 스킬, 작업 적성, 드롭하는 아이템 등이 포함됩니다.

- 교배<br/>
Palworld 게임에서 팰을 번식하는 웹 페이지를 구현한 Next.js 컴포넌트입니다. 주요 기능은 다음과 같습니다<br/>
1. 초기에 /api/roadData 엔드포인트에서 데이터를 가져와 화면에 렌더링합니다.
2. 사용자가 두 개의 팰을 선택하면, 선택된 팰들의 번식 결과를 계산하여 테이블에 표시합니다.
3. 번식 결과에는 각 팰과 결과의 세부 정보 및 이미지가 포함되어 있습니다.
4. 드롭다운 메뉴를 사용하여 팰을 선택하고, 번식 결과가 자동으로 업데이트됩니다.

## 트러블 슈팅
1. Next.js에서 robot.txt
2. SEO
3. Naver 서치어드바이저 Next.js에서 Html파일로 인증
