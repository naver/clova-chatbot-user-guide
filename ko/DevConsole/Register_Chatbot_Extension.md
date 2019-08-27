# Chatbot 등록

새로운 chatbot은 <a href="https://www.ncloud.com/product/aiService/chatbot">NAVER CLOUD PLATFORM의 chatbot 서비스</a>를 이용해서 추가해야 합니다. NAVER CLOUD PLATFORM에서 chatbot을 생성하고 <a href="http://docs.ncloud.com/ko/chatbot/chatbot-2-10.html" target="_blank">Clova 플랫폼과 연동</a>해야 합니다. Chatbot 생성이 완료되면 아래 화면에서 **배포 정보 입력하기** 버튼을 누릅니다.

![](/DevConsole/Resources/Images/Connect_With_Clova_Platform.png)

위 화면에서 **배포 정보 입력하기** 버튼을 눌렀다면 Clova developer console을 통해 NAVER CLOUD PLATFORM에서 만든 chatbot을 연결하고 등록할 수 있습니다. Chatbot을 등록할 때 일반적으로 다음 항목을 순차적으로 수행해야 합니다.

1. [이용 약관 및 개인정보 수집 동의](#AgreeTermsOfUse)
2. [Chatbot 기본 정보 입력](#InputChatbotInfo)

## 이용 약관 및 개인정보 수집 동의 {#AgreeTermsOfUse}

Chatbot을 등록하기 전에 우선 CEK API 서비스 이용 약관과 개인정보 수집에 동의해야 합니다. 이용 약관 및 개인정보 수집 동의는 chatbot(또는 extension)을 처음 등록할 때 한 번만 표시되며 동의한 이후에는 나타나지 않습니다.

![](/DevConsole/Resources/Images/DevConsole-Agree_Terms_of_Use_and_Collecting_Personal_Info.png)

## Chatbot 기본 정보 입력 {#InputChatbotInfo}

다음 절차에 따라 chatbot의 기본 정보를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Create_New_Chatbot_Extension.png)

1. **{{ book.DevConsole.cek_lang }}** 항목에서 chatbot에서 사용할 언어를 선택합니다. 현재 **{{ book.DevConsole.supported_languages }}**만 지원하고 있습니다.
2. **{{ book.DevConsole.chatbot_secret }}** 항목에 NAVER CLOUD PLATFORM에서 복사한 secret 값을 입력합니다.<br />
  ![](/DevConsole/Resources/Images/Chatbot_Secret.png)
3. **Skill 이름**, **호출 이름**, **제작사**에 해당하는 정보를 다음 항목에 입력합니다.
  1. **{{ book.DevConsole.cek_name }}**<br />
    Chatbot의 이름입니다. 추후 **{{ book.DevConsole.ManageCustomExtensions }}**에 노출됩니다.
  2. **{{ book.DevConsole.cek_invocation_name }}**<br />
    사용자가 chatbot을 호출할 때 부르는 이름입니다. 한 개 이상 최대 세 개까지 {{ book.DevConsole.cek_invocation_name }}을 등록할 수 있습니다. 일반적으로 보유하고 있는 서비스, 회사 또는 조직의 이름이 될 수 있으나 사용자의 편의 등을 위해 간결하고 특색있는 단어를 지정하는 것이 좋습니다. 범용적인 단어나 타사의 이름이나 서비스에 해당하는 용어는 사용할 수 없습니다. **{{ book.DevConsole.cek_invocation_name }}**은 chatbot 심사 시 검수받게 됩니다.
  3. **{{ book.DevConsole.cek_provider }}**<br />
    Chatbot의 제작 주체(회사나 개인)의 이름 또는 별칭을 입력합니다. 추후 **{{ book.DevConsole.ManageCustomExtensions }}**에 노출되며, chatbot 승인 과정에서 심사를 받게 됩니다.
4. **{{ book.DevConsole.cek_email }}** 항목에 연락 가능한 이메일 주소를 입력합니다.
5. **{{ book.DevConsole.cek_tester }}** 항목에 개발 중인 chatbot을 테스트할 때 이용할 {{ book.ServiceEnv.OrientedService }} 계정을 입력합니다.<br />
  당장 입력하지 않아도 되며 추후 [chatbot을 테스트](/DevConsole/Guides/Test_Chatbot_Extension.md)해야 할 때 이 필드에 값을 입력할 수 있습니다.
6. Chatbot의 기본 정보를 모두 입력한 후 **{{ book.DevConsole.cek_create }}** 버튼을 누릅니다.

Chatbot의 기본 정보 입력이 끝나면 생성된 chatbot의 정보를 수정하는 화면으로 전환됩니다. 이때부터 페이지 하단에 있는 **{{ book.DevConsole.cek_save }}** 버튼을 클릭하여 중간 내용을 언제든지 저장할 수 있으며, 다음과 같이 CEK 메뉴에서 등록된 chatbot을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_List_after_Creation.png)
