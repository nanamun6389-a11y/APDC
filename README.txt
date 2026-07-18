APDC MINI CLEAN REBUILD
=======================
1. GitHub APDC 저장소의 기존 파일을 모두 삭제합니다.
2. 이 ZIP 안의 모든 파일을 저장소 ROOT에 그대로 업로드합니다.
3. GitHub Pages 반영을 기다린 뒤 /APDC/ 접속.
4. Admin password: 0070

구조:
- index.html: Entry Search
- admin.html: Admin Login/Menu
- dashboard.html: GROUP 진행
- judge.html: EVENT별 3명 심사 저장
- results.html: 같은 저장값을 읽어 EVENT별 결과 확정
- mc.html: MC 화면
- live.html: 현장 LIVE
- broadcast.html: 대형 화면
- settings.html: EVENT/ALL 심사 초기화
- data.js: EVENT/GROUP/심사위원 데이터
- app.js: 공통 저장/상태 로직
- style.css: 공통 디자인

주의:
이 버전은 외부 JSON/shared.js 없이 ZIP 내부 파일만으로 동작합니다.
