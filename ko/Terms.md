# 용어 및 약어

### CEK {#CEK}

[Clova Extensions Kit](#CEK)의 약어

### Clova Chatbot {#ChatbotExtension}

<a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova</a>를 통해 사용자의 간단한 대화 요청이나 문의에 답변하는 [Clova Extension](#ClovaExtension)입니다.

### Clova {#Clova}

NAVER가 개발하고 서비스하는 인공지능 플랫폼입니다. Clova 사용자의 음성이나 이미지를 인식하고 분석해 사용자가 원하는 정보나 서비스를 제공합니다. 서드파티(3rd party) 개발자는 <a href="http://clova.ai" target="_blank">Clova</a>가 가진 기술을 활용해 인공지능 서비스를 제공하는 기기 또는 가전 제품을 만들거나 보유하고 있는 콘텐츠나 서비스를 Clova를 통해 사용자에게 제공할 수 있습니다.

### Clova Developers Console {#ClovaDeveloperConsole}

Clova 플랫폼과 연동하는 클라이언트 기기나 [Clova Extension](#ClovaExtension)을 개발할 때 필요한 정보나 기능을 제공하는 웹 도구입니다.

<a href="https://developers.naver.com/console/clova/" target="_blank">Clova Developers Console</a>은 개발자에게 다음과 같은 내용을 제공합니다.

* 클라이언트 기기 등록 및 클라이언트 인증 정보 제공(추후 제공 예정)
* [Clova Extension](#ClovaExtension) 등록 및 배포
* [대화 모델](#DialogueModel) 등록
* Clova 서비스 관련 통계 자료 제공(추후 제공 예정)

### Clova Extension {#ClovaExtension}

음악, 쇼핑, 금융 등과 같은 서드파티 서비스나 집안의 IoT 기기 제어 등 사용자가 Clova를 통해 다양한 경험을 제공받을 수 있도록 Clova에 확장된 기능을 제공하는 웹 애플리케이션입니다. 일반적으로 [Extension](#Extension)이라 부릅니다. Clova Extension으로 제공하는 기능은 Clova 앱에서 '확장 서비스'로 표현됩니다.

Clova 플랫폼은 현재 다음과 같은 세 종류의 Clova Extension을 지원합니다.

* [Custom Extension](#CustomExtension)
* [Clova Home Extension](#ClovaHomeExtension)
* [Clova Chatbot](#ChatbotExtension)

### Clova Extensions Kit(CEK) {#CEK}

[Clova Extension](#ClovaExtension)을 개발 및 배포할 때 필요한 도구와 인터페이스를 제공하는 플랫폼입니다. Clova와 Extension 사이의 커뮤니케이션을 지원합니다. Clova Extensions Kit에 관한 더 자세한 내용은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova 플랫폼 가이드 문서</a>에서 "<a href="https://developers.naver.com/docs/clova/guide/CEK/CEK_Overview.md" target="_blank"> Clova Extensions Kit</a>"을 참고합니다.

### Clova Home Extension {#ClovaHomeExtension}

IoT 기기 제어 서비스를 제공하기 위한 [Clova Extension](#ClovaExtension)입니다.

### Clova 앱 {#ClovaApp}

NAVER가 개발해 iOS나 Android 플랫폼으로 배포한 Clova 앱입니다. Clova에 명령을 내릴 수 있을 뿐만 아니라 클라이언트 기기를 등록하고 관리할 수 있습니다.

### Custom Extension {#CustomExtension}

임의의 확장된 기능을 제공하는 [Clova Extension](#ClovaExtension)입니다. Custom Extension을 사용하면 음악, 쇼핑, 금융과 같은 외부 서비스의 기능을 제공할 수 있습니다.

### Extension {#Extension}

[Clova Extension](#ClovaExtension)의 다른 표현입니다.

### 대화 모델 {#DialogueModel}

[Clova Chatbot](#ChatbotExtension)이 사용자의 음성에서 인식된 요청을 Clova에 전달하기 위해 정형화된 형식(JSON)으로 변환하는 규칙의 명세입니다. 대화 모델에 관한 더 자세한 내용은 '<a href="/Design/Design_Guideline_For_Chatbot_Extension.md#DefineDialogueModel" target="_blank">대화 모델 정의</a>'를 참고합니다.
