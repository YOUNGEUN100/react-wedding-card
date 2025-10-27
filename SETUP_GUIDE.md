# 환경변수 설정 가이드

이 프로젝트는 환경변수를 활용하여 개인 정보를 안전하게 관리하고, 누구나 쉽게 자신만의 청첩장을 만들 수 있도록 설계되었습니다.

## 빠른 시작

### 1. Firebase 프로젝트 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트를 생성합니다.
2. 웹 앱을 활성화합니다.
3. 프로젝트 설정에서 Firebase 구성 정보를 복사합니다.
4. `.env` 파일의 Firebase 섹션을 수정합니다:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 2. 결혼식 정보 설정

#### 날짜 및 시간
```env
REACT_APP_WEDDING_DATE=2025-09-07T13:00:00+0900
REACT_APP_WEDDING_DATE_DISPLAY=2025년 9월 7일, 토요일 낮 1시
```

**중요**: `REACT_APP_WEDDING_DATE`는 ISO 8601 형식으로 작성해야 합니다.
- 형식: `YYYY-MM-DDTHH:mm:ss+0900`
- 예: 2025년 9월 7일 오후 1시 → `2025-09-07T13:00:00+0900`

#### 신랑/신부 정보
```env
REACT_APP_GROOM_NAME=김신랑
REACT_APP_GROOM_FATHER_NAME=김아빠
REACT_APP_GROOM_MOTHER_NAME=박엄마
REACT_APP_GROOM_RELATION=차남

REACT_APP_BRIDE_NAME=이신부
REACT_APP_BRIDE_FATHER_NAME=이아빠
REACT_APP_BRIDE_MOTHER_NAME=우엄마
REACT_APP_BRIDE_RELATION=장녀
```

#### 연락처 정보
```env
REACT_APP_GROOM_PHONE=01012345678
REACT_APP_GROOM_FATHER_PHONE=01012345678
REACT_APP_GROOM_MOTHER_PHONE=01012345678

REACT_APP_BRIDE_PHONE=01012345678
REACT_APP_BRIDE_FATHER_PHONE=01012345678
REACT_APP_BRIDE_MOTHER_PHONE=01012345678
```

**주의**: 전화번호는 하이픈(-) 없이 숫자만 입력하세요.

### 3. 예식장 정보 설정

```env
REACT_APP_VENUE_NAME=상록아트홀 그랜드볼룸홀
REACT_APP_VENUE_ADDRESS=서울 강남구 언주로 508 상록회관 5층
REACT_APP_VENUE_LATITUDE=37.504038
REACT_APP_VENUE_LONGITUDE=127.042777
REACT_APP_VENUE_TRANSPORT=선릉역 5번 출구에서 580m
```

#### 위도/경도 찾기
1. [네이버 지도](https://map.naver.com) 또는 [구글 지도](https://maps.google.com)에서 예식장 검색
2. 위치를 마우스 오른쪽 버튼으로 클릭
3. 좌표 정보 복사

### 4. 네이버 지도 API 설정

네이버 지도를 사용하려면 네이버 클라우드 플랫폼에서 API 키를 발급받아야 합니다.

#### 네이버 지도 API 클라이언트 ID 발급 방법
1. [네이버 클라우드 플랫폼](https://www.ncloud.com/)에 로그인
2. Console > Services > AI·NAVER API > Maps 선택
3. Application 등록하기
4. Web Dynamic Map 선택
5. 애플리케이션 이름 입력 및 서비스 URL 등록
6. 발급받은 **Client ID**를 복사

```env
REACT_APP_NAVER_MAP_CLIENT_ID=your_naver_map_client_id
```

### 5. 지도 링크 설정

```env
REACT_APP_NAVER_MAP_LINK=https://map.naver.com/p/search/상록아트홀
REACT_APP_KAKAO_MAP_LINK=https://map.kakao.com/link/search/상록아트홀
```

네이버 지도와 카카오 지도에서 예식장을 검색한 후 URL을 복사하여 붙여넣으세요.

### 6. 계좌 정보 설정

```env
# 신랑측
REACT_APP_GROOM_ACCOUNT_BANK=우리은행
REACT_APP_GROOM_ACCOUNT_NUMBER=1002-123-456789
REACT_APP_GROOM_FATHER_ACCOUNT_BANK=우리은행
REACT_APP_GROOM_FATHER_ACCOUNT_NUMBER=0123456789

# 신부측
REACT_APP_BRIDE_ACCOUNT_BANK=토스뱅크
REACT_APP_BRIDE_ACCOUNT_NUMBER=1000-0123-4567
```

#### 카카오페이 송금 링크 (선택사항)
```env
REACT_APP_GROOM_KAKAOPAY=https://qr.kakaopay.com/your_link
```

카카오페이 송금 QR 코드를 생성한 후 링크를 입력할 수 있습니다.

### 7. 달력 설정

```env
REACT_APP_CALENDAR_DAYS_IN_MONTH=30
REACT_APP_CALENDAR_FIRST_DAY_OF_WEEK=0
REACT_APP_CALENDAR_WEDDING_DAY=7
REACT_APP_CALENDAR_HOLIDAYS=16,17,18
```

- `DAYS_IN_MONTH`: 결혼식이 있는 달의 총 일수 (28, 29, 30, 31)
- `FIRST_DAY_OF_WEEK`: 그 달의 1일이 무슨 요일인지 (0: 일요일, 1: 월요일, ..., 6: 토요일)
- `WEDDING_DAY`: 결혼식 날짜 (해당 월의 몇 일)
- `HOLIDAYS`: 공휴일 (콤마로 구분, 예: 16,17,18)

## 실행 및 배포

## 보안 주의사항

- `.env` 파일은 `.gitignore`에 추가되어 있지 않지만, 보안을 위해 직접 추가한 후 호스팅 플랫폼별 환경변수 설정을 진행하는 것을 권장합니다.

## 문제 해결

## 커스터마이징

### 퀴즈 내용 변경
퀴즈 내용은 `src/pages/Quiz.js` 파일의 `questions` 배열을 수정하세요.

### 초대 문구 변경
초대 문구는 `src/pages/Invitation.js` 파일의 `invitation__content` 섹션을 수정하세요.

### 사진 변경
- 커버 사진: `src/images/photo.png`
- 갤러리 사진: `src/images/` 의 p~ , s~ 썸네일별로 이미지를 추가한 후 ImgGallery.js에 알맞는 이미지 수량을 itemCount 변수에 작성합니다.
- 음악 파일: `src/media/taeyeon_poem.mp3`
