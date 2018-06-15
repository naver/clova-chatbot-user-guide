# 네이버톡톡과 LINE 연동

네이버톡톡과 LINE을 연동하면 Clova Chatbot으로 사용자와 대화할 때 Clova 서비스를 사용하지 않고 네이버톡톡과 LINE으로 대화할 수 있습니다.

## 네이버톡톡 연동 {#HowToConnectToktok}

네이버톡톡과 연동하는 방법은 다음과 같습니다.

<div class="note"><p><strong>Note!</strong></p>
<p>네이버톡톡 연동을 설정한 다음에는 <a href="/DevConsole/Guides/CEK/Test_Chatbot_Extension.md#BuildInteractionModel">학습 과정</a>을 거치고 <a href="/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md">Clova Chatbot 심사와 배포</a>를 완료해야 네이버톡톡으로 Clova Chatbot과 대화할 수 있습니다.</p></div>

### 네이버톡톡 계정 생성 {#CreateToktokID}

네이버톡톡과 Clova Chatbot을 연동하려면 네이버톡톡 계정이 있어야 합니다. 네이버톡톡 계정을 생성하는 방법은 다음과 같습니다.

1. <a href="https://partner.talk.naver.com/" target="_blank">네이버톡톡 파트너센터</a>에 네이버 아이디로 로그인합니다.
2. 네이버톡톡 파트너센터에서 **시작하기**를 클릭합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-1-101.png" />
3. 약관 동의와 휴대폰 인증을 완료한 다음 **톡톡 계정 만들기**를 클릭합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-1-102.png" />
4. **톡톡 계정 만들기**에서 연결할 서비스를 선택하고 필요한 정보를 입력합니다. 지금 연결할 서비스가 없으면 나중에 다시 선택할 수 있습니다. 프로필명을 입력할 때 `[테스트]`를 프로필명 앞에 넣으면 톡톡 가맹점 찾기에서 제외되는 테스트 계정을 생성할 수 있습니다.
<img src="/DevConsole/Resources/Images/chatbot-2-1-103.png" />
5. 계정을 생성한 다음 검수가 완료되면 네이버톡톡 계정을 사용할 수 있습니다.

### 네이버톡톡 파트너센터 설정 {#ToktokPartnerCenter}

네이버톡톡 계정 검수가 끝나면 네이버톡톡 파트너센터에서 다음과 같이 webhook 사용 환경을 설정하고 Access Token 값을 확인합니다.

