1. 테스트를 위해선 Subscribe 가능한 Redis 서버가 준비되어 있어야 한다.

2. subscriber.js 를 동작하기 위해선 실행 폴더에 'npm install redis' 명령으로 모듈을 설치해야 한다.

3. redis-cli 툴을 이용해서 간단하게 publish 명령을 이용해 테스트 한다.

	####./redis-cli -a password publish "test-channel" "test message"
