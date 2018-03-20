# 용어 및 약어

<div class="note">
  <p><strong>Note!</strong></p>
  <p>이 페이지는 계속 업데이트되고 있습니다.</p>
</div>

### CEK
[Clova Extensions Kit](#CEK)의 약어

### Chatbot extension
Chatbot extension은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova</a>를 통해 사용자의 간단한 대화 요청이나 문의에 대해 답변하는 extension입니다.

### Clova {#Clova}
[Clova](http://clova.ai)는 {{ book.TargetServiceForClientAuth }}가 개발 및 서비스하고 있는 인공지능 플랫폼입니다. Clova 사용자의 음성이나 이미지를 인식하고 이를 분석하여 사용자가 원하는 정보나 서비스를 제공합니다. 3rd party 개발자는 Clova가 가진 기술을 활용하여 인공 지능 서비스를 제공하는 기기 또는 가전 제품을 만들거나 보유하고 있는 콘텐츠나 서비스를 Clova를 통해 사용자에게 제공할 수 있습니다.

### Clova Developer Console {#ClovaDeveloperConsole}
Clova 플랫폼과 연동하는 클라이언트 기기나 [Clova extension](#ClovaExtension)을 개발하는 개발자에게 다음과 같은 내용을 제공하는 <a target="_blank" href="https://developers.naver.com/console/clova/">웹 도구</a>입니다.
* 클라이언트 기기 등록 및 클라이언트 인증 정보 제공 (추후 제공 예정)
* Clova extension [등록](/DevConsole/Guides/CEK/Register_Extension.md) 및 [배포](/DevConsole/Guides/CEK/Deploy_Extension.md)
* [Interaction 모델 등록](/DevConsole/Guides/CEK/Register_Interaction_Model.md)
* Clova 서비스 관련 통계 자료 제공 (추후 제공 예정)

### Clova extension {#ClovaExtension}
음악, 쇼핑, 금융 등과 같은 외부 서비스(3rd party service)나 집안의 IoT 기기 제어 등 사용자가 Clova를 통해 다양한 경험을 제공받을 수 있도록 Clova에게 확장된 기능을 제공하는 웹 애플리케이션입니다. 일반적으로 extension이라 부르며, Clova 플랫폼은 현재 다음과 같은 세 종류의 Clova extension을 지원 및 제공하고 있습니다. 일반 사용자에게는 "확장 서비스"라는 표현으로 제공됩니다.
* [Custom extension](#CustomExtension)
* [Clova Home extension](#ClovaHomeExtension)
* [Chatbot extension](#ChatbotExtension)

### Clova Extensions Kit (CEK) {#CEK}
Clova extension을 개발 및 배포할 때 필요한 도구와 인터페이스를 제공하는 플랫폼으로 [Clova와 extension 사이의 커뮤니케이션](/CEK/CEK_Overview.md)을 지원합니다.

### Clova Home extension {#ClovaHomeExtension}
IoT 기기 제어 서비스를 제공하기 위한 extension입니다.

### Clova 앱 {#ClovaApp}

{{ book.OrientedService }}가 개발하여 iOS나 Android 플랫폼으로 배포한 Clova 앱입니다. Clova에 명령을 내릴 수 있을 뿐만 아니라 클라이언트 기기를 등록하고 관리할 수 있는 앱입니다.

### Custom extension {#CustomExtension}
임의의 확장된 기능을 제공하는 [extension](#ClovaExtension)입니다. Custom extension을 사용하면 음악, 쇼핑, 금융과 같은 외부 서비스의 기능을 제공할 수 있습니다.

### Extension {#Extension}
[Clova extension](#ClovaExtension)의 다른 표현

### Interaction 모델 {#InteractionModel}
Chatbot extension이 음성으로부터 인식된 사용자의 요청을 extension에 전달하기 위해 정형화된 포맷(JSON)으로 바꿔주는 규칙을 명세한 것입니다. 자세한 내용은 [Interaction 모델](/Design/Design_Guideline_For_Extension.md#DefineInteractionModel) 문서를 참조합니다.