1. <a href="https://partner.talk.naver.com/" target="_blank">네이버톡톡 파트너센터</a>에 로그인합니다.
2. 네이버톡톡 파트너센터에서 **내 계정관리**를 클릭합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-1-106.png" />
3. **계정관리 홈**에서 **챗봇 API > API 설정**을 클릭합니다.
4. 약관 동의 후 설정 페이지가 나타나면 **보내기 API Authorization 생성**을 클릭합니다.
5. **Webhook** 메뉴에 `https://kaa.clova.ai/chatbot/webhook/talktalk?code=Extenstion ID`와 같은 형태의 경로를 입력한 다음 **등록**을 클릭합니다. 'Extension ID'는 [Clova Chatbot 기본 정보](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md#InputExtensionInfo)를 설정할 때 입력한 값입니다. <a href="https://developers.naver.com/console/clova/cek/#/list" target="_blank">CEK 메뉴</a>의 **Extension 정보** 페이지에서 확인할 수 있습니다.
6. **이벤트 선택 > 이벤트 변경** 메뉴를 클릭한 다음 **send**로 설정됐는지 확인합니다.
7. **보내기 API** 메뉴 있는 Access Token 값을 복사해 기록합니다.

### Clova Chatbot 연동 {#ConnectionToktok}

[네이버톡톡 파트너센터의 설정](#ToktokPartnerCenter)과 Access Token 값 확인이 끝나면 다음과 같이 네이버톡톡 계정을 Clova Chatbot과 연동합니다.

1. Clova Chatbot 창의 메뉴에서 **설정**을 클릭합니다.
2. **설정** 화면에서 **채널** 탭을 클릭합니다.
3. **채널 연동**에서 네이버톡톡에 있는 **설정**을 클릭합니다.
<img src="/DevConsole/Resources/Images/ConnectToktok.png" />
4. <a href="https://partner.talk.naver.com/" target="_blank">네이버톡톡 파트너센터</a>에서 확인한 Access Token 값을 **설정** 대화 상자의 **Access Token**에 입력합니다.
5. **저장**을 클릭해 설정 내용을 적용합니다.
6. 네이버톡톡의 ON/OFF 상태를 **ON**으로 설정하고 **저장**을 클릭해 설정 내용을 적용합니다.
7. Clova Chatbot 창의 메뉴에서 **학습**을 클릭해 [챗봇 대화 학습](/DevConsole/Guides/CEK/Test_Chatbot_Extension.md#BuildInteractionModel)을 시작합니다.
8. 챗봇 대화 학습이 끝나면 [Clova Chatbot 심사와 배포](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md)를 완료합니다.

## LINE 연동 {#HowToConnectLINE}

LINE과 연동하는 방법은 다음과 같습니다.

<div class="note"><p><strong>Note!</strong></p>
<p>LINE 연동을 설정한 다음에는 <a href="/DevConsole/Guides/CEK/Test_Chatbot_Extension.md#BuildInteractionModel">학습 과정</a>을 거치고 <a href="/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md">Clova Chatbot 심사와 배포</a>를 완료해야 LINE으로 Clova Chatbot과 대화할 수 있습니다.</p></div>

### LINE 계정 생성 {#CreateLINEID}

LINE과 Clova Chatbot을 연동하려면 LINE 계정이 있어야 합니다. LINE 계정을 생성하는 방법은 다음과 같습니다.

1. <a href="https://entry-at.line.me/" target="_blank">LINE Business Center</a>에 접속해 계정을 생성합니다.  
<img src="/DevConsole/Resources/Images/chatbot-2-2-101.png" />
2. 계정 정보를 입력해 계정 생성을 신청합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-102.png" />
3. 계정 생성이 완료되면 **LINE@ Manager에 로그인**을 클릭해 LINE@ Manager로 이동합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-104.png" />

### LINE Business Center 설정 {#LINEBusinessCenter}

LINE 계정 생성이 끝나면 LINE Business Center에서 다음과 같이 webhook 사용 환경을 설정하고 Channel ID 값과 Channel secret 값, Channel access token 값을 확인합니다.

1. <a href="https://at.line.me/ko/" target="_blank">LINE Business Center</a>에 접속해 **관리화면**을 클릭합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-201.png" />
2. LINE@ Manager에서 **계정 설정 > Messaging API 설정**을 클릭한 다음 **API 켜기**를 클릭해 API를 실행합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-203.png" />
3. **LINE Developers**를 클릭합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-204.png" />
4. LINE Developers의 메뉴에서 **Channel settings**를 클릭합니다.
5. **Channel settings** 화면의 **Basic information**에서 **Channel ID**의 값과 **Channel secret**의 값을 확인하고 복사해 기록합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-205.png" />
6. **Messaging settings**의 **Channel access token**에서 **Issue**를 클릭해 새로운 Channel access token을 생성한 다음 값을 확인하고 복사해 기록합니다.
<img src="/DevConsole/Resources/Images/chatbot-2-2-206.png" />
7. **Messaging settings**의 **Use webhooks**에서 **Enabled**를 선택하고 **Update**를 클릭합니다.
8. **Webhook URL**의 **https://**<!-- -->에 `kaa.clova.ai/chatbot/webhook/line?code=Extenstion ID`와 같은 형태의 경로를 입력한 다음 **Update**를 클릭하고 **Verify**를 클릭합니다. 'Extension ID'는 [Clova Chatbot 기본 정보](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md#InputExtensionInfo)를 설정할 때 입력한 값입니다. <a href="https://developers.naver.com/console/clova/cek/#/list" target="_blank">CEK 메뉴</a>의 **Extension 정보** 페이지에서 확인할 수 있습니다.

### Clova Chatbot 연동 {#ConnectionLINE}

[LINE Business Center의 설정](#LINEBusinessCenter)과 Channel ID 값, Channel secret 값, Channel access token 값의 확인이 끝나면 다음과 같이 LINE 계정을 Clova Chatbot과 연동합니다.

1. Clova Chatbot 창의 메뉴에서 **설정**을 클릭합니다.
2. **설정** 화면에서 **채널** 탭을 클릭합니다.
3. **채널 연동**에서 LINE에 있는 **설정**을 클릭합니다.
<img src="/DevConsole/Resources/Images/ConnectLINE.png" />
4. <a href="https://at.line.me/ko/" target="_blank">LINE Business Center</a>에서 확인한 Channel ID 값과 Channel secret 값, Channel access token 값을 **설정** 대화 상자의 **채널ID**와 **채널 Secret**, **Access Token**에 입력합니다.
5. **저장**을 클릭해 설정 내용을 적용합니다.
6. LINE의 ON/OFF 상태를 **ON**으로 설정하고 **저장**을 클릭해 설정 내용을 적용합니다.
7. Clova Chatbot 창의 메뉴에서 **학습**을 클릭해 [챗봇 대화 학습](/DevConsole/Guides/CEK/Test_Chatbot_Extension.md#BuildInteractionModel)을 시작합니다.
8. 챗봇 대화 학습이 끝나면 [Clova Chatbot 심사와 배포](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md)를 완료합니다.
