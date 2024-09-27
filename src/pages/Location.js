import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = 37.504038; // 위도
  const lng = 127.042777; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  const gotoNavermap = () => {
    window.location.href = ''
  }

  const gotoKakaomap = () => {
    window.location.href = ''
  }
  

  return (
    <div className='container bc-pink'>
    <div className='title'>오시는 길</div>
    <div className='location__details'>
      <div>상록아트홀 그랜드볼룸홀</div>
      <div>서울 강남구 언주로 508 상록회관 5층</div>
    </div>
    <div ref={mapRef} className='location__map'></div>
    <div className='location__map-icon-box'>
        <div className='location__map-item' onClick={gotoNavermap}>
          <img src={naverMapIcon} className='location__map-icon' alt="naverMap"/>
          <span>네이버지도</span>
        </div>
        <div className='location__map-item' onClick={gotoKakaomap}>
          <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap'/>
          <span>카카오지도</span>
        </div>
    </div>
   <div className='location__info'>
    <div>선릉역 5번 출구에서 580m</div>
   </div>
</div>
  )
}


export default Location
