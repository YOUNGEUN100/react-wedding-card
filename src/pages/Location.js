import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = parseFloat(process.env.REACT_APP_VENUE_LATITUDE); // 위도
  const lng = parseFloat(process.env.REACT_APP_VENUE_LONGITUDE); // 경도

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
    window.location.href = process.env.REACT_APP_NAVER_MAP_LINK
  }

  const gotoKakaomap = () => {
    window.location.href = process.env.REACT_APP_KAKAO_MAP_LINK
  }


  return (
    <div className='container'>
    <div className='title'>오시는 길</div>
    <div className='location__details'>
      <div>{process.env.REACT_APP_VENUE_NAME}</div>
      <div>{process.env.REACT_APP_VENUE_ADDRESS}</div>
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
    <div>{process.env.REACT_APP_VENUE_TRANSPORT}</div>
   </div>
</div>
  )
}


export default Location
