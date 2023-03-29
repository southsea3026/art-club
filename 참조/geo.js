function geoLoc() {
    function geoConfirmed(location) {
        const coord_lat = location.coord.latitude;
        const coord_lng = location.coord.longitude;
        
        
    }

    function geoDenied() {
        alert('사용자의 현재 위치를 알 수 없습니다.')
    }

    navigator.geolocation.getCurrentPosition(geoConfirmed, geoDenied);
}
